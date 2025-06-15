"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import Link from 'next/link';

interface Transaction {
  id: string;
  type: string;
  content: {
    main: string;
    link?: string;
    balance?: string;
  };
  status: string;
  amount: string;
  isDecrease: boolean;
}

export function FinanceTab({ onDepositClick }: { onDepositClick: () => void }) {
  const [financeSubTab, setFinanceSubTab] = useState('purchase')

  const stats = {
    balance: 1250000,
    uploads: 12,
    downloads: 345,
    earnings: 850000,
  };

  const purchaseTransactions: Transaction[] = [
    {
      id: '9documentBuy- 4055475 27/06/2024, 08:30',
      type: 'Mua tài liệu',
      content: {
        main: 'Mua tài liệu:',
        link: 'Mô hình hóa nghiệp vụ với BPMN',
        balance: '- Số dư tích lũy: 27.000đ'
      },
      status: 'Thành công',
      amount: '5.000 đ ↓',
      isDecrease: true
    },
    {
      id: '9documentBuy- 3896119 04/12/2023, 02:03',
      type: 'Mua tài liệu',
      content: {
        main: 'Mua tài liệu:',
        link: 'Đồ án Xây dựng chương trình quản lý sinh viên bằng ngôn ngữ lập trình C++',
        balance: '- Số dư tích lũy: 32.000đ'
      },
      status: 'Thành công',
      amount: '15.000 đ ↓',
      isDecrease: true
    },
    {
      id: '9documentBuy- 3892054 29/11/2023, 23:30',
      type: 'Thanh toán gói tải 0đ',
      content: {
        main: 'Thanh toán gói tải tài liệu 0đ: gói 1 tháng - Số dư tích lũy: 47.000đ'
      },
      status: 'Thành công',
      amount: '30.000 đ ↓',
      isDecrease: true
    },
    {
      id: '9documentAdd- 3866087 06/11/2023, 19:52',
      type: 'Mua tài liệu',
      content: {
        main: 'Mua tài liệu:',
        link: 'Công nghệ phần mềm'
      },
      status: 'Thành công',
      amount: '25.000 đ ↓',
      isDecrease: true
    },
    {
      id: '9documentAdd- 5522482 06/11/2023, 19:52',
      type: 'Nạp tiền QR Ngân hàng',
      content: {
        main: 'ATM ID: 2180302 - Mệnh giá: 110,000 VND'
      },
      status: 'Thành công',
      amount: '102.000 đ ↑',
      isDecrease: false
    }
  ];

  const revenueTransactions: Transaction[] = [
    {
      id: '9revenue- 4055475 27/06/2024, 08:30',
      type: 'Doanh thu tài liệu',
      content: {
        main: 'Doanh thu từ:',
        link: 'Mô hình hóa nghiệp vụ với BPMN',
        balance: '- Số dư tích lũy: 1.250.000đ'
      },
      status: 'Thành công',
      amount: '450.000 đ ↑',
      isDecrease: false
    },
    {
      id: '9revenue- 3896119 04/12/2023, 02:03',
      type: 'Doanh thu tài liệu',
      content: {
        main: 'Doanh thu từ:',
        link: 'Đồ án Xây dựng chương trình quản lý sinh viên',
        balance: '- Số dư tích lũy: 800.000đ'
      },
      status: 'Thành công',
      amount: '250.000 đ ↑',
      isDecrease: false
    },
    {
      id: '9revenue- 3892054 29/11/2023, 23:30',
      type: 'Rút tiền',
      content: {
        main: 'Rút tiền về tài khoản ngân hàng',
        balance: '- Số dư tích lũy: 550.000đ'
      },
      status: 'Đang xử lý',
      amount: '250.000 đ ↓',
      isDecrease: true
    }
  ];

  const currentTransactions = financeSubTab === 'purchase' ? purchaseTransactions : revenueTransactions

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Quản lý tài chính</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="font-bold">Thông tin tài khoản</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2 justify-between">
              <div>
                <h2 className="font-medium text-2xl">Số dư tài khoản doanh thu</h2>
                <div className="text-2xl text-orange-500 font-medium mb-2 flex space-x-2">
                  {stats.balance.toLocaleString("vi-VN")} VNĐ
                </div>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 w-40" onClick={onDepositClick}>Nạp tiền</Button>
            </div>

            <div className="flex space-x-2 justify-between">
              <div>
                <h2 className="font-medium text-2xl">Số dư tài khoản mua tài liệu</h2>
                <div className="text-2xl text-orange-500 font-medium mb-2 flex space-x-2">
                  {stats.earnings.toLocaleString("vi-VN")} VNĐ
                </div>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 w-40">Rút tiền</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lịch sử giao dịch</CardTitle>
            <CardDescription>Các giao dịch gần đây nhất của bạn</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Tab điều hướng */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setFinanceSubTab('purchase')}
                className={`px-4 py-3 border-b-2 ${financeSubTab === 'purchase'
                    ? 'border-green-500 bg-green-50 text-green-600'
                    : 'border-transparent text-gray-600'
                  } text-sm font-medium`}
              >
                Tài khoản mua tài liệu
              </button>
              <button
                onClick={() => setFinanceSubTab('revenue')}
                className={`px-4 py-3 border-b-2 ${financeSubTab === 'revenue'
                    ? 'border-green-500 bg-green-50 text-green-600'
                    : 'border-transparent text-gray-600'
                  } text-sm font-medium`}
              >
                Tài khoản doanh thu
              </button>
            </div>

            {/* Bảng lịch sử giao dịch */}
            <div className="border border-gray-200 rounded-lg overflow-hidden mt-4">
              {/* Header bảng */}
              <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200">
                <div className="col-span-3 px-4 py-3">
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    MÃ GIAO DỊCH
                  </span>
                </div>
                <div className="col-span-2 px-4 py-3">
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    LOẠI GIAO DỊCH
                  </span>
                </div>
                <div className="col-span-3 px-4 py-3">
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    NỘI DUNG
                  </span>
                </div>
                <div className="col-span-2 px-4 py-3">
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    TRẠNG THÁI
                  </span>
                </div>
                <div className="col-span-2 px-4 py-3">
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    SỐ TIỀN
                  </span>
                </div>
              </div>

              {/* Nội dung bảng */}
              <div className="max-h-96 overflow-y-auto">
                {currentTransactions.map((transaction, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-12 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      } border-b border-gray-100 last:border-b-0`}
                  >
                    {/* Cột Mã giao dịch */}
                    <div className="col-span-3 px-4 py-3 border-r border-gray-100">
                      <p className="text-sm text-gray-900 truncate" title={transaction.id}>
                        {transaction.id}
                      </p>
                    </div>

                    {/* Cột Loại giao dịch */}
                    <div className="col-span-2 px-4 py-3 border-r border-gray-100">
                      <p className="text-sm text-gray-900">
                        {transaction.type}
                      </p>
                    </div>

                    {/* Cột Nội dung */}
                    <div className="col-span-3 px-4 py-3 border-r border-gray-100">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm text-gray-900">
                          {transaction.content.main}
                        </p>
                        {transaction.content.link && (
                          <Link href="#" className="text-sm text-green-600 hover:underline truncate">
                            {transaction.content.link}
                          </Link>
                        )}
                        {transaction.content.balance && (
                          <p className="text-sm text-gray-500">
                            {transaction.content.balance}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Cột Trạng thái */}
                    <div className="col-span-2 px-4 py-3 border-r border-gray-100">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.status === 'Thành công'
                          ? 'bg-green-100 text-green-800'
                          : transaction.status === 'Đang xử lý'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                        {transaction.status}
                      </span>
                    </div>

                    {/* Cột Số tiền */}
                    <div className="col-span-2 px-4 py-3">
                      <p className={`text-sm font-medium ${transaction.isDecrease ? 'text-red-600' : 'text-green-600'
                        }`}>
                        {transaction.amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 