import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { productSeries } from './sanity/schemas/productSeries'
import { colourVariant } from './sanity/schemas/colourVariant'

export default defineConfig({
  name: 'delcar-stone',
  title: 'Delcar Stone',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [productSeries, colourVariant],
  },
})
