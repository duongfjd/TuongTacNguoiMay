"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface LoginDialogProps {
  onLoginSuccess: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function LoginDialog({ onLoginSuccess, isOpen, onClose }: LoginDialogProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Đăng nhập thất bại")
      }

      // Simulate a successful login by storing user info (for demonstration)
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', 'User#123'); // Replace with actual user name from API response

      onLoginSuccess();
      onClose();
      // router.push("/dashboard"); // Removed automatic redirection
    } catch (err) {
      setError("Email hoặc mật khẩu không đúng")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Đăng nhập</DialogTitle>
          <DialogDescription className="text-center">
            Đăng nhập để truy cập vào tài khoản của bạn
          </DialogDescription>
        </DialogHeader>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">
              Đăng nhập
            </Button>
          </form>
        </div>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            <Link href="/auth/register" className="text-primary hover:underline">
              Chưa có tài khoản? Đăng ký ngay
            </Link>
          </div>
          <div className="text-sm text-center">
            <Link href="/auth/forgot-password" className="text-primary hover:underline">
              Quên mật khẩu?
            </Link>
          </div>
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Hoặc đăng nhập với</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              Google
            </Button>
            <Button variant="outline" className="w-full">
              Facebook
            </Button>
          </div>
        </CardFooter>
      </DialogContent>
    </Dialog>
  )
} 