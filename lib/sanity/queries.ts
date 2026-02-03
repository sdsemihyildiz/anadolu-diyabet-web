import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`

export const allNewsQuery = groq`*[_type == "news"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  tags
}`

export const latestNewsQuery = groq`*[_type == "news"] | order(publishedAt desc) [0...4] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt
}`

export const newsBySlugQuery = groq`*[_type == "news" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  content,
  coverImage,
  publishedAt,
  tags
}`

export const allEventsQuery = groq`*[_type == "event"] | order(eventDate desc) {
  _id,
  title,
  slug,
  description,
  eventDate,
  endDate,
  location,
  coverImage,
  isPast,
  registrationLink
}`

export const upcomingEventsQuery = groq`*[_type == "event" && isPast != true] | order(eventDate asc) [0...3] {
  _id,
  title,
  slug,
  description,
  eventDate,
  location,
  coverImage
}`

export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  content,
  eventDate,
  endDate,
  location,
  coverImage,
  registrationLink
}`

export const allGalleriesQuery = groq`*[_type == "gallery"] | order(createdAt desc) {
  _id,
  title,
  slug,
  description,
  coverImage,
  "imageCount": count(images),
  createdAt
}`

export const galleryBySlugQuery = groq`*[_type == "gallery" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  coverImage,
  images,
  createdAt
}`

export const allPublicationsQuery = groq`*[_type == "publication"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  pdfFile,
  coverImage,
  publishedAt,
  category
}`

export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content,
  seoTitle,
  seoDescription
}`
