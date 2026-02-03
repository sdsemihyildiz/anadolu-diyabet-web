import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Haberler - Anadolu Diyabet Derneği',
}

// Örnek haberler (gerçek veriler Sanity'den gelecek)
const sampleNews = [
  {
    _id: '1',
    title: 'Dünya Diyabet Günü Etkinliğimiz Yoğun İlgi Gördü',
    slug: { current: 'dunya-diyabet-gunu-etkinligi' },
    excerpt: '14 Kasım Dünya Diyabet Günü kapsamında düzenlediğimiz etkinliğe yüzlerce vatandaşımız katıldı.',
    publishedAt: '2024-11-15',
    tags: ['Etkinlik', 'Dünya Diyabet Günü'],
  },
  {
    _id: '2',
    title: 'Yeni Diyabet Kılavuzu Yayınlandı',
    slug: { current: 'yeni-diyabet-kilavuzu' },
    excerpt: 'Derneğimiz tarafından hazırlanan kapsamlı diyabet rehberi ücretsiz olarak erişime açıldı.',
    publishedAt: '2024-11-10',
    tags: ['Yayın', 'Rehber'],
  },
  {
    _id: '3',
    title: 'Okullarda Diyabet Farkındalık Programı Başladı',
    slug: { current: 'okullarda-farkindalik-programi' },
    excerpt: 'İstanbul genelindeki okullarda diyabet farkındalığı eğitimlerine başladık.',
    publishedAt: '2024-11-05',
    tags: ['Eğitim', 'Farkındalık'],
  },
  {
    _id: '4',
    title: 'Ücretsiz Kan Şekeri Taraması Devam Ediyor',
    slug: { current: 'ucretsiz-tarama' },
    excerpt: 'Toplum sağlığı için düzenlediğimiz ücretsiz kan şekeri taramasına katılım devam ediyor.',
    publishedAt: '2024-10-28',
    tags: ['Sağlık', 'Tarama'],
  },
]

export default function NewsPage() {
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

      {/* News Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {sampleNews.map((news) => (
            <Link key={news._id} href={`/site/haberler/${news.slug.current}`} className="group">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(news.publishedAt).toLocaleDateString('tr-TR')}
                  </div>

                  <h2 className="text-xl font-semibold mb-3 group-hover:text-[#0066CC] transition-colors">
                    {news.title}
                  </h2>

                  <p className="text-gray-600 mb-4">{news.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {news.tags?.map((tag) => (
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
      </div>
    </div>
  )
}
