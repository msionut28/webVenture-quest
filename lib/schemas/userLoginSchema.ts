import { z } from 'zod'



export const userLoginSchema = z.object({
    username: z
      .string()
      .min(5, {
        message: "Nicknames are 5+ letters! Try again.",
      })
      .max(15, {
        message: "Woah there! Keep your username under 15 characters.",
      }),
    password: z.string().min(6, {
      message: "Strong passwords are 6+ characters! Try again.",
    }),
    email: z.string().email("Uh oh! That doesn't look like a real email address!"),
  });