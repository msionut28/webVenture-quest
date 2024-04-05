import { db } from "@/db";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'

const credentialsCreateUser = async (req: NextApiRequest, res:NextApiResponse) => {
    const hashedPassword = async (password: string) => {
        return await bcrypt.hash(password, 10)
    }   
    const user = await db.user.create({
        data: {...req.body, password: hashedPassword(req.body.password), profilepic: ""}
    })
    res.json(user)
}

export default credentialsCreateUser