import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedDocuments } from "@/components/featured-documents"
import { Categories } from "@/components/categories"
import { Footer } from "@/components/footer"
import { Library, BookOpen, FileText, Bot, AudioLines, Repeat, ListChecks, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Categories />

        {/* Danh mục công cụ */}

        <FeaturedDocuments title="Tài liệu nổi bật" />
        <FeaturedDocuments title="Tài liệu mới nhất" />
        <FeaturedDocuments title="Tài liệu phổ biến" />
      </div>
      <Footer />
    </main>
  )
}
