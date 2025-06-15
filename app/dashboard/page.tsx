"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Download, FileText, BarChart3, Upload, Wallet, Settings, LogOut, Plus, Search, User, DollarSign, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const router = useRouter()

  // Mock data
  const stats = {
    balance: 1250000,
    uploads: 12,
    downloads: 345,
    earnings: 850000,
  }

  const recentDocuments = [
    {
      id: 1,
      title: "Tuyển chọn những bài luận văn phát triển sản phẩm du lịch mang tính thực tiễn cao",
      date: "08-5-2024",
      downloads: 32,
      earnings: 450000,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 2,
      title: "Hướng dẫn làm đồ án hệ thống cung cấp điện cho xưởng cơ khí MỚI NHẤT 2020",
      date: "07-8-2024",
      downloads: 18,
      earnings: 250000,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 3,
      title: "Top 10 tài liệu trắc nghiệm được lý có đáp án - Top Báo Cáo Thực Tập Tốt Nhất",
      date: "15-10-2024",
      downloads: 24,
      earnings: 150000,
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  const purchasedDocuments = [
    {
      id: 4,
      title: "Tổng hợp 10 tài liệu về thực tập động cơ hay nhất - Top Báo Cáo Thực Tập Tốt Nhất",
      date: "10-3-2024",
      price: 50000,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 5,
      title: "10 Mẫu lý do chọn đề tài nghiên cứu - Hướng dẫn cách viết lý do chọn đề tài",
      date: "08-8-2024",
      price: 35000,
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

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
                              <Image src="/image-480.png" alt="Edit Icon" width={18} height={18} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dob">Ngày sinh</Label>
                            <div className="relative w-full">
                              <Input id="dob" type="date" defaultValue="2004-06-20" className="pr-10" />
                              <Image src="/image-500.png" alt="Calendar Icon" width={25} height={25} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gender">Giới tính</Label>
                            <div className="relative w-full">
                              <Input id="gender" defaultValue="Nam" className="pr-10" />
                              <Image src="/image-481.png" alt="Edit Icon" width={18} height={18} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Địa chỉ</Label>
                            <div className="relative w-full">
                              <Input id="address" defaultValue="Đống Đa - Hà Nội" className="pr-10" />
                              <Image src="/image-482.png" alt="Edit Icon" width={18} height={18} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
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
                            <Input id="email" type="email" defaultValue="User@example.com" disabled className="pr-10" />
                            <Image src="/image-483.png" alt="Edit Icon" width={18} height={18} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">Mật khẩu mới</Label>
                          <div className="relative w-full">
                            <Input id="new-password" type="password" placeholder="***************" className="pr-10" />
                            <Image src="/image-510.png" alt="View Password Icon" width={29} height={29} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
                          <div className="relative w-full">
                            <Input id="confirm-password" type="password" placeholder="***************" className="pr-10" />
                            <Image src="/image-511.png" alt="View Password Icon" width={29} height={29} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
                          </div>
                        </div>
                        <Button className="bg-orange-500 hover:bg-orange-600">CẬP NHẬT THÔNG TIN</Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="w-full md:w-1/3 shrink-0">
                    <Card className="flex flex-col items-center p-6 h-full">
                      <div className="h-32 w-32 rounded-full flex items-center justify-center text-6xl font-bold" style={{backgroundColor: '#C45FC5', color: 'white'}}>
                        U
                      </div>
                      <Button variant="link" className="mt-4 flex items-center p-0 h-auto text-gray-600 font-bold text-xs" style={{fontSize: '13.671875px'}}>
                        <Image src="/image-490.png" alt="Change Avatar Icon" width={20} height={20} className="mr-2 opacity-50" />
                        Đổi Avatar
                      </Button>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              // Content for Tài liệu
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">Tài liệu của tôi</h1>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">Tài liệu đã đăng</h1>
                  <Link href="/upload">
                    <Button className="bg-green-500 hover:bg-green-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Đăng tài liệu mới
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-gray-500" />
                  <Input placeholder="Tìm kiếm tài liệu..." className="max-w-sm" />
                </div>

                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">Tất cả</TabsTrigger>
                    <TabsTrigger value="published">Đã xuất bản</TabsTrigger>
                    <TabsTrigger value="draft">Bản nháp</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all">
                    <Card>
                      <CardHeader>
                        <CardTitle>Tất cả tài liệu của bạn</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {recentDocuments.length > 0 ? (
                          <div className="space-y-4">
                            {recentDocuments.map((doc) => (
                              <div key={doc.id} className="flex items-center space-x-4">
                                <div className="relative h-16 w-24 shrink-0">
                                  <Image
                                    src={doc.image || "/placeholder.svg"}
                                    alt={doc.title}
                                    fill
                                    className="object-cover rounded"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <Link
                                    href={`/document/${doc.id}`}
                                    className="text-sm font-medium hover:text-green-500 line-clamp-2"
                                  >
                                    {doc.title}
                                  </Link>
                                  <p className="text-xs text-gray-500">
                                    Ngày đăng: {doc.date} • Lượt tải: {doc.downloads} • Doanh thu: {doc.earnings.toLocaleString("vi-VN")} VNĐ
                                  </p>
                                </div>
                                <div className="text-right shrink-0">
                                  <Button variant="ghost" size="icon">
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Xóa</span>
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center text-gray-500">Chưa có tài liệu nào.</div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="published">
                    <div className="text-center text-gray-500">Chưa có tài liệu đã xuất bản.</div>
                  </TabsContent>
                  <TabsContent value="draft">
                    <div className="text-center text-gray-500">Chưa có bản nháp tài liệu.</div>
                  </TabsContent>
                </Tabs>

                <h1 className="text-2xl font-bold">Tài liệu đã mua</h1>
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-gray-500" />
                  <Input placeholder="Tìm kiếm tài liệu đã mua..." className="max-w-sm" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {purchasedDocuments.length > 0 ? (
                    purchasedDocuments.map((doc) => (
                      <Card key={doc.id}>
                        <CardContent className="p-4">
                          <div className="relative h-32 w-full mb-2">
                            <Image
                              src={doc.image || "/placeholder.svg"}
                              alt={doc.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <Link href={`/document/${doc.id}`} className="font-medium line-clamp-2 hover:text-green-500">
                            {doc.title}
                          </Link>
                          <p className="text-sm text-gray-500">Ngày mua: {doc.date}</p>
                          <p className="text-sm font-bold mt-1">{doc.price.toLocaleString("vi-VN")} VNĐ</p>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="col-span-full text-center text-gray-500">Chưa có tài liệu đã mua.</div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "finance" && (
              // Content for Tài chính
              <div className="space-y-6">
                <h1 className="text-2xl font-bold"> Quản lý tài chính</h1>
                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">Ví của tôi</h1>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Số dư hiện tại</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">
                        {stats.balance.toLocaleString("vi-VN")} VNĐ
                      </div>
                      <div className="flex space-x-2">
                        <Button className="bg-green-500 hover:bg-green-600" onClick={() => router.push("/dashboard/deposit")}>Nạp tiền</Button>
                        <Button variant="outline">Rút tiền</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Lịch sử giao dịch</CardTitle>
                      <CardDescription>Các giao dịch gần đây nhất của bạn</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Nạp tiền</p>
                            <p className="text-sm text-gray-500">20/05/2024</p>
                          </div>
                          <p className="font-medium text-green-500">+1.000.000 VNĐ</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Mua tài liệu: Hướng dẫn làm đồ án...</p>
                            <p className="text-sm text-gray-500">18/05/2024</p>
                          </div>
                          <p className="font-medium text-red-500">-45.000 VNĐ</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Doanh thu tài liệu: Tuyển chọn...</p>
                            <p className="text-sm text-gray-500">15/05/2024</p>
                          </div>
                          <p className="font-medium text-green-500">+450.000 VNĐ</p>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <Button variant="outline" className="w-full">
                          Xem tất cả giao dịch
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
