import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Örnek haber detayı
const sampleNews = {
  title: 'Dünya Diyabet Günü Etkinliğimiz Yoğun İlgi Gördü',
  publishedAt: '2024-11-15',
  tags: ['Etkinlik', 'Dünya Diyabet Günü'],
  content: `
    14 Kasım Dünya Diyabet Günü kapsamında düzenlediğimiz etkinliğe yüzlerce vatandaşımız katıldı.

    Etkinlik kapsamında ücretsiz kan şekeri ölçümleri yapıldı ve uzman doktorlarımız tarafından
    halka açık seminerler verildi.

    Ayrıca diyabetli bireylerin yaşam hikayelerinin anlatıldığı bir panel düzenlendi ve
    katılımcılar deneyimlerini paylaştı.

    Dernek başkanımız yaptığı konuşmada: "Diyabetle mücadelede farkındalık çok önemli.
    Erken teşhis ve doğru tedavi ile diyabet kontrol altına alınabilir" dedi.
  `,
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link
          href="/site/haberler"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0066CC] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Tüm Haberler
        </Link>

        {/* Article */}
        <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              {new Date(sampleNews.publishedAt).toLocaleDateString('tr-TR')}
            </div>

            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gray-500" />
              {sampleNews.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-[#E8F4FD] text-[#0066CC]">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {sampleNews.title}
          </h1>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            {sampleNews.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}
