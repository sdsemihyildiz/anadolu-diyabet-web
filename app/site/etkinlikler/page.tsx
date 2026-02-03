import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { sanityFetch } from '@/lib/sanity/client'
import { allEventsQuery } from '@/lib/sanity/queries'
import { Event } from '@/lib/sanity/types'

export const metadata = {
  title: 'Etkinlikler - Anadolu Diyabet Derneği',
}

export default async function EventsPage() {
  // Sanity'den etkinlikleri çek
  const events: Event[] = await sanityFetch(allEventsQuery)

  const now = new Date()

  // Tarihe göre otomatik ayrım
  const upcomingEvents = events
    .filter(e => new Date(e.eventDate) > now)
    .sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime())

  const pastEvents = events
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
        {/* Admin Bilgisi */}
        {events.length === 0 && (
          <div className="bg-[#E8F4FD] border border-[#0066CC] rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-[#0066CC] mb-2">İçerik Ekleme</h3>
            <p className="text-gray-600 mb-3">
              Henüz etkinlik eklenmemiş. İçerik eklemek için:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li><a href="/admin" className="text-[#0066CC] underline">Admin paneline</a> gidin</li>
              <li>Sol menüden &quot;Etkinlikler&quot; seçin</li>
              <li>&quot;Yeni Etkinlik Ekle&quot; butonuna tıklayın</li>
              <li>Bilgileri doldurup kaydedin</li>
            </ol>
          </div>
        )}

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
            <p className="text-gray-500 mb-4">Henüz etkinlik bulunmamaktadır.</p>
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
