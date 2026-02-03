import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Calendar, Download } from 'lucide-react'
import { sanityFetch } from '@/lib/sanity/client'
import { allPublicationsQuery } from '@/lib/sanity/queries'
import { Publication } from '@/lib/sanity/types'

export const metadata = {
  title: 'Yayınlar - Anadolu Diyabet Derneği',
}

const categoryLabels: Record<string, string> = {
  bilgilendirme: 'Bilgilendirme',
  arastirma: 'Araştırma',
  rehber: 'Rehber',
  diger: 'Diğer',
}

const categoryColors: Record<string, string> = {
  bilgilendirme: 'bg-blue-100 text-blue-700',
  arastirma: 'bg-purple-100 text-purple-700',
  rehber: 'bg-green-100 text-green-700',
  diger: 'bg-gray-100 text-gray-700',
}

export default async function PublicationsPage() {
  const publications: Publication[] = await sanityFetch(allPublicationsQuery)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0066CC] to-[#003D7A] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Yayınlar</h1>
          <p className="text-blue-100 text-lg">
            Derneğimiz tarafından hazırlanan bilgilendirici dokümanlar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Admin Bilgisi */}
        {publications.length === 0 && (
          <div className="bg-[#E8F4FD] border border-[#0066CC] rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-[#0066CC] mb-2">İçerik Ekleme</h3>
            <p className="text-gray-600 mb-3">
              Henüz yayın eklenmemiş. İçerik eklemek için:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li><a href="/admin" className="text-[#0066CC] underline">Admin paneline</a> gidin</li>
              <li>Sol menüden &quot;Yayınlar&quot; seçin</li>
              <li>&quot;Yeni Yayın Ekle&quot; butonuna tıklayın</li>
              <li>PDF yükleyip bilgileri doldurun</li>
            </ol>
          </div>
        )}

        {/* Publications List */}
        {publications.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-4">
            {publications.map((pub) => (
              <Card key={pub._id} className="border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E8F4FD] rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-[#0066CC]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        {pub.category && (
                          <Badge className={categoryColors[pub.category]}>
                            {categoryLabels[pub.category]}
                          </Badge>
                        )}
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(pub.publishedAt).toLocaleDateString('tr-TR')}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{pub.description}</p>

                      {pub.pdfFile && (
                        <a
                          href={pub.pdfFile.asset.url}
                          download
                          className="text-[#0066CC] font-medium text-sm flex items-center gap-1 hover:underline"
                        >
                          <Download className="w-4 h-4" />
                          PDF İndir
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* No Publications Message */}
        {publications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Henüz yayın bulunmamaktadır.</p>
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
