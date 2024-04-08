import type { NextApiRequest, NextApiResponse } from "next";
import { credentialsCreateUser } from "@/db/actions/index";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await credentialsCreateUser(req, res);
  } else {
    throw new Error(`The HTTP ${req.method} is not supported at this route!`);
  }
}
