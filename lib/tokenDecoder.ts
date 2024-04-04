import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET

const decoder = async (req: any, res: any) => {
    const token = await getToken({req})
    console.log(token);
    res.end()
}

export default decoder