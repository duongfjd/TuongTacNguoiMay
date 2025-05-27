"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, Download, DollarSign } from "lucide-react"

export default function AdminDashboardPage() {
  // Mock data
  const stats = [
    {
      title: "Tổng người dùng",
      value: "1,234",
      icon: Users,
      description: "Tăng 12% so với tháng trước"
    },
    {
      title: "Tổng tài liệu",
      value: "5,678",
      icon: FileText,
      description: "Tăng 8% so với tháng trước"
    },
    {
      title: "Lượt tải xuống",
      value: "12,345",
      icon: Download,
      description: "Tăng 15% so với tháng trước"
    },
    {
      title: "Doanh thu",
      value: "15,000,000đ",
      icon: DollarSign,
      description: "Tăng 20% so với tháng trước"
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tổng quan</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tài liệu mới nhất</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Tài liệu mẫu {i}</p>
                    <p className="text-sm text-muted-foreground">
                      Đăng bởi Nguyễn Văn A
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2 giờ trước
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Người dùng mới nhất</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Người dùng {i}</p>
                    <p className="text-sm text-muted-foreground">
                      user{i}@example.com
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    1 ngày trước
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 