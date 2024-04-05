import type { NextApiRequest, NextApiResponse } from "next";
import credentialsCreateUser from "@/db/actions/credentialsCreateUser";

const userRegister = async (req: NextApiRequest, res:NextApiResponse) => {
    if(req.method === "POST") {
        await credentialsCreateUser(req, res)
    } else {
        throw new Error (`The HTTP ${req.method} is not supported at this route!`)
    }
}

export default userRegister