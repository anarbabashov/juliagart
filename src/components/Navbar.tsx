"use client"

import Link from "next/link"
import ThemeSwitcher from "./ThemeSwitcher"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <Link href="/" className="text-lg font-bold">📸 PhotoBlog</Link>
      <div className="flex items-center gap-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}