"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import useRegister from "../hooks/useRegister";

export const Register = () => {
  const { handleChange, handleRegister } = useRegister();

  return (
    <main className="space-y-3">
      <div>
        <h1 className=" text-3xl font-bold">Register</h1>
        <p className="text-sm text-zinc-500">
          input your username, email and password
        </p>
      </div>
      <Input
        placeholder="username.."
        name="name"
        onChange={handleChange}
        type="text"
        size="sm"
        isClearable
      />
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
        onClick={handleRegister}
      >
        Register
      </Button>
      <p>
        Already have an account?{" "}
        <Link href="/login" className="text-blue-700">
          Login
        </Link>
      </p>
    </main>
  );
};
