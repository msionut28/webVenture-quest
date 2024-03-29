import type { Post } from "@prisma/client";
import { db } from "@/db";

export async function fetchLessons(): Promise<Post[]> {
    return await db.post.findMany({
        orderBy: [
            {
                updatedAt: 'desc'
            }
        ]
    })
}