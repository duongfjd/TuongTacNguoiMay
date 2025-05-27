"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"

const paymentMethods = [
  { id: "atm", name: "ATM & QR", description: "Chuyển khoản qua ATM hoặc quét mã QR" },
  { id: "momo", name: "Momo", description: "Thanh toán qua ví MoMo" },
  { id: "card", name: "Thẻ cào", description: "Nạp qua thẻ cào điện thoại (70% giá trị)" }
]

const presetAmounts = [50000, 100000, 200000, 500000, 1000000]

export default function DepositPage() {
  const [amount, setAmount] = useState("")
  const [method, setMethod] = useState("atm")
  const [loading, setLoading] = useState(false)

  const handleDeposit = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseInt(amount),
          method
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }

      toast.success("Nạp tiền thành công!")
      // Handle successful deposit (e.g., update balance, redirect)
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Có lỗi xảy ra")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle>Nạp tiền vào tài khoản</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Số tiền nạp</Label>
            <Input
              type="number"
              placeholder="Nhập số tiền"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {presetAmounts.map((preset) => (
                <Button
                  key={preset}
                  variant="outline"
                  onClick={() => setAmount(preset.toString())}
                >
                  {preset.toLocaleString()}đ
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Phương thức thanh toán</Label>
            <RadioGroup value={method} onValueChange={setMethod}>
              {paymentMethods.map((pm) => (
                <div key={pm.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={pm.id} id={pm.id} />
                  <Label htmlFor={pm.id} className="flex flex-col">
                    <span className="font-medium">{pm.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {pm.description}
                    </span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button 
            className="w-full" 
            onClick={handleDeposit}
            disabled={loading || !amount}
          >
            {loading ? "Đang xử lý..." : "Nạp tiền"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 