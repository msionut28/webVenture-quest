import { z } from "zod";
import { userRegister } from "@/lib/schemas/userRegister";

const credentialsUserRegister = async (data: z.infer<typeof userRegister>) => {
  try {
    const user = { ...data };
    // Preparing the fetch request
    const res = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user), // Stringify user object for sending
    });

    // Handling response
    const responseData = await res.json();
    console.log(responseData, "response data");
  } catch (error) {
    console.error("Error encountered when creating a new user: ", error);
  }
};

export default credentialsUserRegister;
