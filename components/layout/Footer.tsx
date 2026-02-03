import Link from 'next/link'
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#003D7A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#0066CC]" />
              </div>
              <span className="text-lg font-bold">Anadolu Diyabet Derneği</span>
            </div>
            <p className="text-gray-300 text-sm">
              Diyabet farkındalığını artırmak ve diyabetli bireylere destek olmak için çalışıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/site/hakkimizda" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/site/haberler" className="text-gray-300 hover:text-white transition-colors">
                  Haberler
                </Link>
              </li>
              <li>
                <Link href="/site/etkinlikler" className="text-gray-300 hover:text-white transition-colors">
                  Etkinlikler
                </Link>
              </li>
              <li>
                <Link href="/site/iletisim" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-300 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Örnek Mah. Örnek Sk. No:1<br />
                  İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">+90 212 123 45 67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">info@anadoludiyabet.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} Anadolu Diyabet Derneği. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
