"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AdminDocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Mock data
  const documents = [
    {
      id: 1,
      title: "Tuyển chọn những bài luận văn phát triển sản phẩm du lịch",
      author: "Nguyễn Văn A",
      category: "Luận văn",
      status: "Đã duyệt",
      views: 1250,
      downloads: 320,
      date: "08-05-2024",
      price: "50,000đ"
    },
    {
      id: 2,
      title: "Hướng dẫn làm đồ án hệ thống cung cấp điện",
      author: "Trần Thị B",
      category: "Đồ án",
      status: "Chờ duyệt",
      views: 980,
      downloads: 245,
      date: "07-08-2024",
      price: "30,000đ"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quản lý tài liệu</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Thêm tài liệu mới</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Thêm tài liệu mới</DialogTitle>
              <DialogDescription>
                Điền thông tin tài liệu mới vào form bên dưới
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Tiêu đề</Label>
                <Input id="title" placeholder="Nhập tiêu đề tài liệu" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Danh mục</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="thesis">Luận văn</SelectItem>
                    <SelectItem value="project">Đồ án</SelectItem>
                    <SelectItem value="exam">Đề thi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Giá bán</Label>
                <Input id="price" placeholder="Nhập giá bán" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="file">File tài liệu</Label>
                <Input id="file" type="file" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Thêm tài liệu</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-4">
              <Input 
                placeholder="Tìm kiếm tài liệu..." 
                className="w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="pending">Chờ duyệt</SelectItem>
                  <SelectItem value="approved">Đã duyệt</SelectItem>
                  <SelectItem value="rejected">Từ chối</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="thesis">Luận văn</SelectItem>
                  <SelectItem value="project">Đồ án</SelectItem>
                  <SelectItem value="exam">Đề thi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Tiêu đề</TableHead>
                <TableHead>Tác giả</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Giá bán</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Lượt xem</TableHead>
                <TableHead>Lượt tải</TableHead>
                <TableHead>Ngày đăng</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>{doc.id}</TableCell>
                  <TableCell>{doc.title}</TableCell>
                  <TableCell>{doc.author}</TableCell>
                  <TableCell>{doc.category}</TableCell>
                  <TableCell>{doc.price}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      doc.status === "Đã duyệt" ? "bg-green-100 text-green-800" :
                      doc.status === "Chờ duyệt" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {doc.status}
                    </span>
                  </TableCell>
                  <TableCell>{doc.views}</TableCell>
                  <TableCell>{doc.downloads}</TableCell>
                  <TableCell>{doc.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Xem</Button>
                      <Button variant="outline" size="sm">Duyệt</Button>
                      <Button variant="destructive" size="sm">Xóa</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 