import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Başlığı',
      type: 'string',
      initialValue: 'Anadolu Diyabet Derneği',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Açıklaması',
      type: 'text',
      rows: 2,
      description: 'SEO için kısa açıklama',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactEmail',
      title: 'İletişim E-posta',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'İletişim Telefon',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adres',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Sosyal Medya Linkleri',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
        { name: 'youtube', title: 'YouTube', type: 'url' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
    },
  },
})
