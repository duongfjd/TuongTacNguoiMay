"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const methods = [
  {
    key: "bank",
    label: "QR ngân hàng",
    icon: "/qr-code.png",
  },
  {
    key: "momo",
    label: "QR momo",
    icon: "/momo_icon_square_pinkbg@5x.png",
  },
  {
    key: "card",
    label: "Thẻ điện thoại",
    icon: "/debit-cards.png",
  },
];

type DepositDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onDepositSuccess: () => void;
};

export function DepositDialog({ isOpen, onClose, onDepositSuccess }: DepositDialogProps) {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [step, setStep] = useState(1);
  const [cardCode, setCardCode] = useState("");
  const [cardSerial, setCardSerial] = useState("");
  const [cardPhone, setCardPhone] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleDeposit = () => {
    if (!amount || !phone || !selectedMethod) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    setStep(2);
  };

  const handleCardSubmit = () => {
    if (!amount || !cardCode || !cardSerial || !cardPhone) {
      alert("Vui lòng nhập đầy đủ thông tin thẻ cào!");
      return;
    }
    setShowSuccessPopup(true);
  };

  const handleDialogClose = () => {
    onClose();
    setStep(1);
    setShowSuccessPopup(false);
    setIsConfirmed(false);
  };

  useEffect(() => {
    if (isConfirmed) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isConfirmed]);

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold w-full text-[#22C55E]">
            Nạp tiền vào tài khoản
          </DialogTitle>
        </DialogHeader>

        {/* Step 1: Nhập thông tin */}
        {step === 1 && (
          <>
            <div className="flex gap-4 mt-4">
              <div className="flex-1">
                <label className="block text-sm text-black mb-1">Nhập số tiền cần nạp:</label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="VD: 100000"
                  className="w-full px-3 py-2 border rounded text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-black mb-1">Nhập số điện thoại:</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="VD: 0987654321"
                  className="w-full px-3 py-2 border rounded text-sm"
                />
              </div>
            </div>

            <div className="mt-6 text-sm font-medium text-[#22C55E] text-left">Chọn hình thức nạp tiền</div>
            <div className="flex gap-4 mt-3 justify-start">
              {methods.map((method) => (
                <button
                  key={method.key}
                  className={`flex flex-col items-center justify-center border-2 rounded w-24 h-24 transition-colors relative ${
                    selectedMethod === method.key ? "bg-[#22C55E] text-white" : "border-[#22C55E] text-black"
                  }`}
                  onClick={() => setSelectedMethod(method.key)}
                >
                  <img
                    src={method.icon}
                    alt={method.label}
                    width={40}
                    height={40}
                    className={selectedMethod === method.key ? "filter brightness-0 invert" : ""}
                  />
                  <div className="text-xs font-bold mt-2 text-center">{method.label}</div>
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-1 text-sm text-black text-left">
              <div>Sử dụng chuyển tiền nhanh 24/7 của các ngân hàng</div>
              <div className="text-[#22C55E]">Hướng dẫn quét mã QR</div>
              <div className="text-[#22C55E]">AGRIBANK | VIETINBANK | VIETCOMBANK | BIDV</div>
              <div className="text-[#22C55E]">Hoặc sử dụng quét QR của MOMO</div>
            </div>

            <Button className="w-full mt-6 bg-[#22C55E] text-white font-bold hover:bg-green-600" onClick={handleDeposit}>
              Nạp tiền
            </Button>
          </>
        )}

        {/* Step 2: Hiển thị theo method */}
        {step === 2 && (
          <>
            <div className="flex gap-4 mt-4 justify-start">
              {methods.map((method) => (
                <div
                  key={method.key}
                  className={`flex flex-col items-center justify-center border-2 rounded w-24 h-24 relative ${
                    selectedMethod === method.key ? "bg-[#22C55E] text-white" : "border-[#22C55E] text-black opacity-50"
                  }`}
                >
                  <img src={method.icon} alt={method.label} width={40} height={40} />
                  <div className="text-xs font-bold mt-2 text-center flex items-center gap-1">
                    {method.label}
                  </div>
                  {selectedMethod === method.key && (
                    <div className="absolute -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#22C55E]" />
                  )}
                </div>
              ))}
            </div>

            {(selectedMethod === "bank" || selectedMethod === "momo") && (
              <div className="mt-6 border border-gray-300 rounded p-4">
                <div className="text-[#22C55E] font-semibold mb-2 text-left">
                  {selectedMethod === "bank"
                    ? "Chuyển tiền bằng tài khoản ngân hàng"
                    : "Thanh toán bằng ví MOMO"}
                </div>
                <div className="text-red-600 text-sm mb-1">
                  • Mỗi tài khoản nhận tương ứng với một giao dịch. Tuyệt đối không chuyển tiền vào STK của giao dịch cũ.
                </div>
                <div className="text-red-600 text-sm mb-4">
                  • Bạn vui lòng đăng nhập Internet Banking hoặc MOMO và chuyển khoản theo thông tin sau:
                </div>
                <div className="flex gap-4">
                  <img src="qr.png" alt="QR" className="w-32 h-32 object-contain" />
                  <div className="text-sm space-y-1">
                    <div><strong>Ngân hàng:</strong> (MB) Ngân hàng quân đội VN</div>
                    <div><strong>STK nhận:</strong> 9999999999999</div>
                    <div><strong>Tên tài khoản:</strong> THANH TOAN TAI LIEU</div>
                    <div><strong>Chi nhánh:</strong> Hà Nội</div>
                    <div><strong>Số tiền:</strong> {amount} VND</div>
                    <div><strong>VAT (10%):</strong> {Math.floor(Number(amount) * 0.1)} VND</div>
                    <div><strong>Tổng:</strong> {Math.floor(Number(amount) * 0.9)} VND</div>
                  </div>
                </div>
                <div
                  className="mt-4 text-sm text-center cursor-pointer text-gray-600 hover:text-[#22C55E] transition"
                  onClick={() => setIsConfirmed(true)}
                >
                  {!isConfirmed ? (
                    <div className="mt-4 flex justify-end items-center text-sm text-gray-600">
                      <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                      Đang đợi thanh toán...
                    </div>
                  ) : (
                    <div className="flex items-center justify-end gap-2 text-[#22C55E] font-semibold">
                      <span className="text-xl">✔️</span> Thanh toán thành công
                    </div>
                  )}
                </div>
              </div>
            )}

            {selectedMethod === "card" && (
              <div className="mt-6 border border-gray-300 rounded p-4">
                <div className="text-[#22C55E] font-semibold mb-4 text-center text-lg">Nạp bằng thẻ cào điện thoại</div>

                <div className="flex items-center gap-2 mb-3">
                  <label className="w-28 text-sm">Mệnh giá:</label>
                  <input value={amount} readOnly className="flex-1 px-3 py-2 border rounded text-sm" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <label className="w-28 text-sm">Mã số thẻ:</label>
                  <input value={cardCode} onChange={(e) => setCardCode(e.target.value)} className="flex-1 px-3 py-2 border rounded text-sm" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <label className="w-28 text-sm">Seri thẻ:</label>
                  <input value={cardSerial} onChange={(e) => setCardSerial(e.target.value)} className="flex-1 px-3 py-2 border rounded text-sm" />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <label className="w-28 text-sm">Số điện thoại:</label>
                  <input value={cardPhone} onChange={(e) => setCardPhone(e.target.value)} className="flex-1 px-3 py-2 border rounded text-sm" />
                </div>

                <Button className="w-full bg-[#22C55E] text-white font-bold hover:bg-green-600" onClick={handleCardSubmit}>
                  Xác nhận
                </Button>

                <div className="mt-2 text-xs italic text-gray-600 text-center">
                  Khi nạp thẻ cào nhà mạng sẽ chiết khấu <strong>30%</strong> giá trị thẻ<br />
                  Nạp sai 10 lần liên tiếp, tài khoản của bạn không thể sử dụng hình thức nạp trong 24h.
                </div>
              </div>
            )}
          </>
        )}

        {/* Popup thành công */}
        {showSuccessPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            <div className="relative z-10 bg-white border border-gray-300 rounded-xl p-10 shadow-xl text-center max-w-sm w-full">
              <div className="text-xl font-bold mb-4">Thông báo</div>
              <div className="text-md text-black mb-4">Nạp tiền thành công</div>
              <Button className="bg-[#22C55E] text-white font-bold hover:bg-green-600" onClick={handleDialogClose}>
                Xác nhận
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}