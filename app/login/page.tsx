"use client";

// Importing necessary dependencies from libraries
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { userLogin } from "@/lib/schemas/userLoginSchema";
import { credentialsUserLogin } from "@/actions";
import { Divider } from "@/components/index";
import { CustomCardHeader } from "@/components/index";
import { CustomCardFooter } from "@/components/index";
import { CustomSubmitButton } from "@/components/index";
import { SocialLoginButtons } from "@/components/index";

// Login component for user authentication
const Login = () => {
  // Initializing form using react-hook-form with Zod resolver
  const form = useForm<z.infer<typeof userLogin>>({
    resolver: zodResolver(userLogin),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  // Function to handle form submission
  // const onSubmit = (data: z.infer<typeof userLogin>) => {
  //   console.log("Form data:", data);
  // };

  return (
    <div className="flex items-center justify-center m-auto">
      <div className="flex items-center justify-center w-6/12 gap-0">
        <Card className="shadow-2xl">
          <CustomCardHeader
            title={"Log in to your account"}
            description={"Fill in the fields below to log in to your account"}
          />
          <CardContent className="grid gap-4">
            <SocialLoginButtons />
            <Divider text={"Or continue with..."} />
            {/* Form fields for username and password */}
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="The cool nickname you picked for yourself"
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
                placeholder="Your magic password (unlocks fun!)"
                {...form.register("password", {})}
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <CustomSubmitButton
              text={"Log In"}
              function={handleSubmit(credentialsUserLogin)}
            />
            <Divider text={"Don't have an account yet?"} />
          </CardContent>
          <CustomCardFooter href={"/register"} text={"Create an account"} />
        </Card>
      </div>
    </div>
  );
};

export default Login;
