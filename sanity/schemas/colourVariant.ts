import { defineType, defineField } from 'sanity'

export const colourVariant = defineType({
  name: 'colourVariant',
  title: 'Colour Variant',
  type: 'object',
  fields: [
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({
      name: 'family',
      title: 'Colour Family',
      type: 'string',
      options: { list: ['warm', 'cool', 'neutral'] },
    }),
    defineField({ name: 'swatchImage', title: 'Swatch Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
})
