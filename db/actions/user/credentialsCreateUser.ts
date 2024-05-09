import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const credentialsCreateUser = async (
  req: NextRequest,
  res: NextResponse,
  info: any
) => {
  try {
    const hashedPassword = await bcrypt.hash(info.password, 10);

    const user = await db.user.create({
      data: {
        email: info.email,
        username: info.username,
        password: hashedPassword,
        profilepic: "",
      },
    });

    console.log(user);
    NextResponse.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    NextResponse.json(
      { message: "Failed to create user", error },
      { status: 406 }
    );
  }
};

export default credentialsCreateUser;
