import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Newspaper, ImageIcon, FileText, ArrowRight, Heart, Activity, Users } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0066CC] to-[#003D7A] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Diyabet Farkındalığı İçin Birlikte Çalışıyoruz
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              Anadolu Diyabet Derneği olarak, diyabetli bireylere destek olmak,
              farkındalık yaratmak ve toplumu bilinçlendirmek için çalışıyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/site/hakkimizda">
                <Button size="lg" className="bg-white text-[#0066CC] hover:bg-gray-100">
                  Hakkımızda
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/site/iletisim">
                <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0066CC]">
                  Bize Ulaşın
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Destek</h3>
                <p className="text-gray-600">
                  Diyabetli bireylere ve ailelerine psikososyal destek sağlıyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Farkındalık</h3>
                <p className="text-gray-600">
                  Toplumda diyabet farkındalığını artırmak için eğitimler düzenliyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#E8F4FD] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Topluluk</h3>
                <p className="text-gray-600">
                  Diyabetli bireyleri bir araya getirerek dayanışma ortamı oluşturuyoruz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Keşfedin</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/site/haberler">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Newspaper className="w-10 h-10 text-[#0066CC] mx-auto mb-3" />
                  <h3 className="font-semibold">Haberler</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/site/etkinlikler">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-10 h-10 text-[#0066CC] mx-auto mb-3" />
                  <h3 className="font-semibold">Etkinlikler</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/site/galeri">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <ImageIcon className="w-10 h-10 text-[#0066CC] mx-auto mb-3" />
                  <h3 className="font-semibold">Galeri</h3>
                </CardContent>
              </Card>
            </Link>

            <Link href="/site/yayinlar">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="w-10 h-10 text-[#0066CC] mx-auto mb-3" />
                  <h3 className="font-semibold">Yayınlar</h3>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#E8F4FD]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Bize Katılın</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Anadolu Diyabet Derneği olarak, diyabetle mücadele eden herkesi
            aramıza bekliyoruz. Birlikte daha güçlüyüz.
          </p>
          <Link href="/site/iletisim">
            <Button size="lg" className="bg-[#0066CC] hover:bg-[#0052a3]">
              İletişime Geçin
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
