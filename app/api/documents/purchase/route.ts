import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { documentId, userId } = await req.json()

    // Validate input
    if (!documentId || !userId) {
      return NextResponse.json(
        { error: "Thông tin không hợp lệ" },
        { status: 400 }
      )
    }

    // Mock successful purchase
    return NextResponse.json({
      success: true,
      message: "Mua tài liệu thành công",
      data: {
        documentId,
        userId,
        transactionId: `PUR${Date.now()}`,
        timestamp: new Date().toISOString(),
        downloadUrl: `/api/documents/${documentId}/download`
      }
    })

  } catch (error) {
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi xử lý giao dịch" },
      { status: 500 }
    )
  }
} 