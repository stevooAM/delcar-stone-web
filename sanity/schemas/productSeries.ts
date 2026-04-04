import { defineType, defineField } from 'sanity'

export const productSeries = defineType({
  name: 'productSeries',
  title: 'Product Series',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'seriesGroup', title: 'Series Group', type: 'string' }),
    defineField({
      name: 'application',
      title: 'Application',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: ['exterior', 'interior', 'both'] },
    }),
    defineField({ name: 'cornersAvailable', title: 'Corner Modules Available', type: 'boolean' }),
    defineField({ name: 'featured', title: 'Featured on Homepage', type: 'boolean' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'specs',
      title: 'Technical Specifications',
      type: 'object',
      fields: [
        { name: 'sizeCm2', title: 'Size Range (cm²)', type: 'string' },
        { name: 'thicknessCm', title: 'Thickness (cm)', type: 'string' },
        { name: 'm2PerBox', title: 'M² per Box', type: 'number' },
        { name: 'weightPerM2Kg', title: 'Weight per M² (kg)', type: 'number' },
      ],
    }),
    defineField({
      name: 'colours',
      title: 'Colour Variants',
      type: 'array',
      of: [{ type: 'colourVariant' }],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'seriesGroup', media: 'heroImage' },
  },
})
