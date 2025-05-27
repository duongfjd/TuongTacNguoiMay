import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { amount, method } = await req.json()

    // Validate input
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Số tiền không hợp lệ" },
        { status: 400 }
      )
    }

    // Calculate actual amount based on payment method
    let actualAmount = amount
    if (method === "card") {
      actualAmount = amount * 0.7 // 70% for card payment
    }

    // Mock successful deposit
    return NextResponse.json({
      success: true,
      message: "Nạp tiền thành công",
      data: {
        amount: actualAmount,
        method,
        transactionId: `DEP${Date.now()}`,
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi xử lý giao dịch" },
      { status: 500 }
    )
  }
} 