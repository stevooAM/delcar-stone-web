export interface ColourVariant {
  slug: string
  name: string
  family: 'warm' | 'cool' | 'neutral'
}

export interface ProductSeries {
  slug: string
  name: string
  tagline: string
  description: string
  application: ('exterior' | 'interior' | 'both')[]
  cornersAvailable: boolean
  seriesGroup: string
  specs: {
    sizeCm2: string
    thicknessCm: string
    m2PerBox: number
    weightPerM2Kg: number
  }
  colours: ColourVariant[]
  featured: boolean
}

export const products: ProductSeries[] = [
  {
    slug: 'volantis',
    name: 'Volantis',
    tagline: 'Regular horizontal blocks, strong presence',
    description: 'Composed of regular horizontal stone blocks, Volantis\' modular structure enables easy and fast installation. Balanced composition of varying lengths and depths gives a strong, confident wall presence.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Modular Series',
    specs: { sizeCm2: '75 – 600', thicknessCm: '3.5 – 5.5', m2PerBox: 0.70, weightPerM2Kg: 45 },
    colours: [
      { slug: 'antracita', name: 'Antracita', family: 'cool' },
      { slug: 'arena', name: 'Arena', family: 'warm' },
      { slug: 'bianco', name: 'Bianco', family: 'neutral' },
      { slug: 'ceniza', name: 'Ceniza', family: 'cool' },
      { slug: 'cognac', name: 'Cognac', family: 'warm' },
      { slug: 'gris', name: 'Gris', family: 'cool' },
      { slug: 'kodiaq', name: 'Kodiaq', family: 'neutral' },
      { slug: 'marron', name: 'Marron', family: 'warm' },
      { slug: 'mojave', name: 'Mojave', family: 'warm' },
      { slug: 'ruivo', name: 'Ruivo', family: 'warm' },
      { slug: 'tramonto', name: 'Tramonto', family: 'warm' },
    ],
    featured: true,
  },
  {
    slug: 'paterno',
    name: 'Paterno',
    tagline: 'Rough fractured surface, naturally weathered',
    description: 'Slightly rough and fractured surfaces reflecting the naturally weathered character of stone. Softened, non-sharp edge transitions create a natural, calm appearance. Brings a sense of craftsmanship.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Natural Stone Look',
    specs: { sizeCm2: '240 – 600', thicknessCm: '3 – 5', m2PerBox: 0.72, weightPerM2Kg: 40 },
    colours: [
      { slug: 'antracita', name: 'Antracita', family: 'cool' },
      { slug: 'arena', name: 'Arena', family: 'warm' },
      { slug: 'ivory', name: 'Ivory', family: 'neutral' },
      { slug: 'marron', name: 'Marron', family: 'warm' },
      { slug: 'mojave', name: 'Mojave', family: 'warm' },
      { slug: 'perola', name: 'Perola', family: 'neutral' },
      { slug: 'tramonto', name: 'Tramonto', family: 'warm' },
    ],
    featured: true,
  },
  {
    slug: 'gravenwood',
    name: 'Gravenwood',
    tagline: 'Wood-grain stone texture, rustic elegance',
    description: 'Combines brushed and grained texture of wood with solidity of stone, adding rustic elegance and natural sophistication. Designed with textural variations and imperfections for a weathered yet contemporary look.',
    application: ['exterior', 'interior'],
    cornersAvailable: false,
    seriesGroup: 'Gravenwood Series',
    specs: { sizeCm2: '480', thicknessCm: '2 – 3.5', m2PerBox: 0.72, weightPerM2Kg: 38 },
    colours: [
      { slug: 'gris', name: 'Gris', family: 'cool' },
      { slug: 'marron', name: 'Marron', family: 'warm' },
      { slug: 'perola', name: 'Perola', family: 'neutral' },
    ],
    featured: true,
  },
  {
    slug: 'mount-leuser',
    name: 'Mount Leuser',
    tagline: 'Rustic wood surface, warm and natural',
    description: 'Inspired by rustic wooden surfaces bearing the marks of time. Textured surface reflects traces left by passing years. Traditional wood aesthetics meet contemporary architecture.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Mount Leuser Series',
    specs: { sizeCm2: '200 – 500', thicknessCm: '2.5 – 3', m2PerBox: 1.20, weightPerM2Kg: 35 },
    colours: [
      { slug: 'arena', name: 'Arena', family: 'warm' },
      { slug: 'ceniza', name: 'Ceniza', family: 'cool' },
      { slug: 'marron', name: 'Marron', family: 'warm' },
    ],
    featured: false,
  },
  {
    slug: 'roldos',
    name: 'Roldos',
    tagline: 'Elegant form, modular veneer',
    description: 'Elegant form and modular structure. Easy-to-install veneer adding a simple yet stylish character to any space.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Modular Series',
    specs: { sizeCm2: '200 – 500', thicknessCm: '1.5 – 2.5', m2PerBox: 1.20, weightPerM2Kg: 30 },
    colours: [
      { slug: 'antracita', name: 'Antracita', family: 'cool' },
      { slug: 'arena', name: 'Arena', family: 'warm' },
      { slug: 'bianco', name: 'Bianco', family: 'neutral' },
      { slug: 'ceniza', name: 'Ceniza', family: 'cool' },
      { slug: 'cognac', name: 'Cognac', family: 'warm' },
      { slug: 'gris', name: 'Gris', family: 'cool' },
      { slug: 'ivory', name: 'Ivory', family: 'neutral' },
      { slug: 'kodiaq', name: 'Kodiaq', family: 'neutral' },
      { slug: 'marron', name: 'Marron', family: 'warm' },
      { slug: 'mojave', name: 'Mojave', family: 'warm' },
      { slug: 'perola', name: 'Perola', family: 'neutral' },
    ],
    featured: false,
  },
  {
    slug: 'herrera',
    name: 'Herrera',
    tagline: 'Linear layered stone, modern and balanced',
    description: 'Linear manufactured stone inspired by layered structure of natural stone. Rhythmic arrangement of thin, elongated slabs. Modern and balanced surface with soft color transitions.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Irregular Series',
    specs: { sizeCm2: '50 – 500', thicknessCm: '2 – 3.5', m2PerBox: 1.0, weightPerM2Kg: 40 },
    colours: [
      { slug: 'antracita', name: 'Antracita', family: 'cool' },
      { slug: 'arena', name: 'Arena', family: 'warm' },
      { slug: 'beige', name: 'Beige', family: 'neutral' },
      { slug: 'ceniza', name: 'Ceniza', family: 'cool' },
      { slug: 'marron', name: 'Marron', family: 'warm' },
      { slug: 'moss', name: 'Moss', family: 'cool' },
      { slug: 'perola', name: 'Perola', family: 'neutral' },
    ],
    featured: false,
  },
  {
    slug: 'lumumba',
    name: 'Lumumba',
    tagline: 'Organic irregular forms, strong depth',
    description: 'Irregular-shaped cultured stone veneer. Inspired by texture of natural split stone. Organic surface composed of stones in varying sizes adds strong depth and natural architectural character.',
    application: ['exterior', 'both'],
    cornersAvailable: true,
    seriesGroup: 'Irregular Series',
    specs: { sizeCm2: '35 – 350', thicknessCm: '3 – 5', m2PerBox: 0.8, weightPerM2Kg: 44 },
    colours: [
      { slug: 'antracita', name: 'Antracita', family: 'cool' },
      { slug: 'arena', name: 'Arena', family: 'warm' },
      { slug: 'ceniza', name: 'Ceniza', family: 'cool' },
      { slug: 'cognac', name: 'Cognac', family: 'warm' },
      { slug: 'fresco', name: 'Fresco', family: 'neutral' },
      { slug: 'ivory', name: 'Ivory', family: 'neutral' },
      { slug: 'marron', name: 'Marron', family: 'warm' },
      { slug: 'mojave', name: 'Mojave', family: 'warm' },
      { slug: 'moss', name: 'Moss', family: 'cool' },
      { slug: 'perola', name: 'Perola', family: 'neutral' },
    ],
    featured: false,
  },
  {
    slug: 'travertino',
    name: 'Travertino',
    tagline: 'Travertine & limestone inspired, large format',
    description: 'Inspired by natural formation of travertine and limestone. Large-format and calm stone composition. Brings together quiet elegance of traditional stone architecture with clean language of contemporary design.',
    application: ['exterior', 'interior'],
    cornersAvailable: false,
    seriesGroup: 'Travertino Series',
    specs: { sizeCm2: '1500', thicknessCm: '2 – 2.5', m2PerBox: 1.5, weightPerM2Kg: 30 },
    colours: [
      { slug: 'beige', name: 'Beige', family: 'warm' },
      { slug: 'mojave', name: 'Mojave', family: 'warm' },
    ],
    featured: false,
  },
  {
    slug: 'the-glade',
    name: 'The Glade',
    tagline: 'Slim brick form, soft atmospheric depth',
    description: 'Horizontal rhythm from slim brick form and natural texture. Adds calm sense of strength to the wall, creating a soft and deep atmosphere when it meets light.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Brick Series',
    specs: { sizeCm2: '77 – 120', thicknessCm: '1.5 – 1.8', m2PerBox: 1.20, weightPerM2Kg: 23 },
    colours: [
      { slug: 'brunetta', name: 'Brunetta', family: 'warm' },
      { slug: 'caramello', name: 'Caramello', family: 'warm' },
      { slug: 'classico', name: 'Classico', family: 'neutral' },
      { slug: 'rusty', name: 'Rusty', family: 'warm' },
      { slug: 'mix', name: 'Mix', family: 'neutral' },
    ],
    featured: false,
  },
  {
    slug: 'java',
    name: 'Java',
    tagline: 'Contemporary brick, timeless and distinctive',
    description: 'Contemporary interpretation of traditional brick form. Rough surface and horizontal weave pattern give walls a timeless and distinctive look.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Brick Series',
    specs: { sizeCm2: '60 – 120', thicknessCm: '1.5 – 1.8', m2PerBox: 1.00, weightPerM2Kg: 20 },
    colours: [
      { slug: 'antico', name: 'Antico', family: 'warm' },
      { slug: 'bianco', name: 'Bianco', family: 'neutral' },
      { slug: 'classico', name: 'Classico', family: 'neutral' },
      { slug: 'cotto', name: 'Cotto', family: 'warm' },
      { slug: 'rusty', name: 'Rusty', family: 'warm' },
    ],
    featured: false,
  },
]

export const featuredProducts = products.filter(p => p.featured)
export const seriesGroups = [...new Set(products.map(p => p.seriesGroup))]
