"use client";

import { signIn } from 'next-auth/react'
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
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
import { Icons } from "@/components/ui/icons";

const formSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: "Username must be at least 5 characters.",
    })
    .max(15, {
      message: "Username must not be longer than 15 characters",
    }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  email: z.string().email("Invalid email format"),
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data);
  };
  return (
    <div className="flex items-center justify-center m-auto">
      <div className="flex items-center justify-center w-6/12 gap-0">
        <Card className="shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Fill in the fields below to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button  className="bg-lime-300" variant="outline" onClick={() => signIn('google', {redirect:false})}>
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button className="bg-lime-300" variant="outline" onClick={() => signIn('github', {redirect:false})}>
                <Icons.gitHub className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or Continue With
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="eg@example.com"
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
                placeholder="Username"
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
                placeholder="Password"
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
              Create account
            </Button>
          <div className="relative mt-5">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Already have an account?
              </span>
            </div>
          </div>
          </CardContent>
          <CardFooter className="flex flex-col">
              <Link href="/login">
                <Button className="w-80 bg-lime-300" variant="outline">Log In</Button>
              </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
