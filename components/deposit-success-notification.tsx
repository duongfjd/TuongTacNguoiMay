import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DepositSuccessNotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DepositSuccessNotification({ isOpen, onClose }: DepositSuccessNotificationProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-96 h-52 bg-white rounded-xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.25)] border-black relative flex flex-col items-center justify-center p-6">
        <DialogHeader className="w-full text-center mb-4">
          <DialogTitle className="text-zinc-800 text-2xl font-bold font-['Roboto']">Thông báo</DialogTitle>
        </DialogHeader>
        <div className="w-full text-center mb-6">
          <p className="text-neutral-600 text-base font-bold font-['Roboto']">Nạp tiền thành công</p>
        </div>
        <Button onClick={onClose} className="bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-[0px_6px_16px_0px_rgba(0,179,106,0.50)] border-white text-white text-base font-normal font-['Inter'] px-8 py-2">
          Xác nhận
        </Button>
      </DialogContent>
    </Dialog>
  )
} 