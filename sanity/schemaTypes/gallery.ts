import { defineField, defineType } from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Galeri',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Albüm Adı',
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
      rows: 2,
    }),
    defineField({
      name: 'coverImage',
      title: 'Kapak Fotoğrafı',
      type: 'image',
      options: { hotspot: true },
      description: 'Albüm listesinde gösterilecek fotoğraf',
    }),
    defineField({
      name: 'images',
      title: 'Fotoğraflar',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Açıklama',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'createdAt',
      title: 'Oluşturulma Tarihi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      count: 'images',
    },
    prepare({ title, media, count }) {
      const imageCount = count ? count.length : 0
      return {
        title,
        subtitle: `${imageCount} fotoğraf`,
        media,
      }
    },
  },
})
