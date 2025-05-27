"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

// Mock document data
const mockDocument = {
  id: "1",
  title: "Tuyển chọn những bài luận văn phát triển sản phẩm du lịch",
  author: "Nguyễn Văn A",
  price: 50000,
  description: "Tài liệu bao gồm các bài luận văn mẫu về phát triển sản phẩm du lịch, phù hợp cho sinh viên ngành Du lịch và Quản lý khách sạn."
}

export default function PurchasePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handlePurchase = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/documents/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documentId: params.id,
          userId: "1" // Mock user ID
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }

      toast.success("Mua tài liệu thành công!")
      // Handle successful purchase (e.g., redirect to download page)
      router.push(`/documents/${params.id}/download`)
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Có lỗi xảy ra")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle>Xác nhận mua tài liệu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Thông tin tài liệu</h3>
              <p className="text-lg font-semibold">{mockDocument.title}</p>
              <p className="text-sm text-muted-foreground">
                Tác giả: {mockDocument.author}
              </p>
            </div>

            <div>
              <h3 className="font-medium">Mô tả</h3>
              <p className="text-sm text-muted-foreground">
                {mockDocument.description}
              </p>
            </div>

            <div className="flex items-center justify-between border-t pt-4">
              <span className="font-medium">Tổng tiền:</span>
              <span className="text-lg font-semibold">
                {mockDocument.price.toLocaleString()}đ
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => router.back()}
            >
              Hủy
            </Button>
            <Button
              className="flex-1"
              onClick={handlePurchase}
              disabled={loading}
            >
              {loading ? "Đang xử lý..." : "Xác nhận mua"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 