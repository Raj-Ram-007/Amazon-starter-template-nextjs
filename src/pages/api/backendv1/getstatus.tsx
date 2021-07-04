import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("getstatus called 1: ", req.body);

  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const status = await prisma.appSetting.findFirst({
      where: { setting: "IMAGE_LOC" },
    });

    // Find First
    // const st = data["status"]["value"];
    // {"status":{"id":1,"appsettingcode":"IMAGE_LOC","setting":"IMAGE_LOC","value":"ENGINESROOM","created_at":"2021-07-01T10:57:16.777Z","updated_at":"2021-07-01T10:57:16.777Z"}}
    // Find Many
    // const st = data["status"][0]["value"];
    // {"status":[{"id":1,"appsettingcode":"IMAGE_LOC","setting":"IMAGE_LOC","value":"ENGINESROOM","created_at":"2021-07-01T10:57:16.777Z","updated_at":"2021-07-01T10:57:16.777Z"}]}

    res.status(200);
    res.json(status.value);
  } catch (e) {
    res.status(500);
    res.json({ error: "Unable to retreieve status" + e.message });
  } finally {
    await prisma.$disconnect();
  }
};
