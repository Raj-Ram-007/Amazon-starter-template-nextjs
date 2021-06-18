import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("getproduct called: ", req.body);

  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const product = await prisma.product.findMany({
      where: { isActive: true },
    });

    res.status(200);
    res.json({ product });
  } catch (e) {
    res.status(500);
    res.json({ error: "Unable to retreieve product" + e.message });
  } finally {
    await prisma.$disconnect();
  }
};
