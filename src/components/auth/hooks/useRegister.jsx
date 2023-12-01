"use client";
import { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import toast from "react-hot-toast";

export default function useRegister() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  async function handleRegister() {
    const { name, email, password } = input;
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!data) {
      toast.error("Sorry, failed to register..");
      return;
    }
    toast.success("Success to register! Now, please login.");
  }
  return { handleChange, handleRegister };
}
