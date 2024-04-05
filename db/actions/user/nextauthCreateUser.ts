import { db } from "@/db";

const nextauthCreateUser = async (email: string, profilepic: string) => {
    try {
        const user = await db.user.create({
            data: {
                email,
                profilepic,
                username:"",
                password: ""
            }
        })
        return user
    }
    catch(error) {
        console.error("Unexpected error while creating new user: ", error)
    }
}

export default nextauthCreateUser