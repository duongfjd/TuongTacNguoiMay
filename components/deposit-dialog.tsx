"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type DepositDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onDepositSuccess: () => void;
};

const methods = [
  {
    key: "bank",
    label: "QR ngân hàng",
    icon: "qr-code.png",
  },
  {
    key: "momo",
    label: "QR momo",
    icon: "momo_icon_square_pinkbg@5x.png",
  },
  {
    key: "card",
    label: "Thẻ điện thoại",
    icon: "debit-cards.png",
  },
];

export function DepositDialog({ isOpen, onClose, onDepositSuccess }: DepositDialogProps) {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleDeposit = () => {
    if (!amount || !phone || !selectedMethod) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (selectedMethod === "bank") {
      console.log("Nạp qua ngân hàng", { amount, phone });
    } else if (selectedMethod === "momo") {
      console.log("Nạp qua Momo", { amount, phone });
    } else if (selectedMethod === "card") {
      console.log("Nạp bằng thẻ điện thoại", { amount, phone });
    }

    onDepositSuccess();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold w-full text-[#22C55E]">
            Nạp tiền vào tài khoản
          </DialogTitle>
        </DialogHeader>

        {/* Nhập số tiền & số điện thoại */}
        <div className="flex gap-4 mt-4">
          <div className="flex-1">
            <div className="text-sm mb-1 text-black">Nhập số tiền cần nạp</div>
            <input
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="VD: 100000"
              className="w-full px-3 py-2 border rounded text-sm"
            />
          </div>
          <div className="flex-1">
            <div className="text-sm mb-1 text-black">Nhập số điện thoại</div>
            <input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="VD: 0987654321"
              className="w-full px-3 py-2 border rounded text-sm"
            />
          </div>
        </div>

        {/* Chọn hình thức nạp */}
        <div className="mt-6 text-sm font-medium text-[#22C55E] text-left">
          Chọn hình thức nạp tiền
        </div>
        <div className="flex justify-center gap-6 mt-3">
          {methods.map((method) => (
            <button
              key={method.key}
              className={`flex flex-col items-center justify-center border-2 rounded w-24 h-24 transition-colors ${
                selectedMethod === method.key
                  ? "bg-[#22C55E] text-white"
                  : "border-[#22C55E] text-black"
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

        {/* Thông tin thêm */}
        <div className="mt-6 space-y-1 text-sm text-black text-left">
          <div>Sử dụng chuyển tiền nhanh 24/7 của các ngân hàng</div>
          <div className="text-[#22C55E]">Hướng dẫn quét mã QR</div>
          <div className="text-[#22C55E]">AGRIBANK | VIETINBANK | VIETCOMBANK | BIDV</div>
          <div className="text-[#22C55E]">Hoặc sử dụng quét QR của MOMO</div>
        </div>

        {/* Nút nạp tiền */}
        <Button className="w-full mt-6 bg-[#22C55E] text-white font-bold hover:bg-green-600" onClick={handleDeposit}>
          Nạp tiền
        </Button>
      </DialogContent>
    </Dialog>
  );
}
