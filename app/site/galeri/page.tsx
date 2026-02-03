import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ImageIcon } from 'lucide-react'
import { sanityFetch } from '@/lib/sanity/client'
import { allGalleriesQuery } from '@/lib/sanity/queries'
import { Gallery } from '@/lib/sanity/types'

export const metadata = {
  title: 'Galeri - Anadolu Diyabet Derneği',
}

export default async function GalleryPage() {
  const galleries: Gallery[] = await sanityFetch(allGalleriesQuery)

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Admin Bilgisi */}
        {galleries.length === 0 && (
          <div className="bg-[#E8F4FD] border border-[#0066CC] rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-[#0066CC] mb-2">İçerik Ekleme</h3>
            <p className="text-gray-600 mb-3">
              Henüz galeri eklenmemiş. İçerik eklemek için:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li><a href="/admin" className="text-[#0066CC] underline">Admin paneline</a> gidin</li>
              <li>Sol menüden &quot;Galeri&quot; seçin</li>
              <li>&quot;Yeni Galeri Ekle&quot; butonuna tıklayın</li>
              <li>Fotoğrafları yükleyip kaydedin</li>
            </ol>
          </div>
        )}

        {/* Gallery Grid */}
        {galleries.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((gallery) => (
              <Link key={gallery._id} href={`/site/galeri/${gallery.slug.current}`}>
                <Card className="border-0 shadow-md hover:shadow-lg transition-all h-full overflow-hidden group">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#0066CC] transition-colors">
                      {gallery.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{gallery.description}</p>
                    <p className="text-sm text-gray-500">{gallery.imageCount || 0} fotoğraf</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* No Galleries Message */}
        {galleries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Henüz galeri bulunmamaktadır.</p>
            <a
              href="/admin"
              className="inline-block bg-[#0066CC] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-colors"
            >
              Admin Paneline Git
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
