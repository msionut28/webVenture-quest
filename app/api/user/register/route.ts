import { NextRequest, NextResponse } from "next/server";
import { credentialsCreateUser } from "@/db/actions";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    try {
      const info = await req.json();

      // Calling user creation logic
      const user = await credentialsCreateUser(req, res, info);

      // Successful user creation
      return NextResponse.json(
        {
          message: "User created successfully",
          user,
        },
        {
          status: 201,
        }
      );
    } catch (error) {
      console.error("Error creating user:", error);

      // Handling errors appropriately
      return NextResponse.json(
        {
          message: "Error creating user",
        },
        {
          status: 400,
        }
      );
    }
  } else {
    throw new Error(`The HTTP ${req.method} is not supported at this route!`);
  }
}
