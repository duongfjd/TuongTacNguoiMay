"use client"

import { useEffect } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface DepositSuccessNotificationProps {
  isOpen: boolean
  onClose: () => void
}

export function DepositSuccessNotification({
  isOpen,
  onClose,
}: DepositSuccessNotificationProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Nạp tiền thành công
          </DialogTitle>
          <DialogDescription>
            Giao dịch của bạn đã được xử lý thành công. Số dư tài khoản của bạn đã được cập nhật.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>
            Đóng
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 