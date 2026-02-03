export interface News {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  content?: any[]
  coverImage?: any
  publishedAt: string
  tags?: string[]
}

export interface Event {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  content?: any[]
  eventDate: string
  endDate?: string
  location?: string
  coverImage?: any
  registrationLink?: string
  isPast?: boolean
}

export interface Gallery {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  coverImage?: any
  images?: any[]
  createdAt: string
  imageCount?: number
}

export interface Publication {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  pdfFile?: { asset: { url: string } }
  coverImage?: any
  publishedAt: string
  category?: string
}

export interface Page {
  _id: string
  title: string
  slug: { current: string }
  content?: any[]
  seoTitle?: string
  seoDescription?: string
}

export interface SiteSettings {
  siteTitle?: string
  siteDescription?: string
  logo?: any
  contactEmail?: string
  contactPhone?: string
  address?: string
  socialLinks?: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
  }
}
