import { NextRequest, NextResponse } from "next/server";
import credentialsAuthorizeUser from "@/db/actions/user/credentialsAuthorizeUser";

export async function POST (req: NextRequest) {
    if (req.method === 'POST') {
        try {
            const info = await req.json()

            //Calling user login logic
            const user = await credentialsAuthorizeUser(info);
            return NextResponse.json(
                {
                  message: "User logged in successfully",
                  user
                },
                {
                  status: 201,
                }
              );
        } catch (error) {
            console.error("Error logging in user:", error);
      
            // Handling errors appropriately
            return NextResponse.json(
              {
                message: "Error logging in user",
              },
              {
                status: 400,
              }
            );
          }
    }
}