"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Share2 } from "lucide-react"
import { Download } from "lucide-react"; // thêm dòng này nếu bạn chưa import
export default function DocumentActions({ price }: { price: number }) {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <div>
      <div className="text-center mb-4">
        <div className="text-3xl font-bold text-green-500">{price.toLocaleString("vi-VN")} VNĐ</div>
        <p className="text-gray-500">Giá đã bao gồm VAT</p>
      </div>
      <div className="space-y-4">
      <Button className="w-full bg-green-500 hover:bg-green-600">
  <Download className="h-4 w-4 mr-2" />
  Tải Xuống
</Button>
        {/* <Button variant="outline" className="w-full" onClick={() => setIsLiked(!isLiked)}>
          <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          {isLiked ? "Đã thích" : "Thêm vào yêu thích"}
        </Button> */}
        <Button variant="outline" className="w-full">
          <Share2 className="h-4 w-4 mr-2" />
          Chia sẻ
        </Button>
      </div>
    </div>
  )
} 