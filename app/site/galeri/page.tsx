import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ImageIcon } from 'lucide-react'

export const metadata = {
  title: 'Galeri - Anadolu Diyabet Derneği',
}

const sampleGalleries = [
  {
    _id: '1',
    title: 'Dünya Diyabet Günü 2024',
    slug: { current: 'dunya-diyabet-gunu-2024' },
    description: '14 Kasım Dünya Diyabet Günü etkinliklerimizden kareler.',
    imageCount: 24,
  },
  {
    _id: '2',
    title: 'Ücretsiz Tarama Etkinliği',
    slug: { current: 'ucretsiz-tarama' },
    description: 'Toplum sağlığı için düzenlediğimiz tarama etkinliğimiz.',
    imageCount: 18,
  },
  {
    _id: '3',
    title: 'Eğitim Seminerleri 2024',
    slug: { current: 'egitim-seminerleri' },
    description: 'Yıl içinde düzenlediğimiz eğitim seminerlerinden.',
    imageCount: 32,
  },
  {
    _id: '4',
    title: 'Yönetim Kurulu Toplantısı',
    slug: { current: 'yonetim-kurulu' },
    description: 'Yönetim kurulu toplantımızdan görüntüler.',
    imageCount: 12,
  },
  {
    _id: '5',
    title: 'Saha Ziyaretleri',
    slug: { current: 'saha-ziyaretleri' },
    description: 'Hastane ve sağlık kuruluşlarını ziyaretlerimiz.',
    imageCount: 28,
  },
  {
    _id: '6',
    title: 'Kampanya Görselleri',
    slug: { current: 'kampanya' },
    description: 'Farkındalık kampanyalarımızdan görseller.',
    imageCount: 15,
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0066CC] to-[#003D7A] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Galeri</h1>
          <p className="text-blue-100 text-lg">
            Derneğimizin etkinliklerinden fotoğraflar.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleGalleries.map((gallery) => (
            <Link key={gallery._id} href={`/site/galeri/${gallery.slug.current}`}>
              <Card className="border-0 shadow-md hover:shadow-lg transition-all h-full overflow-hidden group">
                {/* Placeholder Image */}
                <div className="aspect-video bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#0066CC] transition-colors">
                    {gallery.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{gallery.description}</p>
                  <p className="text-sm text-gray-500">{gallery.imageCount} fotoğraf</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
