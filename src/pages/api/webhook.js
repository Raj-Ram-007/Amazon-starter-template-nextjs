import { buffer } from "micro";
import * as admin from "firebase-admin";

// Connect to Firebase

const serviceAccount = require("../../../permissions.json");

const app = !admin.apps.length
  ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
  : admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
  console.log("Fulfilling order", session);

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} had been added to the DB.`);
    });
};

export default async (req, res) => {
  console.log("***> In the call...");

  if (req.method === "POST") {
    console.log("***> In the call POST...");
    console.log("***>req: ", req.toString);

    const requestBuffer = await buffer(req);

    console.log("***> In the call 2...");

    const payload = requestBuffer.toString();

    console.log("***> In the call 3...");

    const sig = req.headers["stripe-signature"];

    console.log("***> In the call 4...");

    let event;

    // Did event come from Stripe ?

    console.log("***> Did it come from stripe...");

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("ERROR: ", err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    // Handle the checkout.session.completed event

    console.log("***> Handle checkout...");

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Fulfil order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook error: ${err.message}`));
    }
  }
};

// This is needed, otherwise stripe listener throws an error in webhook.js that there is a missing body

export const config = {
  api: { bodyParser: false, externalResolver: true },
};
