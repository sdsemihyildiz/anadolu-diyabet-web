import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Etkinlikler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Etkinlik Adı',
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
      title: 'Kısa Açıklama',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'content',
      title: 'Detaylı İçerik',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'eventDate',
      title: 'Etkinlik Tarihi',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Bitiş Tarihi (Opsiyonel)',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Konum',
      type: 'string',
      description: 'Örn: İstanbul, Kadıköy',
    }),
    defineField({
      name: 'coverImage',
      title: 'Kapak Fotoğrafı',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'registrationLink',
      title: 'Kayıt Linki (Opsiyonel)',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      date: 'eventDate',
    },
    prepare({ title, media, date }) {
      const dateStr = date ? new Date(date).toLocaleDateString('tr-TR') : ''
      const isPast = date ? new Date(date) < new Date() : false
      return {
        title,
        subtitle: `${dateStr} ${isPast ? '(Geçmiş)' : ''}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Etkinlik Tarihi, Yeni → Eski',
      name: 'eventDateDesc',
      by: [{ field: 'eventDate', direction: 'desc' }],
    },
  ],
})
