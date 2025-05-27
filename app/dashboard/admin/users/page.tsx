"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminUsersPage() {
  // Mock data
  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      phone: "0123456789",
      joinDate: "01-01-2024",
      status: "Hoạt động",
      balance: 500000,
      revenue: 1500000
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "tranthib@example.com",
      phone: "0987654321",
      joinDate: "15-02-2024",
      status: "Khóa",
      balance: 0,
      revenue: 0
    }
  ]

  const transactions = [
    {
      id: 1,
      userId: 1,
      type: "Nạp tiền",
      amount: 1000000,
      method: "ATM",
      date: "01-05-2024",
      status: "Thành công"
    },
    {
      id: 2,
      userId: 1,
      type: "Mua tài liệu",
      amount: -50000,
      method: "Ví điện tử",
      date: "02-05-2024",
      status: "Thành công"
    }
  ]

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Quản lý người dùng</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-4">
              <Input placeholder="Tìm kiếm người dùng..." className="w-[300px]" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="active">Hoạt động</SelectItem>
                  <SelectItem value="locked">Khóa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Họ tên</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Số điện thoại</TableHead>
                <TableHead>Ngày tham gia</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Số dư</TableHead>
                <TableHead>Doanh thu</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "Hoạt động" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>{user.balance.toLocaleString()}đ</TableCell>
                  <TableCell>{user.revenue.toLocaleString()}đ</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Chi tiết</Button>
                      <Button variant="destructive" size="sm">Khóa</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Tabs defaultValue="transactions" className="mt-6">
            <TabsList>
              <TabsTrigger value="transactions">Lịch sử giao dịch</TabsTrigger>
              <TabsTrigger value="documents">Tài liệu đã đăng</TabsTrigger>
            </TabsList>
            <TabsContent value="transactions">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Loại giao dịch</TableHead>
                    <TableHead>Số tiền</TableHead>
                    <TableHead>Phương thức</TableHead>
                    <TableHead>Ngày</TableHead>
                    <TableHead>Trạng thái</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell className={transaction.amount < 0 ? "text-red-600" : "text-green-600"}>
                        {transaction.amount.toLocaleString()}đ
                      </TableCell>
                      <TableCell>{transaction.method}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          {transaction.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="documents">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Tiêu đề</TableHead>
                    <TableHead>Danh mục</TableHead>
                    <TableHead>Ngày đăng</TableHead>
                    <TableHead>Lượt xem</TableHead>
                    <TableHead>Lượt tải</TableHead>
                    <TableHead>Trạng thái</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      Chưa có tài liệu nào
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 