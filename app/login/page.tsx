"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: "Nicknames are 5+ letters! Try again.",
    })
    .max(15, {
      message: "Woah there! Keep your username under 15 characters.",
    }),
  password: z.string().min(6, {
    message: "Your strong password is 6+ characters! Try again.",
  }),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);
  };
  return (
    <div className="flex items-center justify-center m-auto">
      <div className="flex items-center justify-center w-6/12 gap-0">
        <Card className="shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Log in to your account</CardTitle>
            <CardDescription>
              Fill in the fields below to log in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
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
                id="pasword"
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
            <Button
              className="w-full bg-lime-300"
              type="submit"
              onClick={handleSubmit(onSubmit)}
              variant="outline"
            >
              Log in
            </Button>
            <div className="relative mt-5">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Don't have an account yet?
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Link href="/register">
              <Button className="w-80 bg-lime-300" variant="outline">
                Create an account
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
