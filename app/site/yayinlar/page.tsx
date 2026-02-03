import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Calendar, Download } from 'lucide-react'

export const metadata = {
  title: 'Yayınlar - Anadolu Diyabet Derneği',
}

const samplePublications = [
  {
    _id: '1',
    title: 'Diyabet Rehberi 2024',
    description: 'Diyabet tanısı alan bireyler için kapsamlı bir yaşam rehberi.',
    category: 'rehber',
    publishedAt: '2024-11-01',
  },
  {
    _id: '2',
    title: 'Tip 1 Diyabet Bilgilendirme Kitapçığı',
    description: 'Çocuk ve ergenlerde Tip 1 diyabet hakkında detaylı bilgilendirme.',
    category: 'bilgilendirme',
    publishedAt: '2024-10-15',
  },
  {
    _id: '3',
    title: 'Beslenme ve Diyabet',
    description: 'Diyabetli bireyler için beslenme önerileri ve örnek menüler.',
    category: 'rehber',
    publishedAt: '2024-09-20',
  },
  {
    _id: '4',
    title: 'Türkiye Diyabet Prevalans Araştırması',
    description: 'Türkiye genelinde diyabet prevalansı üzerine yapılan araştırma raporu.',
    category: 'arastirma',
    publishedAt: '2024-08-10',
  },
  {
    _id: '5',
    title: 'Diyabet ve Egzersiz',
    description: 'Fiziksel aktivite ve diyabet ilişkisi, egzersiz önerileri.',
    category: 'bilgilendirme',
    publishedAt: '2024-07-05',
  },
]

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

export default function PublicationsPage() {
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

      {/* Publications List */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto space-y-4">
          {samplePublications.map((pub) => (
            <Card key={pub._id} className="border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F4FD] rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-[#0066CC]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={categoryColors[pub.category]}>
                        {categoryLabels[pub.category]}
                      </Badge>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(pub.publishedAt).toLocaleDateString('tr-TR')}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{pub.description}</p>

                    <button className="text-[#0066CC] font-medium text-sm flex items-center gap-1 hover:underline">
                      <Download className="w-4 h-4" />
                      PDF İndir
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
