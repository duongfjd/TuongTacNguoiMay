"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Share2, Download } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { DepositDialog } from "@/components/deposit-dialog" // Import đúng đường dẫn

export default function DocumentActions({ price }: { price: number }) {
  const [isLiked, setIsLiked] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [showInsufficientPopup, setShowInsufficientPopup] = useState(false)
  const [showDepositDialog, setShowDepositDialog] = useState(false)

  const handleDownload = () => {
    setShowSuccessPopup(true)
  }

  const handleShare = () => {
    setShowInsufficientPopup(true)
  }

  const handleCloseAll = () => {
    setShowSuccessPopup(false)
    setShowInsufficientPopup(false)
    setShowDepositDialog(false)
  }

  return (
    <>
      <div>
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-green-500">{price.toLocaleString("vi-VN")} VNĐ</div>
          <p className="text-gray-500">Giá đã bao gồm VAT</p>
        </div>
        <div className="space-y-4">
          <Button className="w-full bg-green-500 hover:bg-green-600" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Tải Xuống
          </Button>

          <Button variant="outline" className="w-full" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Chia sẻ
          </Button>
        </div>
      </div>

      {/* ✅ Popup Mua thành công */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-25"></div>
          <div className="relative z-10 bg-white border border-gray-300 rounded-2xl p-10 shadow-xl text-center max-w-sm w-full">
            <div className="text-xl font-bold text-[#22C55E] mb-4">Thông báo</div>
            <div className="text-md text-black mb-4">Mua tài liệu thành công</div>
            <Button className="bg-[#22C55E] text-white font-bold hover:bg-green-600" onClick={handleCloseAll}>
              Xác nhận
            </Button>
          </div>
        </div>
      )}

      {/* ❗ Popup Không đủ tiền */}
      {showInsufficientPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-25"></div>
          <div className="relative z-10 bg-white border border-gray-300 rounded-2xl p-10 shadow-xl text-center max-w-sm w-full">
            <div className="text-xl font-bold mb-4">Thông báo</div>
            <div className="text-md text-black mb-6">
              Số dư tài khoản của bạn hiện không đủ, bạn có muốn nạp tiền không?
            </div>
            <div className="flex justify-center gap-4">
              <Button
                className="bg-[#22C55E] text-white font-bold hover:bg-green-600"
                onClick={() => {
                  setShowInsufficientPopup(false)
                  setShowDepositDialog(true)
                }}
              >
                Nạp tiền
              </Button>
              <Button variant="outline" onClick={handleCloseAll}>
                Quay lại
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 💸 Dialog nạp tiền */}
      <DepositDialog isOpen={showDepositDialog} onClose={handleCloseAll} onDepositSuccess={handleCloseAll} />
    </>
  )
}
