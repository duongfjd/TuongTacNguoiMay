"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload, File, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function UploadPage() {
  const router = useRouter()
  const [files, setFiles] = useState<File[]>([])
  const [price, setPrice] = useState(0)
  const [isFree, setIsFree] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [subject, setSubject] = useState('')
  const [tags, setTags] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle upload logic here
    console.log({files, title, description, category, subject, tags, price, isFree});
    router.push("/dashboard")
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 relative">
        {/* Header content from the image */}
        <div className="w-full text-center mb-6">
          <h1 className="text-zinc-800 text-3xl font-bold font-['Inter'] leading-9 mb-2">Đăng bán và chia sẻ tài liệu lên thư viện điện tử lớn nhất Việt Nam</h1>
          <p className="text-zinc-800 text-lg font-normal font-['Inter'] leading-7 mb-1">9Document sẽ mang đến cho bạn hơn 10 triệu độc giả, thu nhập, danh tiếng và hơn thế nữa</p>
          <p className="text-zinc-800 text-sm font-normal font-['Inter'] leading-snug">Nếu có bất kỳ ý kiến đóng góp vui lòng truy cập <span className="text-teal-600 text-sm font-normal font-['Inter'] underline leading-snug">https://forms.gle/i1Tt59CgPjotwvGH8</span></p>
        </div>

        {/* "Trở lại" button - adjusted position */}
        <div className="absolute right-4 top-4">
          <button onClick={() => router.back()} className="text-black text-xl font-normal font-['Inter'] hover:underline">&lt; Trở lại</button>
        </div>

        {files.length === 0 ? (
          /* Upload box from the image */
          <div className="max-w-3xl mx-auto bg-teal-50 rounded-md outline outline-1 outline-offset-[-1px] outline-teal-600 p-8 mb-8">
            <h2 className="text-zinc-800 text-3xl font-normal font-['Inter'] leading-9 text-center mb-6">Tải tài liệu lên 9Document</h2>
            <div className="w-64 h-11 mx-auto bg-green-500 rounded">
              <input type="file" id="file-upload" className="hidden" multiple onChange={handleFileChange} />
              <label htmlFor="file-upload" className="w-full h-full flex items-center justify-center cursor-pointer">
                <div className="text-white text-lg font-normal font-['Inter'] leading-7">Tải lên</div>
              </label>
            </div>
            <p className="text-neutral-400 text-base font-normal font-['Inter'] leading-normal text-center mt-4">
              Chọn nút <span className="text-neutral-400 text-base font-bold font-['Inter'] leading-normal">Tải lên</span> để chọn nhiều tài liệu từ máy tính của bạn hoặc kéo tài liệu thả vào đây<br/>
              Tối đa 50 tài liệu với kích thước mỗi tài liệu 100MB<br/>
              Các định dạng tài liệu: doc, pdf, docx, ppt, pptx, pot, potx, pps, ppsx
            </p>
          </div>
        ) : (
          /* New form for document information */
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow relative">
            {/* File info and progress bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <File className="h-8 w-8 text-green-500 mr-2" />
                <span className="text-black text-base font-bold font-['Inter']">{files[0]?.name}</span>
              </div>
              <span className="text-black text-sm font-normal font-['Inter']">{(files[0]?.size / 1024).toFixed(2)} KB</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="text-right text-black text-sm font-normal font-['Inter'] mb-6">100%</div>

            <h2 className="text-gray-800 text-lg font-bold font-['Inter'] mb-4">Thêm thông tin cho tài liệu</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Tên tài liệu *</Label>
                <Input id="title" placeholder="Nhập tên tài liệu" required value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Danh mục *</Label>
                <Select required value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="exam">Đề thi & Kiểm tra</SelectItem>
                    <SelectItem value="thesis">Luận văn & Báo cáo</SelectItem>
                    <SelectItem value="slide">Bài giảng & Slide</SelectItem>
                    <SelectItem value="textbook">Giáo trình</SelectItem>
                    <SelectItem value="form">Biểu mẫu & Hợp đồng</SelectItem>
                    <SelectItem value="project">Đồ án & Nghiên cứu</SelectItem>
                    <SelectItem value="other">Tài liệu khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Mô tả</Label>
                <Textarea id="description" placeholder="Nhập mô tả" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Từ khóa</Label>
                <Input id="tags" placeholder="Để có kết quả cao tại thứ hạng tìm kiếm" value={tags} onChange={(e) => setTags(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price-type">Giá bán *</Label>
                <Select value={isFree ? 'free' : 'paid'} onValueChange={(value) => setIsFree(value === 'free')}>
                    <SelectTrigger>
                        <SelectValue placeholder="Chọn loại giá" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="free">Miễn phí</SelectItem>
                        <SelectItem value="paid">Trả phí</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              {!isFree && (
                <div className="space-y-4">
                  <Label>Giá bán: {price.toLocaleString("vi-VN")} VNĐ</Label>
                  <Slider defaultValue={[0]} max={500000} step={5000} onValueChange={(value) => setPrice(value[0])} />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0 VNĐ</span>
                    <span>500.000 VNĐ</span>
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-4 mt-6">
                <Button type="button" variant="outline" onClick={() => { setFiles([]); router.back(); }}>
                  Hủy bỏ
                </Button>
                <Button type="submit" className="bg-green-500 hover:bg-green-600">
                  Lưu thông tin
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
