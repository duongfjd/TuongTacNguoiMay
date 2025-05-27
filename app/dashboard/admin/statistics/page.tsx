"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminStatisticsPage() {
  // Mock data
  const revenueStats = [
    {
      period: "Tháng 5/2024",
      revenue: 15000000,
      atmQr: 8000000,
      momo: 5000000,
      transfer: 2000000,
      userWithdraw: 5000000,
      actualWithdraw: 4500000,
      total: 10500000
    },
    {
      period: "Tháng 4/2024",
      revenue: 12000000,
      atmQr: 6000000,
      momo: 4000000,
      transfer: 2000000,
      userWithdraw: 4000000,
      actualWithdraw: 3600000,
      total: 8400000
    }
  ]

  const depositStats = [
    {
      period: "Tháng 5/2024",
      card: 3000000,
      atmQr: 5000000,
      momo: 4000000,
      normalDownload: 2000000,
      total: 14000000
    },
    {
      period: "Tháng 4/2024",
      card: 2500000,
      atmQr: 4000000,
      momo: 3000000,
      normalDownload: 1500000,
      total: 11000000
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Thống kê</h1>

      <Tabs defaultValue="revenue" className="space-y-4">
        <TabsList>
          <TabsTrigger value="revenue">Thống kê doanh thu</TabsTrigger>
          <TabsTrigger value="deposit">Thống kê nạp tiền</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Thống kê doanh thu</CardTitle>
                <Select defaultValue="month">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Chọn thời gian" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Theo tháng</SelectItem>
                    <SelectItem value="quarter">Theo quý</SelectItem>
                    <SelectItem value="year">Theo năm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Thời gian</TableHead>
                    <TableHead>Doanh thu</TableHead>
                    <TableHead>ATM & QR</TableHead>
                    <TableHead>Momo</TableHead>
                    <TableHead>Chuyển khoản</TableHead>
                    <TableHead>User rút tiền</TableHead>
                    <TableHead>Thực rút</TableHead>
                    <TableHead>Tổng</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {revenueStats.map((stat) => (
                    <TableRow key={stat.period}>
                      <TableCell>{stat.period}</TableCell>
                      <TableCell>{stat.revenue.toLocaleString()}đ</TableCell>
                      <TableCell>{stat.atmQr.toLocaleString()}đ</TableCell>
                      <TableCell>{stat.momo.toLocaleString()}đ</TableCell>
                      <TableCell>{stat.transfer.toLocaleString()}đ</TableCell>
                      <TableCell>{stat.userWithdraw.toLocaleString()}đ</TableCell>
                      <TableCell>{stat.actualWithdraw.toLocaleString()}đ</TableCell>
                      <TableCell>{stat.total.toLocaleString()}đ</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deposit">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Thống kê nạp tiền</CardTitle>
                <Select defaultValue="month">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Chọn thời gian" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Theo tháng</SelectItem>
                    <SelectItem value="quarter">Theo quý</SelectItem>
                    <SelectItem value="year">Theo năm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Thời gian</TableHead>
                    <TableHead>Thẻ cào</TableHead>
                    <TableHead>ATM & QR</TableHead>
                    <TableHead>Momo</TableHead>
                    <TableHead>Mua gói tải thường</TableHead>
                    <TableHead>Tổng</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {depositStats.map((stat) => (
                    <TableRow key={stat.period}>
                      <TableCell>{stat.period}</TableCell>
                      <TableCell>{stat.card.toLocaleString()}đ</TableCell>
                      <TableCell>{stat.atmQr.toLocaleString()}đ</TableCell>
                      <TableCell>{stat.momo.toLocaleString()}đ</TableCell>
                      <TableCell>{stat.normalDownload.toLocaleString()}đ</TableCell>
                      <TableCell>{stat.total.toLocaleString()}đ</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 