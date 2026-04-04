import { groq } from 'next-sanity'

export const allProductsQuery = groq`
  *[_type == "productSeries"] | order(name asc) {
    _id,
    "slug": slug.current,
    name,
    tagline,
    description,
    seriesGroup,
    application,
    cornersAvailable,
    featured,
    "heroImageUrl": heroImage.asset->url,
    specs,
    colours[] {
      "slug": slug.current,
      name,
      family,
      "swatchImageUrl": swatchImage.asset->url,
    }
  }
`

export const featuredProductsQuery = groq`
  *[_type == "productSeries" && featured == true] | order(name asc) {
    _id,
    "slug": slug.current,
    name,
    tagline,
    seriesGroup,
    cornersAvailable,
    "heroImageUrl": heroImage.asset->url,
    colours[] {
      "slug": slug.current,
      name,
      family,
    }
  }
`
