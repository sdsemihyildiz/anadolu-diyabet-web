import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export const metadata = {
  title: 'İletişim - Anadolu Diyabet Derneği',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0066CC] to-[#003D7A] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">İletişim</h1>
          <p className="text-blue-100 text-lg">
            Bizimle iletişime geçmek için aşağıdaki formu kullanabilirsiniz.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Bize Ulaşın</h2>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adınız
                    </label>
                    <Input placeholder="Adınız" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Soyadınız
                    </label>
                    <Input placeholder="Soyadınız" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <Input type="email" placeholder="ornek@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <Input placeholder="+90 5XX XXX XX XX" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Konu
                  </label>
                  <Input placeholder="Mesajınızın konusu" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız
                  </label>
                  <Textarea placeholder="Mesajınızı buraya yazın..." rows={5} />
                </div>

                <Button className="w-full bg-[#0066CC] hover:bg-[#0052a3]">
                  <Send className="w-4 h-4 mr-2" />
                  Gönder
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F4FD] rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#0066CC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-gray-600">
                      Örnek Mahallesi, Örnek Sokak No:1<br />
                      34000 İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F4FD] rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#0066CC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-600">
                      +90 212 123 45 67
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F4FD] rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#0066CC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-posta</h3>
                    <p className="text-gray-600">
                      info@anadoludiyabet.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F4FD] rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#0066CC]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
                    <p className="text-gray-600">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">Harita burada görünecek</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
