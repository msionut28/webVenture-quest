import { z } from "zod";
import { userRegister } from "@/lib/schemas/userRegister";

const onSubmitCredentials = async (data: z.infer<typeof userRegister>) => {
    try{
      const user = {...data}
      console.log(user)
      const res = await fetch('/api/user/register', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
      })
      res.json();
      
    } catch (error) {
      console.error("Error encountered when creating a new user: ", error)
    };
  };

export default onSubmitCredentials