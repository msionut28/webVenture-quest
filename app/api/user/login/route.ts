import { NextRequest, NextResponse } from "next/server";
import credentialsAuthorizeUser from "@/db/actions/user/credentialsAuthorizeUser";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const info = await req.json();

      //Calling user login logic
      const user = await credentialsAuthorizeUser(info);

      if (!user) {
        return NextResponse.json(
          {
            message: "Invalid Credentials",
          },
          {
            status: 401,
          }
        );
      }
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error("JWT_SECRET environment variable is not defined");
      }

      const token = jwt.sign({ userId: user.id }, secret as jwt.Secret, {
        expiresIn: "1h",
      });

      const cookie = serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      });

      const response = NextResponse.json(
        {
          message: "User logged in successfully",
          user,
          cookie
        },
        {
          status: 201,
        }
      );
      response.headers.set("Set-Cookie", cookie);
      return response;
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
  } else {
    return NextResponse.json(
      {
        message: "Method not allowed",
      },
      {
        status: 405,
      }
    );
  }
}
