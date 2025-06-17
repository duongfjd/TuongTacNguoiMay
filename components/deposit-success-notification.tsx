"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DepositSuccessNotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DepositSuccessNotification({ isOpen, onClose }: DepositSuccessNotificationProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold w-full text-[#22C55E]">
            Thông báo
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center py-4">
          <svg
            className="w-16 h-16 text-green-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p className="text-lg font-semibold text-gray-800 mb-6">Nạp tiền thành công!</p>
          <Button className="w-full bg-green-500 text-white font-bold hover:bg-green-600" onClick={onClose}>
            Xác nhận
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 