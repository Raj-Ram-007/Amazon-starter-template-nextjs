import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("createProduct called: ", req.body);

  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const { product: productData } = req.body;

    const product = await prisma.product.create({
      data: {
        title: productData.title,
        price: productData.price,
        isActive: productData.isActive,
        category: productData.category,
        description: productData.description,
        image: productData.image,
      },
    });

    res.status(201);
    res.json({ product });
  } catch (e) {
    res.status(500);
    res.json({ error: "Unable to save" + e });
  } finally {
    await prisma.$disconnect();
  }
};
