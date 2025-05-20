"use client"

import { useForm } from "react-hook-form"
import { auth } from "@/lib/auth"

export default function RegisterPage() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: any) => {
    await auth.register(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} placeholder="Email" />
      <input type="password" {...register("password")} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  )
}