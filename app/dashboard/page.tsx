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
import { DepositDialog } from "@/components/deposit-dialog"
import { DepositSuccessNotification } from "@/components/deposit-success-notification"

interface Transaction {
  id: string;
  type: string;
  content: {
    main: string;
    link?: string;
    balance?: string;
  };
  status: string;
  amount: string;
  isDecrease: boolean;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [financeSubTab, setFinanceSubTab] = useState("purchase")
  const router = useRouter()
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false)
  const [isSuccessNotificationOpen, setIsSuccessNotificationOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [icon1, setIcon1] = useState('/reveal_icon.jpg');
  const [icon2, setIcon2] = useState('/reveal_icon.jpg');

  const togglePasswordVisibility1 = () => {
    setShowPassword(!showPassword);
    setIcon1(showPassword ? '/reveal_icon.jpg' : '/hidden_icon.jpg');
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword(!showPassword);
    setIcon2(showPassword ? '/reveal_icon.jpg' : '/hidden_icon.jpg');
  };

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

  const purchaseTransactions: Transaction[] = [
    {
      id: '9documentBuy- 4055475 27/06/2024, 08:30',
      type: 'Mua tài liệu',
      content: {
        main: 'Mua tài liệu:',
        link: 'Mô hình hóa nghiệp vụ với BPMN',
        balance: '- Số dư tích lũy: 27.000đ'
      },
      status: 'Thành công',
      amount: '5.000 đ ↓',
      isDecrease: true
    },
    {
      id: '9documentBuy- 3896119 04/12/2023, 02:03',
      type: 'Mua tài liệu',
      content: {
        main: 'Mua tài liệu:',
        link: 'Đồ án Xây dựng chương trình quản lý sinh viên bằng ngôn ngữ lập trình C++',
        balance: '- Số dư tích lũy: 32.000đ'
      },
      status: 'Thành công',
      amount: '15.000 đ ↓',
      isDecrease: true
    },
    {
      id: '9documentBuy- 3892054 29/11/2023, 23:30',
      type: 'Thanh toán gói tải 0đ',
      content: {
        main: 'Thanh toán gói tải tài liệu 0đ: gói 1 tháng - Số dư tích lũy: 47.000đ'
      },
      status: 'Thành công',
      amount: '30.000 đ ↓',
      isDecrease: true
    },
    {
      id: '9documentBuy- 3866087 06/11/2023, 19:52',
      type: 'Mua tài liệu',
      content: {
        main: 'Mua tài liệu:',
        link: 'Công nghệ phần mềm'
      },
      status: 'Thành công',
      amount: '25.000 đ ↓',
      isDecrease: true
    },
    {
      id: '9documentAdd- 5522482 06/11/2023, 19:52',
      type: 'Nạp tiền QR Ngân hàng',
      content: {
        main: 'ATM ID: 2180302 - Mệnh giá: 110,000 VND'
      },
      status: 'Thành công',
      amount: '102.000 đ ↑',
      isDecrease: false
    }
  ];

  const revenueTransactions: Transaction[] = [
    {
      id: '9revenue- 4055475 27/06/2024, 08:30',
      type: 'Doanh thu tài liệu',
      content: {
        main: 'Doanh thu từ:',
        link: 'Mô hình hóa nghiệp vụ với BPMN',
        balance: '- Số dư tích lũy: 1.250.000đ'
      },
      status: 'Thành công',
      amount: '450.000 đ ↑',
      isDecrease: false
    },
    {
      id: '9revenue- 3896119 04/12/2023, 02:03',
      type: 'Doanh thu tài liệu',
      content: {
        main: 'Doanh thu từ:',
        link: 'Đồ án Xây dựng chương trình quản lý sinh viên',
        balance: '- Số dư tích lũy: 800.000đ'
      },
      status: 'Thành công',
      amount: '250.000 đ ↑',
      isDecrease: false
    },
    {
      id: '9revenue- 3892054 29/11/2023, 23:30',
      type: 'Rút tiền',
      content: {
        main: 'Rút tiền về tài khoản ngân hàng',
        balance: '- Số dư tích lũy: 550.000đ'
      },
      status: 'Đang xử lý',
      amount: '250.000 đ ↓',
      isDecrease: true
    }
  ];

  const currentTransactions = financeSubTab === 'purchase' ? purchaseTransactions : revenueTransactions;

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
                              <Image src="/edit_icon.jpg" alt="Edit Icon" width={18} height={18} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dob">Ngày sinh</Label>
                            <div className="relative w-full">
                              <Input id="dob" type="text" defaultValue="2004-06-20" className="" />
                              <Image src="/edit_icon.jpg" alt="Edit Icon" width={18} height={18} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gender">Giới tính</Label>
                            <div className="relative w-full">
                              <Input id="gender" defaultValue="Nam" className="pr-10" />
                              <Image src="/edit_icon.jpg" alt="Edit Icon" width={18} height={18} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Địa chỉ</Label>
                            <div className="relative w-full">
                              <Input id="address" defaultValue="Đống Đa - Hà Nội" className="pr-10" />
                              <Image src="/edit_icon.jpg" alt="Edit Icon" width={18} height={18} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
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
                            <Image src="/edit_icon.jpg" alt="Edit Icon" width={18} height={18} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">Mật khẩu mới</Label>
                          <div className="relative w-full">
                            <Input id="new-password" type="password" placeholder="***************" className="pr-10" />
                             <Image
                                src={icon1}
                                alt={showPassword ? 'Hide Password Icon' : 'View Password Icon'}
                                width={29}
                                height={29}
                                className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer"
                                onClick={togglePasswordVisibility1}
                              />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
                          <div className="relative w-full">
                            <Input id="confirm-password" type="password" placeholder="***************" className="pr-10" />
                            <Image
                                src={icon2}
                                alt={showPassword ? 'Hide Password Icon' : 'View Password Icon'}
                                width={29}
                                height={29}
                                className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 cursor-pointer"
                                onClick={togglePasswordVisibility2}
                              />
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
                        <Image src="/change_ava_icon.jpg" alt="Change Avatar Icon" width={20} height={20} />
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
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-bold">Thông tin tài khoản</CardTitle>
                    </CardHeader>
                    <CardContent>                         
                        <div className="flex space-x-2 justify-between">
                        <div>
                          <h2 className="font-medium text-2xl">Số dư tài khoản doanh thu</h2>
                          <div className="text-2xl text-orange-500 font-medium mb-2 flex space-x-2 " >
                            {stats.balance.toLocaleString("vi-VN")} VNĐ 
                          </div>
                        </div>
                        <Button className="bg-orange-500 hover:bg-orange-600 w-40" onClick={() => setIsDepositDialogOpen(true)}>Nạp tiền</Button>
                      </div>

                      <div className="flex space-x-2 justify-between">
                        <div>
                          <h2 className="font-medium text-2xl">Số dư tài khoản mua tài liệu</h2>
                          <div className="text-2xl text-orange-500 font-medium mb-2 flex space-x-2" >
                            {stats.earnings.toLocaleString("vi-VN")} VNĐ 
                          </div>
                        </div>
                        <Button className="bg-orange-500 hover:bg-orange-600 w-40" >Rút tiền</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Lịch sử giao dịch</CardTitle>
                      <CardDescription>Các giao dịch gần đây nhất của bạn</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Tab điều hướng */}
                      <div className="flex border-b border-gray-200">
                        <button
                          onClick={() => setFinanceSubTab('purchase')}
                          className={`px-4 py-3 border-b-2 ${
                            financeSubTab === 'purchase'
                              ? 'border-green-500 bg-green-50 text-green-600'
                              : 'border-transparent text-gray-600'
                          } text-sm font-medium`}
                        >
                          Tài khoản mua tài liệu
                        </button>
                        <button
                          onClick={() => setFinanceSubTab('revenue')}
                          className={`px-4 py-3 border-b-2 ${
                            financeSubTab === 'revenue'
                              ? 'border-green-500 bg-green-50 text-green-600'
                              : 'border-transparent text-gray-600'
                          } text-sm font-medium`}
                        >
                          Tài khoản doanh thu
                        </button>
                      </div>

                      {/* Bảng lịch sử giao dịch */}
                      <div className="border border-gray-200 rounded-lg overflow-hidden mt-4">
                        {/* Header bảng */}
                        <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200">
                          <div className="col-span-3 px-4 py-3">
                            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                              MÃ GIAO DỊCH
                            </span>
                          </div>
                          <div className="col-span-2 px-4 py-3">
                            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                              LOẠI GIAO DỊCH
                            </span>
                          </div>
                          <div className="col-span-3 px-4 py-3">
                            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                              NỘI DUNG
                            </span>
                          </div>
                          <div className="col-span-2 px-4 py-3">
                            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                              TRẠNG THÁI
                            </span>
                          </div>
                          <div className="col-span-2 px-4 py-3">
                            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                              SỐ TIỀN
                            </span>
                          </div>
                        </div>

                        {/* Nội dung bảng */}
                        <div className="max-h-96 overflow-y-auto">
                          {currentTransactions.map((transaction, index) => (
                            <div 
                              key={index} 
                              className={`grid grid-cols-12 ${
                                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                              } border-b border-gray-100 last:border-b-0`}
                            >
                              {/* Cột Mã giao dịch */}
                              <div className="col-span-3 px-4 py-3 border-r border-gray-100">
                                <p className="text-sm text-gray-900 truncate" title={transaction.id}>
                                  {transaction.id}
                                </p>
                              </div>
                              
                              {/* Cột Loại giao dịch */}
                              <div className="col-span-2 px-4 py-3 border-r border-gray-100">
                                <p className="text-sm text-gray-900">
                                  {transaction.type}
                                </p>
                              </div>
                              
                              {/* Cột Nội dung */}
                              <div className="col-span-3 px-4 py-3 border-r border-gray-100">
                                <div className="flex flex-col space-y-1">
                                  <p className="text-sm text-gray-900">
                                    {transaction.content.main}
                                  </p>
                                  {transaction.content.link && (
                                    <a href="#" className="text-sm text-green-600 hover:underline truncate">
                                      {transaction.content.link}
                                    </a>
                                  )}
                                  {transaction.content.balance && (
                                    <p className="text-sm text-gray-500">
                                      {transaction.content.balance}
                                    </p>
                                  )}
                                </div>
                              </div>
                              
                              {/* Cột Trạng thái */}
                              <div className="col-span-2 px-4 py-3 border-r border-gray-100">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  transaction.status === 'Thành công' 
                                    ? 'bg-green-100 text-green-800' 
                                    : transaction.status === 'Đang xử lý'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {transaction.status}
                                </span>
                              </div>
                              
                              {/* Cột Số tiền */}
                              <div className="col-span-2 px-4 py-3">
                                <p className={`text-sm font-medium ${
                                  transaction.isDecrease ? 'text-red-600' : 'text-green-600'
                                }`}>
                                  {transaction.amount}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
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