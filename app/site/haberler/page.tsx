import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ArrowRight } from 'lucide-react'
import { sanityFetch } from '@/lib/sanity/client'
import { allNewsQuery } from '@/lib/sanity/queries'
import { News } from '@/lib/sanity/types'

export const metadata = {
  title: 'Haberler - Anadolu Diyabet Derneği',
}

export default async function NewsPage() {
  const news: News[] = await sanityFetch(allNewsQuery)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0066CC] to-[#003D7A] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Haberler</h1>
          <p className="text-blue-100 text-lg">
            Derneğimizin faaliyetleri ve diyabet dünyasından güncel haberler.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Admin Bilgisi */}
        {news.length === 0 && (
          <div className="bg-[#E8F4FD] border border-[#0066CC] rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-[#0066CC] mb-2">İçerik Ekleme</h3>
            <p className="text-gray-600 mb-3">
              Henüz haber eklenmemiş. İçerik eklemek için:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li><a href="/admin" className="text-[#0066CC] underline">Admin paneline</a> gidin</li>
              <li>Sol menüden &quot;Haberler&quot; seçin</li>
              <li>&quot;Yeni Haber Ekle&quot; butonuna tıklayın</li>
              <li>Bilgileri doldurup kaydedin</li>
            </ol>
          </div>
        )}

        {/* News Grid */}
        {news.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item) => (
              <Link key={item._id} href={`/site/haberler/${item.slug.current}`} className="group">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {new Date(item.publishedAt).toLocaleDateString('tr-TR')}
                    </div>

                    <h2 className="text-xl font-semibold mb-3 group-hover:text-[#0066CC] transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 mb-4">{item.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {item.tags?.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-[#E8F4FD] text-[#0066CC]">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <span className="text-[#0066CC] font-medium text-sm flex items-center gap-1">
                        Devamını Oku
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* No News Message */}
        {news.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Henüz haber bulunmamaktadır.</p>
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
