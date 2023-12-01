"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import useLogin from "../hooks/useLogin";

export const Login = () => {
  const { handleChange, handleLogin } = useLogin();

  return (
    <main className="space-y-3">
      <div>
        <h1 className=" text-3xl font-bold">Login</h1>
        <p className="text-sm text-zinc-500">input your email and password</p>
      </div>
      <Input
        placeholder="email.."
        name="email"
        onChange={handleChange}
        type="email"
        size="sm"
      />
      <Input
        placeholder="password.."
        name="password"
        onChange={handleChange}
        type="password"
        size="sm"
      />
      <Button
        color="primary"
        className="w-full text-center"
        onClick={handleLogin}
      >
        Login
      </Button>
      <p>
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-700">
          Register
        </Link>
      </p>
    </main>
  );
};
