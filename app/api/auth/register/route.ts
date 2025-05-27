import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, password } = body

    // Kiểm tra email đã tồn tại
    if (email === "test@example.com") {
      return NextResponse.json(
        { 
          success: false,
          message: "Email đã được sử dụng" 
        },
        { status: 400 }
      )
    }

    // Trong thực tế sẽ lưu user vào database
    return NextResponse.json({ 
      success: true,
      message: "Đăng ký thành công"
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false,
        message: "Đã có lỗi xảy ra" 
      },
      { status: 500 }
    )
  }
} 