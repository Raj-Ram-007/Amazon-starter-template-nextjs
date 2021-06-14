import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

import db from "../../../../firebase";

// import firebase from "firebase/app";
// import "firebase/firestore";

// const firestore = (
//   firebase.apps[0] ?? firebase.initializeApp(/* your config */)
// ).firestore();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),

    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  // ...add more providers here
  // adapter: FirebaseAdapter(firestore),
  adapter: FirebaseAdapter(db),

  NEXTAUTH_URL: process.env.HOST,

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
});
