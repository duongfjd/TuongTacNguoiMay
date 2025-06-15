"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useRouter, usePathname } from "next/navigation"
import { LoginDialog } from "./login-dialog"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DepositDialog } from "@/components/deposit-dialog"
//import { DepositSuccessNotification } from "@/components/deposit-success-notification"

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const router = useRouter()
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false)
  const [isSuccessNotificationOpen, setIsSuccessNotificationOpen] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    const storedUserName = localStorage.getItem("userName") || ""
    setIsLoggedIn(loggedIn)
    setUserName(storedUserName)
  }, [])

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    setUserName(localStorage.getItem("userName") || "")
    setIsLoginDialogOpen(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userName")
    setIsLoggedIn(false)
    setUserName("")
    router.push("/")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/advanced-search")
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center">
              <span className="text-2xl font-bold italic text-orange-500">9</span>
              <span className="text-2xl font-bold italic text-green-500">Document</span>
            </Link>
          </div>

          {!isMobile && !isSearchOpen && (
            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
              <Link href="/categories" className="text-sm font-medium transition-colors hover:text-green-500">
                Danh mục
              </Link>
              <Link href="/popular" className="text-sm font-medium transition-colors hover:text-green-500">
                Phổ biến
              </Link>
              <Link href="/new" className="text-sm font-medium transition-colors hover:text-green-500">
                Mới nhất
              </Link>
            </nav>
          )}

          <div className={`${isSearchOpen ? "flex-1" : "hidden md:flex md:flex-1"} mx-6`}>
            <form className="relative w-full" onSubmit={handleSearch}>
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Tìm kiếm tài liệu..." className="w-full bg-gray-100 pl-8 pr-4" onFocus={() => router.push("/advanced-search")} />
            </form>
          </div>

          {isMobile && !isSearchOpen && (
            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Tìm kiếm</span>
            </Button>
          )}

          {isSearchOpen && (
            <Button variant="ghost" size="icon" className="ml-2" onClick={() => setIsSearchOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Đóng tìm kiếm</span>
            </Button>
          )}

          <div className={`${isSearchOpen ? "hidden" : "flex"} ml-auto items-center space-x-2`}>
            {isLoggedIn ? (
              <>
                <Button variant="outline" className="hidden md:flex bg-orange-500 text-white font-bold border-orange-500 hover:bg-orange-600" onClick={() => setIsDepositDialogOpen(true)}>
                  NẠP TIỀN
                </Button>
                <Button className="hidden md:flex bg-green-500 text-white font-bold hover:bg-green-600" onClick={() => router.push("/upload")}>
                  TẢI LÊN
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Thông báo</span>
                </Button>
                <Link href="/dashboard" className="flex items-center space-x-2 border-l pl-2 cursor-pointer">
                  <Image src="/icon_user.png" alt="User Avatar" width={32} height={32} className="rounded-full" />
                  <span className="text-sm font-medium">{userName}</span>
                </Link>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="hidden md:flex bg-orange-500 text-white font-bold border-orange-500 hover:bg-orange-600"
                  onClick={() => setIsDepositDialogOpen(true)}
                >
                  NẠP TIỀN
                </Button>
                <Button
                  className="hidden md:flex bg-green-500 text-white font-bold hover:bg-green-600"
                  onClick={() => router.push("/upload")}
                >
                  TẢI LÊN
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Thông báo</span>
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <nav className="grid gap-6 text-lg font-medium">
                      <Link
                        href="/categories"
                        className="flex items-center border-b pb-2 transition-colors hover:text-green-500"
                      >
                        Danh mục
                      </Link>
                      <Link
                        href="/popular"
                        className="flex items-center border-b pb-2 transition-colors hover:text-green-500"
                      >
                        Phổ biến
                      </Link>
                      <Link href="/new" className="flex items-center border-b pb-2 transition-colors hover:text-green-500">
                        Mới nhất
                      </Link>
                      <Button onClick={() => setIsLoginDialogOpen(true)} className="flex items-center border-b pb-2 transition-colors hover:text-green-500" variant="link">
                        Đăng nhập
                      </Button>
                      <Link
                        href="/auth/register"
                        className="flex items-center border-b pb-2 transition-colors hover:text-green-500"
                      >
                        Đăng ký
                      </Link>
                      <div className="flex flex-col gap-2 pt-4">
                        <Button
                          className="w-full bg-green-500 text-white font-bold hover:bg-green-600"
                          onClick={() => router.push("/upload")}
                        >
                          TẢI LÊN
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full bg-orange-500 text-white font-bold border-orange-500 hover:bg-orange-600"
                          onClick={() => setIsDepositDialogOpen(true)}
                        >
                          NẠP TIỀN
                        </Button>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
                <Button
                  onClick={() => setIsLoginDialogOpen(true)}
                  className="hidden md:block text-sm font-medium transition-colors hover:text-green-500"
                  variant="link"
                >
                  Đăng nhập
                </Button>
                <span className="hidden md:block text-gray-300">/</span>
                <Link href="/auth/register" className="hidden md:block text-sm font-medium transition-colors hover:text-green-500">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      <LoginDialog isOpen={isLoginDialogOpen} onClose={() => setIsLoginDialogOpen(false)} onLoginSuccess={handleLoginSuccess} />
      <DepositDialog
        isOpen={isDepositDialogOpen}
        onClose={() => setIsDepositDialogOpen(false)}
        onDepositSuccess={() => setIsSuccessNotificationOpen(true)}
      />
      {/* <DepositSuccessNotification
        isOpen={isSuccessNotificationOpen}
        onClose={() => setIsSuccessNotificationOpen(false)*/}
    </>
  )
}
