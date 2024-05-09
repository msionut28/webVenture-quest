import type { Lesson } from "@prisma/client";
import { db } from "@/db";

const fetchLessons = async(): Promise<Lesson[]> => {
    return await db.lesson.findMany({
        orderBy: [
            {
                updatedAt: 'desc'
            }
        ]
    })
}

export default fetchLessons