"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Plus, Search, X, Eye, Download, CheckCircle, Edit } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogOverlay } from "@/components/ui/alert-dialog"

interface DocumentItem {
  id: number;
  title: string;
  category: string;
  type: string;
  views: number;
  downloadsCount: number;
  isFree: boolean;
  price?: number;
  uploadedDate: string;
  status: 'successful' | 'failed';
  image: string;
}

export function DocumentsTab() {
  const [activeSubTab, setActiveSubTab] = useState('successful');
  const [searchQuery, setSearchQuery] = useState('');
  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      id: 1,
      title: "CNXHKH - Công nghiệp hóa, hiện đại hóa ở Việt Nam",
      category: "Giáo án - Bài giảng",
      type: "Đại học",
      views: 61,
      downloadsCount: 0,
      isFree: true,
      uploadedDate: "01/07/2024, 15:09",
      status: 'successful',
      image: "/slider1.png", // Placeholder image path
    },
    {
      id: 2,
      title: "7-Pttkhttt-Design - 1.Pdf",
      category: "Giáo án - Bài giảng",
      type: "Đại học",
      views: 76,
      downloadsCount: 3,
      isFree: true,
      uploadedDate: "29/06/2024, 00:00",
      status: 'successful',
      image: "/slider1.png", // Placeholder image path
    },
    {
      id: 3,
      title: "9-Pttkhttt-Design - 4.Pdf",
      category: "Giáo án - Bài giảng",
      type: "Đại học",
      views: 61,
      downloadsCount: 0,
      isFree: true,
      uploadedDate: "29/06/2024, 00:00",
      status: 'successful',
      image: "/slider1.png", // Placeholder image path
    },
    {
      id: 4,
      title: "Nội Dung Thi.docx",
      category: "Luận văn - Báo cáo kinh tế",
      type: "Quản lý",
      views: 61,
      downloadsCount: 0,
      isFree: false,
      price: 20000,
      uploadedDate: "29/06/2024, 00:00",
      status: 'successful',
      image: "/slider1.png", // Placeholder image path
    },
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUpdatedDocument = localStorage.getItem('updatedDocument');
      if (storedUpdatedDocument) {
        const updatedDoc = JSON.parse(storedUpdatedDocument);
        setDocuments(prevDocuments => 
          prevDocuments.map(doc => 
            doc.id == updatedDoc.id ? { 
              ...doc, 
              title: updatedDoc.title,
              category: updatedDoc.category,
              description: updatedDoc.description,
              // Add other fields you want to update here
            } : doc
          )
        );
        localStorage.removeItem('updatedDocument'); // Clean up localStorage
      }
    }
  }, []);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [documentToDelete, setDocumentToDelete] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setDocumentToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (documentToDelete !== null) {
      setDocuments(documents.filter(doc => doc.id !== documentToDelete));
      setIsDeleteDialogOpen(false);
      setDocumentToDelete(null);
    }
  };

  const successfulDocuments = documents.filter(doc => 
    doc.status === 'successful' && 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const failedDocuments = documents.filter(doc => 
    doc.status === 'failed' && 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Quản lý tài liệu</h1>

      {/* Statistics Section */}
      <div className="flex justify-end space-x-8 text-sm font-semibold text-gray-600">
        <div className="text-center">
          <p className="text-lg text-black">280</p>
          <p>LƯỢT XEM</p>
        </div>
        <div className="text-center">
          <p className="text-lg text-black">7</p>
          <p>TÀI LIỆU</p>
        </div>
        <div className="text-center">
          <p className="text-lg text-black">0</p>
          <p>LƯỢT TẢI</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link href="/upload">
          <Button className="bg-green-500 hover:bg-green-600">
            <Plus className="h-4 w-4 mr-2" />
            TẢI TÀI LIỆU LÊN
          </Button>
        </Link>
        <div className="relative">
          <Input 
            placeholder="Tìm kiếm..." 
            className="pr-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
      </div>

      <Tabs defaultValue="successful">
        <TabsList>
          <TabsTrigger value="successful">Tài thành công ({successfulDocuments.length})</TabsTrigger>
          <TabsTrigger value="failed">Tài không thành công ({failedDocuments.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="successful">
          {successfulDocuments.length > 0 ? (
            <div className="space-y-4">
              {successfulDocuments.map((doc) => (
                <Card key={doc.id} className="flex items-center p-4">
                  <div className="relative h-24 w-32 shrink-0 mr-4">
                    <Image
                      src={doc.image}
                      alt={doc.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base line-clamp-1">{doc.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-1">{doc.category} » {doc.type}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                      <div className="flex items-center"><Eye className="h-3 w-3 mr-1" /> {doc.views}</div>
                      <div className="flex items-center"><Download className="h-3 w-3 mr-1" /> {doc.downloadsCount}</div>
                      {doc.isFree ? (
                        <span className="text-orange-500 font-bold flex items-center">Miễn phí <CheckCircle className="h-3 w-3 ml-1 text-green-500" /></span>
                      ) : (
                        <span className="text-green-500 font-bold flex items-center">{doc.price?.toLocaleString("vi-VN")}đ <CheckCircle className="h-3 w-3 ml-1 text-green-500" /></span>
                      )}
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <button 
                        onClick={() => handleDeleteClick(doc.id)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Xóa
                      </button>
                      <Link href={`/documents/${doc.id}/edit`} className="text-blue-500 text-sm hover:underline">Sửa</Link>
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    Ngày tải lên: {doc.uploadedDate}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">Chưa có tài liệu nào thành công.</div>
          )}
        </TabsContent>
        <TabsContent value="failed">
          {failedDocuments.length > 0 ? (
            <div className="space-y-4">
              {failedDocuments.map((doc) => (
                <Card key={doc.id} className="flex items-center p-4">
                  <div className="relative h-24 w-32 shrink-0 mr-4">
                    <Image
                      src={doc.image}
                      alt={doc.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-base line-clamp-1">{doc.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-1">{doc.category} » {doc.type}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                      <span className="text-red-500 font-bold">Lỗi tải lên</span>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <button 
                        onClick={() => handleDeleteClick(doc.id)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Xóa
                      </button>
                      <Link href={`/documents/${doc.id}/edit`} className="text-blue-500 text-sm hover:underline">Sửa</Link>
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    Ngày tải lên: {doc.uploadedDate}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">Chưa có tài liệu không thành công.</div>
          )}
        </TabsContent>
      </Tabs>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogOverlay className="bg-black/25" />
        <AlertDialogContent className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm mx-auto">
          <AlertDialogHeader className="flex flex-col items-center text-center">
            <AlertDialogTitle className="text-xl font-bold">Xác nhận</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 mt-2">Bạn có chắc chắn muốn xóa tài liệu này?</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="grid grid-cols-4 gap-2 mt-6">
            <div></div> {/* Ô trống 1 */}
            <AlertDialogAction 
              onClick={confirmDelete} 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold col-span-1"
            >
              Xác nhận
            </AlertDialogAction>
            <AlertDialogCancel 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold col-span-1"
            >
              Hủy bỏ
            </AlertDialogCancel>
            <div></div> {/* Ô trống 2 */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}