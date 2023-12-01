"use client";
import { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function useLogin() {
  const router = useRouter();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  async function handleLogin() {
    const { email, password } = input;
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!data) {
      toast.error("Sorry, failed to login..");
      return;
    }
    Cookies.set("token", data.token);
    toast.success("Success to login! Now directing to..");
    router.push("/dashboard");
  }
  return { handleChange, handleLogin };
}
