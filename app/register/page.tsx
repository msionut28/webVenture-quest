"use client";

// Importing necessary dependencies from Next.js and other libraries
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { userRegister } from "@/lib/schemas/userRegister";
import { Divider } from "@/components/index";
import { CustomCardHeader } from "@/components/index";
import { CustomCardFooter } from "@/components/index";
import { CustomSubmitButton } from "@/components/index";
import { SocialLoginButtons } from "@/components/index";

// Register component for user registration
const Register = () => {
  // Initializing form using react-hook-form with Zod resolver
  const form = useForm<z.infer<typeof userRegister>>({
    resolver: zodResolver(userRegister),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  // Function to handle form submission
  const onSubmit = (data: z.infer<typeof userRegister>) => {
    console.log("Form data:", data);
  };

  return (
    <div className="flex items-center justify-center m-auto">
      <div className="flex items-center justify-center w-6/12 gap-0">
        <Card className="shadow-2xl">
          <CustomCardHeader
            title={"Create an account"}
            description={"Fill in the fields below to create an account"}
          />
          <CardContent className="grid gap-4">
            <SocialLoginButtons />
            <Divider text={"Or continue with..."} />
            {/* Form fields for email, username, and password */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your cool email address! (eg@example.com)"
                {...form.register("email", {})}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="How would you like us to call you?"
                {...form.register("username", {})}
              />
              {errors.username && (
                <span className="text-red-500 text-xs">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Pick a password that's strong and mighty!"
                {...form.register("password", {})}
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <CustomSubmitButton
              text={"Create Account"}
              function={handleSubmit(onSubmit)}
            />
            <Divider text={"Aleady have an account?"} />
          </CardContent>
          <CustomCardFooter href={"/login"} text={"Log In"} />
        </Card>
      </div>
    </div>
  );
};

export default Register;
