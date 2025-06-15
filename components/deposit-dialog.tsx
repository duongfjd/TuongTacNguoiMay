import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

interface DepositDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDepositSuccess: () => void;
}

export function DepositDialog({ isOpen, onClose, onDepositSuccess }: DepositDialogProps) {
  const [selectedMethod, setSelectedMethod] = useState("bank-qr")

  const handleDeposit = () => {
    // Simulate deposit process
    onDepositSuccess()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Nạp tiền vào tài khoản</DialogTitle>
          <button className="absolute right-4 top-4 text-black text-2xl font-normal" onClick={onClose}>&times;</button>
        </DialogHeader>

        <div className="flex justify-center space-x-4 mt-6">
          <div
            className={`w-24 h-20 rounded-[5px] flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-200
            ${selectedMethod === "bank-qr" ? "bg-green-500 text-white" : "bg-white outline outline-2 outline-offset-[-1px] outline-green-500 text-zinc-800"}`}
            onClick={() => setSelectedMethod("bank-qr")}
          >
            <Image src="/images/bank_qr_icon.png" alt="QR Ngân hàng" width={57} height={57} className={`${selectedMethod === "bank-qr" ? "filter brightness-0 invert" : ""}`} />
            <div className={`text-xs font-bold mt-1 ${selectedMethod === "bank-qr" ? "text-white" : "text-zinc-800"}`}>QR Ngân hàng</div>
          </div>
          <div
            className={`w-24 h-20 rounded-[5px] flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-200
            ${selectedMethod === "momo-qr" ? "bg-green-500 text-white" : "bg-white outline outline-2 outline-offset-[-1px] outline-green-500 text-zinc-800"}`}
            onClick={() => setSelectedMethod("momo-qr")}
          >
            <Image src="/images/momo_qr_icon.png" alt="QR Momo" width={78} height={73} className={`${selectedMethod === "momo-qr" ? "filter brightness-0 invert" : ""}`} />
            <div className={`text-xs font-bold mt-1 ${selectedMethod === "momo-qr" ? "text-white" : "text-zinc-800"}`}>QR Momo</div>
          </div>
          <div
            className={`w-24 h-20 rounded-[5px] flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-200
            ${selectedMethod === "phone-card" ? "bg-green-500 text-white" : "bg-white outline outline-2 outline-offset-[-1px] outline-green-500 text-zinc-800"}`}
            onClick={() => setSelectedMethod("phone-card")}
          >
            <Image src="/images/phone_card_icon.png" alt="Thẻ điện thoại" width={51} height={51} className={`${selectedMethod === "phone-card" ? "filter brightness-0 invert" : ""}`} />
            <div className={`text-xs font-bold text-center mt-1 ${selectedMethod === "phone-card" ? "text-white" : "text-zinc-800"}`}>Thẻ điện thoại</div>
          </div>
        </div>

        <div className="mt-6 p-4 border border-black border-opacity-25 rounded-[5px]">
          {selectedMethod === "bank-qr" && (
            <div>
              <h2 className="text-green-600 text-base font-bold">Chuyển tiền bằng tài khoản ngân hàng</h2>
              <p className="text-red-600 text-sm mt-2">
                • Mỗi tài khoản nhận tương ứng với một giao dịch. Tuyệt đối không chuyển tiền vào STK của giao dịch cũ.
              </p>
              <p className="text-red-600 text-sm mt-1">
                • Bạn vui lòng đăng nhập Internet Banking của ngân hàng và chuyển khoản theo thông tin sau:
              </p>
              <div className="flex justify-between items-start mt-4">
                <div className="w-48 h-48 border border-black flex items-center justify-center">
                  <Image src="/images/qr_placeholder.png" alt="QR Code" width={180} height={180} />
                </div>
                <div className="space-y-2 text-sm ml-4">
                  <div><span className="font-bold">Ngân hàng:</span> (MB) Ngân hàng quân đội VN</div>
                  <div><span className="font-bold">STK nhận:</span> 9999999999999</div>
                  <div><span className="font-bold">Tên tài khoản:</span> THANH TOAN TAI LIEU</div>
                  <div><span className="font-bold">Chi nhánh:</span> Hà Nội</div>
                  <div><span className="font-bold">Số tiền:</span> 100.000 đ</div>
                  <div><span className="font-bold">VAT (10%):</span> 10.000 đ</div>
                  <div><span className="font-bold">Tổng:</span> 110.000 đ</div>
                </div>
              </div>
            </div>
          )}

          {selectedMethod === "momo-qr" && (
            <div>
              <h2 className="text-green-600 text-base font-bold">Chuyển tiền bằng ví Momo</h2>
              <p className="text-red-600 text-sm mt-2">
                • Mỗi tài khoản nhận tương ứng với một giao dịch. Tuyệt đối không chuyển tiền vào STK của giao dịch cũ.
              </p>
              <p className="text-red-600 text-sm mt-1">
                • Bạn vui lòng đăng nhập ví Momo và chuyển khoản theo thông tin sau:
              </p>
              <div className="flex justify-between items-start mt-4">
                <div className="w-48 h-48 border border-black flex items-center justify-center">
                  <Image src="/images/qr_placeholder.png" alt="QR Code" width={180} height={180} />
                </div>
                <div className="space-y-2 text-sm ml-4">
                  <div><span className="font-bold">Ví Momo:</span> 0123456789</div>
                  <div><span className="font-bold">Tên tài khoản:</span> THANH TOAN TAI LIEU</div>
                  <div><span className="font-bold">Số tiền:</span> 100.000 đ</div>
                  <div><span className="font-bold">VAT (10%):</span> 10.000 đ</div>
                  <div><span className="font-bold">Tổng:</span> 110.000 đ</div>
                </div>
              </div>
            </div>
          )}

          {selectedMethod === "phone-card" && (
            <div>
              <h2 className="text-green-600 text-base font-bold mb-4">Nạp bằng thẻ cào điện thoại</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="card-value">Mệnh giá:</Label>
                  <Input id="card-value" defaultValue="100.000" disabled className="bg-gray-100" />
                </div>
                <div>
                  <Label htmlFor="card-code">Mã số thẻ:</Label>
                  <Input id="card-code" placeholder="|" />
                </div>
                <div>
                  <Label htmlFor="card-serial">Seri thẻ:</Label>
                  <Input id="card-serial" placeholder="|" />
                </div>
                <div>
                  <Label htmlFor="phone-number">Số điện thoại:</Label>
                  <Input id="phone-number" placeholder="0xxx xxx xxx" />
                </div>
              </div>
              <div className="text-center text-black text-xs mt-4">
                Khi nạp thẻ cào nhà mạng sẽ chiết khấu 30% giá trị thẻ<br />
                Nạp sai 10 lần liên tiếp, tài khoản của bạn không thể sử dụng hình thức nạp trong 24h.
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600 mt-6" onClick={handleDeposit}>Nạp tiền</Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 