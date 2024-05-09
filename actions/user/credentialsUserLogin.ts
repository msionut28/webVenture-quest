import { z } from "zod";
import { userLogin } from "@/lib/schemas/userLoginSchema";

const credentialsUserRegister = async (data: z.infer<typeof userLogin>) => {
  try {
    const user = { ...data };
    const res = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const responseData = await res.json();
    console.log(responseData, "response data");
  } catch (error) {
    console.error("Error encountered when logging in the user: ", error);
  }
};

export default credentialsUserRegister
