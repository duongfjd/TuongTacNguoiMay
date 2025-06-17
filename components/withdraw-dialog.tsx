"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WithdrawDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onWithdrawSuccess?: () => void;
}

export function WithdrawDialog({ isOpen, onClose, onWithdrawSuccess }: WithdrawDialogProps) {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [accountName, setAccountName] = useState("");
  const [success, setSuccess] = useState(false);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    if (bank && accountNumber) {
      setAccountName("VUONG VIET CUONG");
    } else {
      setAccountName("");
    }
  }, [bank, accountNumber]);

  const handleContinue = () => {
    setConfirming(true);
  };

  const handleConfirmWithdraw = () => {
    setSuccess(true);
    setConfirming(false);
  };

  const handleSuccessClose = () => {
    setSuccess(false);
    setBank("");
    setAccountNumber("");
    setAmount("");
    setAccountName("");
    if (onWithdrawSuccess) onWithdrawSuccess();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader className="border-b border-gray-200 pb-4 shadow-lg -ml-6 -mr-6">
          <DialogTitle className="text-center text-xl font-bold w-full text-[#22C55E]">
            RÚT TIỀN
          </DialogTitle>
        </DialogHeader>
        {!confirming && !success && (
          <>
            <div className="text-left font-semibold text-green-600 mb-2">Chuyển đến</div>
            <div className="mb-4">
              <div className="border rounded-lg bg-gray-50 p-3">
                <div className="flex items-center mb-1">
                  <img src="/bank-icon.png" alt="Ngân hàng" className="mr-2" style={{ width: 32, height: 32 }} />
                  <div className="flex-1">
                    <div className="font-semibold ml-1">Ngân hàng</div>
                    <select
                      className="w-full bg-transparent outline-none"
                      value={bank}
                      onChange={e => setBank(e.target.value)}
                    >
                      <option value="">Chọn ngân hàng</option>
                      <option value="VCB">Vietcombank</option>
                      <option value="TCB">Techcombank</option>
                      <option value="MB">MB Bank</option>
                      <option value="BIDV">Đầu tư và phát triển (BIDV)</option>
                      <option value="VPB">VPBank</option>
                      {/* Thêm các ngân hàng khác nếu cần */}
                    </select>
                  </div>
                </div>
                <div className="text-xs text-gray-500 font-semibold mb-1">Số tài khoản</div>
                <input
                  className="w-full border rounded px-3 py-2 bg-white"
                  placeholder="Số tài khoản"
                  value={accountNumber}
                  onChange={e => setAccountNumber(e.target.value)}
                />
                {accountName && (
                  <div className="w-full bg-gray-100 rounded px-3 py-2 text-base font-semibold tracking-wide text-gray-800 border-t border-gray-200">
                    {accountName}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-4 -mb-6 -ml-6 -mr-6">
              <input
                className="w-full text-center text-2xl border rounded px-3 py-4 font-semibold bg-gray-50 mb-4"
                placeholder="0 VND"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                type="number"
                min="0"
              />
              <Button className="w-full bg-green-500 text-white font-bold hover:bg-green-600 mb-4" onClick={handleContinue}>
                Tiếp tục
              </Button>
            </div>
          </>
        )}
        {confirming && !success && (
          <>
            <div className="text-left font-semibold text-green-600 mb-2">Xác nhận thông tin</div>
            <div className="mb-4">
              <div className="border rounded-lg bg-gray-50 p-3">
                <div className="flex items-center mb-1">
                  <img src="/bank-icon.png" alt="Người nhận" className="mr-2" style={{ width: 32, height: 32 }} />
                  <div className="flex-1">
                    <div className="font-semibold ml-1">Người nhận</div>
                    <div className="font-bold ml-1">VUONG VIET CUONG</div>
                    <div className="text-sm text-gray-500 ml-1">4520898412</div>
                    <div className="text-sm text-gray-500 ml-1">Đầu tư và phát triển (BIDV)</div>
                  </div>
                </div>
                <hr className="my-3" />
                <div className="font-semibold ml-1 mb-1">Số tiền giao dịch</div>
                <div className="text-green-500 text-2xl font-bold mb-2">
                  {Number(amount).toLocaleString("vi-VN")} VND
                </div>
                <div className="text-gray-500 text-sm ml-1">
                  {/* Hàm chuyển số thành chữ có thể cần được thêm vào */}
                  Một trăm nghìn Việt Nam Đồng
                </div>
              </div>
            </div>
            <div className="bg-yellow-100 rounded-lg p-3 flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-yellow-800 text-sm">
                Vui lòng kiểm tra chính xác thông tin trước khi xác nhận rút tiền.
              </p>
            </div>
            <Button className="w-full bg-green-500 text-white font-bold hover:bg-green-600" onClick={handleConfirmWithdraw}>
              Xác nhận
            </Button>
          </>
        )}
        {success && (
          <div className="flex flex-col items-center justify-center py-2">
            <div className="w-full border rounded-lg bg-gray-50 p-4 mb-6">
              <div className="flex items-center mb-2">
                <img src="/bank-icon.png" alt="Ngân hàng" className="mr-2" style={{ width: 32, height: 32 }} />
                <span className="font-semibold text-gray-500 text-base">
                  {bank === "BIDV" ? "Đầu tư và phát triển (BIDV)" : bank}
                </span>
              </div>
              <div className="font-bold text-lg text-gray-800 mb-1">{accountName}</div>
              <div className="text-gray-500 text-base mb-2">{accountNumber}</div>
              <hr className="my-2" />
              <div className="text-center font-semibold text-gray-700 mb-1">Chuyển tiền thành công</div>
              <div className="text-center text-green-500 text-2xl font-bold mb-2">
                {Number(amount).toLocaleString("vi-VN")} VND
              </div>
              <div className="flex justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="32" stroke="#FFD600" strokeWidth="4" fill="none" />
                  <path d="M27 43L37 53L54 33" stroke="#FFD600" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <Button className="w-full bg-green-500 text-white font-bold hover:bg-green-600" onClick={handleSuccessClose}>
              Xác nhận
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 