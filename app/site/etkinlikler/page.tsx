import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Etkinlikler - Anadolu Diyabet Derneği',
}

// Örnek etkinlikler (gerçek veriler Sanity'den gelecek)
// Tarihe göre otomatik yaklaşan/geçmiş ayrımı yapılır
const sampleEvents = [
  {
    _id: '1',
    title: 'Diyabet ve Beslenme Semineri',
    slug: { current: 'diyabet-beslenme-semineri' },
    description: 'Uzman diyetisyenler tarafından verilecek seminerde diyabetli bireyler için beslenme önerileri ele alınacak.',
    eventDate: '2026-03-15T14:00:00', // Gelecek tarih
    location: 'İstanbul, Kadıköy',
  },
  {
    _id: '2',
    title: 'Ücretsiz Kan Şekeri Taraması',
    slug: { current: 'kan-sekeri-taramasi' },
    description: 'Toplum sağlığı için ücretsiz kan şekeri taraması etkinliğimize tüm halkımız davetlidir.',
    eventDate: '2026-04-20T10:00:00', // Gelecek tarih
    location: 'İstanbul, Beşiktaş',
  },
  {
    _id: '3',
    title: 'Yılbaşı Diyabetli Buluşması',
    slug: { current: 'yilbasi-bulusmasi' },
    description: 'Diyabetli bireyler ve ailelerinin bir araya geleceği yılbaşı etkinliğimizde keyifli bir program sizi bekliyor.',
    eventDate: '2026-05-10T16:00:00', // Gelecek tarih
    location: 'İstanbul, Şişli',
  },
  {
    _id: '4',
    title: 'Diyabet Farkındalık Günü',
    slug: { current: 'farkindalik-gunu' },
    description: 'Geçtiğimiz ay düzenlediğimiz farkındalık gününden kareler.',
    eventDate: '2025-01-15T13:00:00', // Geçmiş tarih
    location: 'İstanbul, Taksim',
  },
  {
    _id: '5',
    title: 'Eğitim Semineri: Tip 1 Diyabet',
    slug: { current: 'tip1-diyabet-egitimi' },
    description: 'Çocuk ve ergenlerde Tip 1 diyabet yönetimi hakkında kapsamlı eğitim.',
    eventDate: '2025-02-20T10:00:00', // Geçmiş tarih
    location: 'İstanbul, Bakırköy',
  },
]

export default function EventsPage() {
  const now = new Date()

  // Tarihe göre otomatik ayrım
  const upcomingEvents = sampleEvents
    .filter(e => new Date(e.eventDate) > now)
    .sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime())

  const pastEvents = sampleEvents
    .filter(e => new Date(e.eventDate) <= now)
    .sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime())

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0066CC] to-[#003D7A] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Etkinlikler</h1>
          <p className="text-blue-100 text-lg">
            Derneğimizin düzenlediği etkinlikler ve programlar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Yaklaşan Etkinlikler</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {upcomingEvents.map((event) => (
                <Link key={event._id} href={`/site/etkinlikler/${event.slug.current}`} className="group">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all h-full">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-green-100 text-green-700 border-0">Yaklaşan</Badge>

                      <h3 className="text-lg font-semibold mb-3 group-hover:text-[#0066CC] transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(event.eventDate).toLocaleDateString('tr-TR', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t flex items-center justify-between">
                        <span className="text-[#0066CC] font-medium text-sm flex items-center gap-1">
                          Detayları Gör
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Geçmiş Etkinlikler</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Link key={event._id} href={`/site/etkinlikler/${event.slug.current}`} className="group">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all h-full opacity-75">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">Geçmiş</Badge>

                      <h3 className="text-lg font-semibold mb-3 group-hover:text-[#0066CC] transition-colors">
                        {event.title}
                      </h3>

                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(event.eventDate).toLocaleDateString('tr-TR')}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* No Events Message */}
        {upcomingEvents.length === 0 && pastEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Henüz etkinlik bulunmamaktadır.</p>
          </div>
        )}
      </div>
    </div>
  )
}
