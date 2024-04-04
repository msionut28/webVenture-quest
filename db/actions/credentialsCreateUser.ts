import { db } from "@/db";

const credentialsCreateUser = async (email: string, username: string, password: string) => {
    try {
        const user = await db.user.create({
            data: {
                email,
                username,
                password,
                profilepic: ""
            }
        })
        return user
    }
    catch(error) {
        console.error("Unexpected error while creating new user: ", error)
    }
}

export default credentialsCreateUser