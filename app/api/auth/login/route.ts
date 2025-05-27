import { NextResponse } from "next/server"

// Mock user data - trong thực tế sẽ lấy từ database
const MOCK_USER = {
  email: "test@example.com",
  password: "password123"
}

export async function POST(request: Request) {
  return NextResponse.json({ 
    success: true,
    message: "Đăng nhập thành công"
  })
} 