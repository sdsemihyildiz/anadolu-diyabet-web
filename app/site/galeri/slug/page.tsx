import Link from 'next/link'
import { ArrowLeft, ImageIcon } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

const sampleGallery = {
  title: 'Dünya Diyabet Günü 2024',
  description: '14 Kasım Dünya Diyabet Günü etkinliklerimizden kareler.',
  images: Array(12).fill(null),
}

export default async function GalleryDetailPage({ params }: PageProps) {
  const { slug } = await params

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/site/galeri"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0066CC] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Tüm Albümler
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3">{sampleGallery.title}</h1>
          <p className="text-gray-600">{sampleGallery.description}</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sampleGallery.images.map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
            >
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
