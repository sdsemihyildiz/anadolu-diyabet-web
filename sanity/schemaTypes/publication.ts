import { defineField, defineType } from 'sanity'

export const publication = defineType({
  name: 'publication',
  title: 'Yayınlar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF Dosyası',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Kapak Görseli',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Bilgilendirme', value: 'bilgilendirme' },
          { title: 'Araştırma', value: 'arastirma' },
          { title: 'Rehber', value: 'rehber' },
          { title: 'Diğer', value: 'diger' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      category: 'category',
      date: 'publishedAt',
    },
    prepare({ title, media, category, date }) {
      const categoryLabels: Record<string, string> = {
        bilgilendirme: 'Bilgilendirme',
        arastirma: 'Araştırma',
        rehber: 'Rehber',
        diger: 'Diğer',
      }
      const dateStr = date ? new Date(date).toLocaleDateString('tr-TR') : ''
      return {
        title,
        subtitle: `${categoryLabels[category] || 'Yayın'} - ${dateStr}`,
        media,
      }
    },
  },
})
