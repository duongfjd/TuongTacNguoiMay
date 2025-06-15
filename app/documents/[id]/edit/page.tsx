"use client"

import { FileText, Plus, Search, X, Eye, Download, CheckCircle, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function EditDocumentPage() {
  const router = useRouter();
  const params = useParams();
  const documentId = params.id;

  const [documentName, setDocumentName] = useState("7-Pttkhttt-Design");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("Tài liệu bài giảng phân tích thiết kế hệ thống thông tin");
  const [keywords, setKeywords] = useState("Giáo án, Bài giảng, Phân tích thiết kế hệ thống thông tin");
  const [priceType, setPriceType] = useState("free");

  const handleSave = () => {
    const updatedDocument = {
      id: documentId, // Make sure documentId is a number if your DocumentItem uses number for id
      title: documentName,
      category: category,
      description: description,
      keywords: keywords,
      priceType: priceType,
      // You might need to add other fields here like views, downloadsCount, isFree, uploadedDate, image
    };
    localStorage.setItem('updatedDocument', JSON.stringify(updatedDocument));
    router.push('/dashboard?tab=documents');
  };

  const handleCancel = () => {
    router.push('/dashboard?tab=documents');
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-2">Sửa thông tin tài liệu</h1>
          <p className="text-center text-sm text-gray-600 mb-8">
            Nếu có bất kỳ ý kiến đóng góp vui lòng truy cập{" "}
            <Link href="https://forms.gle/1Tt59CgPiotwvgH8" className="text-blue-600 hover:underline">
              https://forms.gle/1Tt59CgPiotwvgH8
            </Link>
          </p>

          <div className="flex items-center space-x-4 mb-8">
            <FileText className="h-10 w-10 text-gray-500" />
            <span className="text-lg font-semibold">7-Pttkhttt-Design - 1.Pdf</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="documentName" className="block text-sm font-medium text-gray-700 mb-1">Tên tài liệu *</label>
              <Input 
                id="documentName" 
                value={documentName} 
                onChange={(e) => setDocumentName(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Danh mục *</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="education">Giáo án - Bài giảng</SelectItem>
                  <SelectItem value="thesis">Luận văn - Báo cáo kinh tế</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
            <Textarea 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              rows={4} 
            />
          </div>

          <div className="mb-8">
            <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">Từ khóa</label>
            <Input 
              id="keywords" 
              value={keywords} 
              onChange={(e) => setKeywords(e.target.value)} 
            />
          </div>

          <div className="mb-8">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Giá bán *</label>
            <Select value={priceType} onValueChange={setPriceType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Miễn phí</SelectItem>
                <SelectItem value="paid">Có phí</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div></div>
            <Button 
              variant="outline" 
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 col-span-1"
              onClick={handleCancel}
            >
              Hủy bỏ
            </Button>
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold col-span-1"
              onClick={handleSave}
            >
              Lưu thông tin
            </Button>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 