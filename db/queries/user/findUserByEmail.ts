import type { User } from "@prisma/client";
import { db } from "@/db"

const findUserByEmail = async (email :string): Promise<User | null> => {
    return await db.user.findUnique({
        where: { email }
    })
}

export default findUserByEmail