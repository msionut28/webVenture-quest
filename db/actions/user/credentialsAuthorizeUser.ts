import { db } from "@/db";
import { compare } from "bcrypt";

const credentialsAuthorizeUser = async (info: any) => {
    const {username, password} = info
    const user = await db.user.findUnique({where: {username}})
    if (!user) return null
    const passwordMatch = await compare(password, user.password)
    if (!passwordMatch) return null
    console.log(user);
    return user
}

export default credentialsAuthorizeUser