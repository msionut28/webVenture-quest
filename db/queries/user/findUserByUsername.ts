import type { User } from "@prisma/client"
import { db } from "@/db"

const findUserByUsername = async (username :string): Promise<User | null> => {
    return await db.user.findUnique({
        where: { username }
    })
}

export default findUserByUsername