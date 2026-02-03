# Anadolu Diyabet Derneği Website

Anadolu Diyabet Derneği için Next.js + Sanity CMS ile geliştirilmiş modern, hızlı ve kullanıcı dostu bir website.

## 🌐 Canlı Site

https://anadoludiyabet.com

## ✨ Özellikler

- **Modern Tasarım** - Responsive, mobil uyumlu arayüz
- **Hızlı Performans** - Next.js 14 ile SSR/SSG
- **Kolay Yönetim** - Sanity CMS entegrasyonu
- **SEO Dostu** - Otomatik SEO optimizasyonu
- **Güvenli** - .env ile korunan API anahtarları

## 🛠️ Teknolojiler

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **UI:** shadcn/ui bileşenleri
- **CMS:** Sanity.io (Headless CMS)
- **Hosting:** Vercel
- **Font:** Inter

## 📁 Proje Yapısı

```
app/
├── site/              # Ziyaretçi sayfaları
│   ├── page.tsx       # Ana sayfa
│   ├── hakkimizda/    # Hakkımızda
│   ├── haberler/      # Haberler listesi + detay
│   ├── etkinlikler/   # Etkinlik takvimi
│   ├── galeri/        # Fotoğraf albümleri
│   ├── yayinlar/      # PDF yayınlar
│   └── iletisim/      # İletişim formu
├── admin/             # Sanity Studio (CMS)
└── layout.tsx         # Root layout

components/
├── layout/            # Navbar, Footer
├── ui/                # shadcn/ui bileşenleri
└── shared/            # Paylaşılan bileşenler

sanity/
├── schemaTypes/       # CMS içerik şemaları
│   ├── news.ts        # Haberler
│   ├── event.ts       # Etkinlikler
│   ├── gallery.ts     # Galeri
│   ├── publication.ts # Yayınlar
│   ├── page.ts        # Sayfalar
│   └── siteSettings.ts # Site ayarları
└── config.ts          # Sanity yapılandırması
```

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adımlar

1. **Repoyu klonlayın:**
```bash
git clone https://github.com/syrexi/anadolu-diyabet-web.git
cd anadolu-diyabet-web
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Çevre değişkenlerini ayarlayın:**
```bash
cp .env.local.example .env.local
```
`.env.local` dosyasını düzenleyin:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_token
```

4. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

5. **Tarayıcıda açın:**
http://localhost:3000

## 📝 Admin Panel Kullanımı

### Giriş
1. `/admin` adresine gidin
2. Sanity hesabı ile giriş yapın

### İçerik Ekleme
- **Haber:** Sol menüden "Haberler" → "Yeni Haber Ekle"
- **Etkinlik:** "Etkinlikler" → Tarih girin (otomatik yaklaşan/geçmiş ayrımı)
- **Galeri:** "Galeri" → Albüm oluşturun, fotoğrafları sürükleyin
- **Yayın:** "Yayınlar" → PDF yükleyin

## 🚀 Deploy

### Vercel'e Deploy
```bash
npm i -g vercel
vercel --prod
```

### Godaddy Domain Ayarı
1. Vercel dashboard'dan domain ekle
2. Godaddy DNS ayarlarına Vercel'in verdiği kayıtları ekle

## 👥 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing`)
5. Pull Request açın

## 📄 Lisans

MIT License

## 📞 İletişim

Anadolu Diyabet Derneği
- Website: https://anadoludiyabet.com
- E-posta: info@anadoludiyabet.com

---

**Geliştirici:** Claude (Anthropic) + Dernek Yönetimi
