import { Heart, Target, Eye, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: 'Hakkımızda - Anadolu Diyabet Derneği',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0066CC] to-[#003D7A] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Anadolu Diyabet Derneği olarak diyabetle mücadele eden bireylere destek olmak
            ve toplumda farkındalık yaratmak için çalışıyoruz.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#E8F4FD] rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#0066CC]" />
              </div>
              <h2 className="text-xl font-semibold mb-3">Misyonumuz</h2>
              <p className="text-gray-600">
                Diyabetli bireylerin yaşam kalitesini artırmak, erken teşhis ve
                tedavi olanaklarını yaygınlaştırmak için çalışmak.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#E8F4FD] rounded-full flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-[#0066CC]" />
              </div>
              <h2 className="text-xl font-semibold mb-3">Vizyonumuz</h2>
              <p className="text-gray-600">
                Diyabet konusunda toplumsal bilincin arttığı, diyabetli bireylerin
                sağlıklı ve aktif bir yaşam sürdüğü bir Türkiye.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#E8F4FD] rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#0066CC]" />
              </div>
              <h2 className="text-xl font-semibold mb-3">Değerlerimiz</h2>
              <p className="text-gray-600">
                Şeffaflık, dayanışma, bilimsellik ve toplumsal sorumluluk
                ilkeleriyle hareket ediyoruz.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About Text */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Derneğimiz</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Anadolu Diyabet Derneği, diyabet konusunda farkındalık yaratmak ve diyabetli
              bireylere destek olmak amacıyla kurulmuş bir sivil toplum kuruluşudur.
              Derneğimiz, Türkiye genelinde diyabetle ilgili eğitim, araştırma ve
              destek faaliyetleri yürütmektedir.
            </p>
            <p className="text-gray-600 mb-4">
              Yönetim kurulumuz; endokrinoloji uzmanları, diyetisyenler, psikologlar
              ve diyabetli bireylerden oluşan deneyimli bir kadroya sahiptir.
              Bu çeşitlilik, derneğimizin faaliyetlerini daha kapsamlı ve etkili
              bir şekilde sürdürmesini sağlamaktadır.
            </p>
            <p className="text-gray-600">
              Düzenlediğimiz etkinlikler, seminerler ve sağlık taramaları ile
              toplumun her kesimine ulaşmayı hedefliyoruz. Diyabetin önlenmesi,
              erken teşhisi ve etkin yönetimi konularında sürekli çalışıyoruz.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#0066CC] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Üye</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Etkinlik</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Danışan</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Yıllık Tecrübe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
