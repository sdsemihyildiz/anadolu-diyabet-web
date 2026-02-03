import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Clock, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{ slug: string }>
}

const sampleEvent = {
  title: 'Diyabet ve Beslenme Semineri',
  description: 'Uzman diyetisyenler tarafından verilecek seminerde diyabetli bireyler için beslenme önerileri ele alınacak.',
  content: `
    Bu seminerde şu konular ele alınacak:

    - Diyabet ve beslenme ilişkisi
    - Kan şekeri dengesi için beslenme stratejileri
    - Günlük öğün planlama
    - Atıştırmalık seçimleri
    - Dışarıda sağlıklı beslenme

    Katılım ücretsizdir. Yerinizi ayırtmak için kayıt yapmanız önerilir.
  `,
  eventDate: '2024-12-15T14:00:00',
  endDate: '2024-12-15T16:00:00',
  location: 'İstanbul, Kadıköy - Dernek Merkezi',
  isPast: false,
  registrationLink: '#',
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/site/etkinlikler"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0066CC] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Tüm Etkinlikler
        </Link>

        <article className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-[#0066CC] to-[#003D7A] p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Badge className={sampleEvent.isPast ? 'bg-gray-500' : 'bg-green-500'}>
                  {sampleEvent.isPast ? 'Geçmiş' : 'Yaklaşan'}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4">{sampleEvent.title}</h1>
              <p className="text-blue-100 text-lg">{sampleEvent.description}</p>
            </div>

            {/* Info */}
            <div className="p-8">
              <div className="grid sm:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-xl">
                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">Tarih</span>
                  </div>
                  <p className="font-medium">
                    {new Date(sampleEvent.eventDate).toLocaleDateString('tr-TR', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">Saat</span>
                  </div>
                  <p className="font-medium">
                    {new Date(sampleEvent.eventDate).toLocaleTimeString('tr-TR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                    {sampleEvent.endDate && (
                      <> - {new Date(sampleEvent.endDate).toLocaleTimeString('tr-TR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}</>
                    )}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Konum</span>
                  </div>
                  <p className="font-medium">{sampleEvent.location}</p>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-gray max-w-none mb-8">
                {sampleEvent.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Registration Button */}
              {!sampleEvent.isPast && sampleEvent.registrationLink && (
                <div className="flex justify-center">
                  <Button size="lg" className="bg-[#0066CC] hover:bg-[#0052a3]">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Kayıt Ol
                  </Button>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
