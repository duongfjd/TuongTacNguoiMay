"use client"

import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FileText, LogOut, User, DollarSign, Eye, Calendar, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useRouter, useSearchParams } from "next/navigation"
import { DepositDialog } from "@/components/deposit-dialog"
import { DepositSuccessNotification } from "@/components/deposit-success-notification"
import { DocumentsTab } from "./documents-tab"
import { FinanceTab } from "./finance-tab"

export default function DashboardPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("profile")
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false)
  const [isSuccessNotificationOpen, setIsSuccessNotificationOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab) {
      setActiveTab(tab)
    }
  }, [searchParams])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const userName = "Nguyễn Văn A"

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C65FCF' }}>
                  <span className="font-bold text-white">U</span>
                </div>

                <div>
                  <p className="font-medium">{userName}</p>
                  <p className="text-sm text-gray-500">user@example.com</p>
                </div>
              </div>

              <nav className="space-y-1">
                {/* Hồ sơ cá nhân (Profile) */}
                <Button
                  variant={activeTab === "profile" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "profile" ? "bg-green-500 hover:bg-green-600" : ""}`}
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="h-4 w-4 mr-2" />
                  Hồ sơ cá nhân
                </Button>
                {/* Tài liệu (Documents) */}
                <Button
                  variant={activeTab === "documents" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "documents" ? "bg-green-500 hover:bg-green-600" : ""}`}
                  onClick={() => setActiveTab("documents")}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Tài liệu
                </Button>
                {/* Tài chính (Finance) */}
                <Button
                  variant={activeTab === "finance" ? "default" : "ghost"}
                  className={`w-full justify-start ${activeTab === "finance" ? "bg-green-500 hover:bg-green-600" : ""}`}
                  onClick={() => setActiveTab("finance")}
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Tài chính
                </Button>
              </nav>

              <div className="pt-6 mt-6 border-t">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn")
                    localStorage.removeItem("userName")
                    router.push("/")
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Đăng xuất
                </Button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">Thông tin cá nhân</h1>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Thông tin</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Tên người dùng</Label>
                            <div className="relative w-full">
                              <Input id="fullName" defaultValue="User#123" className="pr-10" />
                              <Edit className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 cursor-pointer" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dob">Ngày sinh</Label>
                            <div className="relative w-full">
                              <Input id="dob" type="text" defaultValue="2004-06-20" className="" />
                              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 cursor-pointer" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gender">Giới tính</Label>
                            <div className="relative w-full">
                              <Input id="gender" defaultValue="Nam" className="pr-10" />
                              <Edit className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 cursor-pointer" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Địa chỉ</Label>
                            <div className="relative w-full">
                              <Input id="address" defaultValue="Đống Đa - Hà Nội" className="pr-10" />
                              <Edit className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 cursor-pointer" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>


                    <Card>
                      <CardHeader>
                        <CardTitle>Email tài khoản & Mật khẩu</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative w-full">
                            <Input id="email" type="email" defaultValue="User@example.com" className="pr-10" />
                            <Edit className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 cursor-pointer" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">Mật khẩu mới</Label>
                          <div className="relative w-full">
                            <Input id="new-password" type={showPassword ? "text" : "password"} placeholder="***************" className="pr-10" />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-1/2 -translate-y-1/2"
                              onClick={togglePasswordVisibility}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
                          <div className="relative w-full">
                            <Input id="confirm-password" type={showPassword ? "text" : "password"} placeholder="***************" className="pr-10" />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-1/2 -translate-y-1/2"
                              onClick={togglePasswordVisibility}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <Button className="bg-orange-500 hover:bg-orange-600">CẬP NHẬT THÔNG TIN</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="w-full md:w-1/3 shrink-0">
                    <Card className="flex flex-col items-center p-6 h-full">
                      <div className="h-32 w-32 rounded-full flex items-center justify-center text-6xl font-bold" style={{ backgroundColor: '#C45FC5', color: 'white' }}>
                        U
                      </div>
                      <Button variant="link" className="mt-4 flex items-center p-0 h-auto text-gray-600 font-bold text-xs" style={{ fontSize: '13.671875px' }}>
                        <Image src="/change_ava_icon.jpg" alt="Change Avatar Icon" width={20} height={20} />
                        Đổi Avatar
                      </Button>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <DocumentsTab />
            )}

            {activeTab === "finance" && (
              <FinanceTab
                onDepositClick={() => setIsDepositDialogOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
      <DepositDialog
        isOpen={isDepositDialogOpen}
        onClose={() => setIsDepositDialogOpen(false)}
        onDepositSuccess={() => setIsSuccessNotificationOpen(true)}
      />
      <DepositSuccessNotification
        isOpen={isSuccessNotificationOpen}
        onClose={() => setIsSuccessNotificationOpen(false)}
      />
    </>
  )
}