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
  brochureImage: string
  specs: {
    sizeCm2: string
    thicknessCm: string
    m2PerBox: number
    weightPerM2Kg: number
  }
  colours: ColourVariant[]
  featured: boolean
}

const warm = (slug: string, name: string): ColourVariant => ({ slug, name, family: 'warm' })
const cool = (slug: string, name: string): ColourVariant => ({ slug, name, family: 'cool' })
const neutral = (slug: string, name: string): ColourVariant => ({ slug, name, family: 'neutral' })

export const products: ProductSeries[] = [
  {
    slug: 'volantis',
    name: 'Volantis',
    tagline: 'Regular horizontal blocks with bold architectural rhythm',
    description:
      "Composed of regular horizontal stone blocks, Volantis offers an easy and fast installation solution thanks to its modular structure. The balanced composition created by stones of varying lengths and depths gives the wall a strong and confident presence.",
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Modular Series',
    brochureImage: '/images/pangolin-stones/8.png',
    specs: { sizeCm2: '75 – 600', thicknessCm: '3.5 – 5.5', m2PerBox: 0.7, weightPerM2Kg: 45 },
    colours: [
      cool('antracita', 'Antracita'),
      warm('arena', 'Arena'),
      neutral('bianco', 'Bianco'),
      cool('ceniza', 'Ceniza'),
      warm('cognac', 'Cognac'),
      cool('gris', 'Gris'),
      neutral('kodiaq', 'Kodiaq'),
      warm('marron', 'Marron'),
      warm('mojave', 'Mojave'),
      warm('ruivo', 'Ruivo'),
      warm('tramonto', 'Tramonto'),
    ],
    featured: true,
  },
  {
    slug: 'gravenwood',
    name: 'Gravenwood',
    tagline: 'Wood-grain texture interpreted through stone',
    description:
      'Gravenwood combines the brushed and grained texture of wood with the solidity of stone, adding rustic elegance and shimmering natural sophistication to spaces. This product is designed with textural variations and imperfections for a weathered yet contemporary look.',
    application: ['interior', 'both'],
    cornersAvailable: false,
    seriesGroup: 'Signature Series',
    brochureImage: '/images/pangolin-stones/2.png',
    specs: { sizeCm2: '480', thicknessCm: '2 – 3.5', m2PerBox: 0.72, weightPerM2Kg: 38 },
    colours: [cool('gris', 'Gris'), warm('marron', 'Marron'), neutral('perola', 'Perola')],
    featured: true,
  },
  {
    slug: 'roldos',
    name: 'Roldos',
    tagline: 'Slim modular veneer with a refined presence',
    description:
      'With its elegant form and modular structure, Roldos is an easy-to-install veneer solution that adds a simple yet stylish character to the space.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Modular Series',
    brochureImage: '/images/pangolin-stones/12.png',
    specs: { sizeCm2: '200 – 500', thicknessCm: '1.5 – 2.5', m2PerBox: 1.2, weightPerM2Kg: 30 },
    colours: [
      cool('antracita', 'Antracita'),
      warm('arena', 'Arena'),
      neutral('bianco', 'Bianco'),
      cool('ceniza', 'Ceniza'),
      warm('cognac', 'Cognac'),
      cool('gris', 'Gris'),
      neutral('ivory', 'Ivory'),
      neutral('kodiaq', 'Kodiaq'),
      warm('marron', 'Marron'),
      warm('mojave', 'Mojave'),
      neutral('perola', 'Perola'),
    ],
    featured: false,
  },
  {
    slug: 'persia',
    name: 'Persia',
    tagline: 'Old-world masonry with a groutless, elegant look',
    description:
      'Persia reflects the splendor and elegance of old-world stonework. It creates a groutless, elegant look for both interior and exterior spaces.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Heritage Stone Series',
    brochureImage: '/images/pangolin-stones/18.png',
    specs: { sizeCm2: '100 – 900', thicknessCm: '1.5 – 2.5', m2PerBox: 1.25, weightPerM2Kg: 30 },
    colours: [
      cool('antracita', 'Antracita'),
      warm('arena', 'Arena'),
      cool('ceniza', 'Ceniza'),
      warm('cognac', 'Cognac'),
      warm('marron', 'Marron'),
      warm('mojave', 'Mojave'),
      cool('moss', 'Moss'),
    ],
    featured: false,
  },
  {
    slug: 'travertino',
    name: 'Travertino',
    tagline: 'Large-format limestone calm for contemporary walls',
    description:
      'Inspired by the natural formation of travertine and limestone, it offers a large-format and calm stone composition. Bringing together the quiet elegance of traditional stone architecture with the clean language of contemporary design, this veneer provides a natural, refined, and long-lasting surface solution.',
    application: ['exterior', 'interior'],
    cornersAvailable: false,
    seriesGroup: 'Linear & Slab Series',
    brochureImage: '/images/pangolin-stones/22.png',
    specs: { sizeCm2: '1500', thicknessCm: '2 – 2.5', m2PerBox: 1.5, weightPerM2Kg: 30 },
    colours: [warm('beige', 'Beige'), warm('mojave', 'Mojave')],
    featured: true,
  },
  {
    slug: 'baja-california',
    name: 'Baja California',
    tagline: 'Simple lines with strong architectural texture',
    description:
      'With its regular and simple lines, Baja California brings elegance and sophistication to your spaces, highlighting the quality of the design with a strong architectural texture.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Linear & Slab Series',
    brochureImage: '/images/pangolin-stones/20.png',
    specs: { sizeCm2: '450', thicknessCm: '2 – 3.5', m2PerBox: 0.94, weightPerM2Kg: 38 },
    colours: [
      warm('caliente', 'Caliente'),
      cool('frio', 'Frio'),
      neutral('ivory', 'Ivory'),
      cool('gris', 'Gris'),
    ],
    featured: false,
  },
  {
    slug: 'ilion',
    name: 'Ilion',
    tagline: 'Natural cut-stone character with strong texture',
    description:
      'Inspired by natural cut stone walls, this cultured stone adds character to a space with its strong surface effect created by block forms of varying sizes. Thanks to its rough texture and natural color transitions, it offers a timeless, robust, and warm architectural expression.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Heritage Stone Series',
    brochureImage: '/images/pangolin-stones/28.png',
    specs: { sizeCm2: '110 – 390', thicknessCm: '2 – 3', m2PerBox: 1.2, weightPerM2Kg: 30 },
    colours: [
      warm('arena', 'Arena'),
      warm('cognac', 'Cognac'),
      cool('moss', 'Moss'),
      neutral('perola', 'Perola'),
    ],
    featured: false,
  },
  {
    slug: 'lumumba',
    name: 'Lumumba',
    tagline: 'Irregular split-stone energy with deep relief',
    description:
      'It is an irregular-shaped cultured stone veneer. Inspired by the texture of natural split stone, its form creates an organic surface composed of stones in varying sizes. Its rough, weathered stone texture adds strong depth and a natural architectural character to the wall.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Irregular Series',
    brochureImage: '/images/pangolin-stones/34.png',
    specs: { sizeCm2: '35 – 350', thicknessCm: '3 – 5', m2PerBox: 0.8, weightPerM2Kg: 44 },
    colours: [
      cool('antracita', 'Antracita'),
      warm('arena', 'Arena'),
      cool('ceniza', 'Ceniza'),
      warm('cognac', 'Cognac'),
      neutral('fresco', 'Fresco'),
      neutral('ivory', 'Ivory'),
      warm('marron', 'Marron'),
      warm('mojave', 'Mojave'),
      cool('moss', 'Moss'),
      neutral('perola', 'Perola'),
    ],
    featured: false,
  },
  {
    slug: 'atacama',
    name: 'Atacama',
    tagline: 'Luxurious natural depth with tailored irregularity',
    description:
      'Atacama brings the unique texture of natural stone into modern spaces, adding depth and a rich sense of character. Each carefully designed piece creates an atmosphere of luxury, refinement, and personalized elegance.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Irregular Series',
    brochureImage: '/images/pangolin-stones/38.png',
    specs: { sizeCm2: '40 – 400', thicknessCm: '2 – 5', m2PerBox: 1.0, weightPerM2Kg: 40 },
    colours: [
      cool('antracita', 'Antracita'),
      warm('arena', 'Arena'),
      cool('ceniza', 'Ceniza'),
      warm('cognac', 'Cognac'),
      neutral('fresco', 'Fresco'),
      warm('marron', 'Marron'),
      cool('moss', 'Moss'),
      neutral('perola', 'Perola'),
    ],
    featured: false,
  },
  {
    slug: 'ota-benga',
    name: 'Ota Benga',
    tagline: 'A powerful focal stone with timeless structural weight',
    description:
      'Reflecting all the irregularity and strength of stones found in nature, it creates a powerful focal point while preserving its aesthetic and structural quality for many years. If you want to experience the power of nature with architectural weight and a timeless character, Ota Benga is the right choice for you.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Irregular Series',
    brochureImage: '/images/pangolin-stones/30.png',
    specs: { sizeCm2: '20 – 400', thicknessCm: '2 – 4', m2PerBox: 1.0, weightPerM2Kg: 35 },
    colours: [
      cool('antracita', 'Antracita'),
      warm('arena', 'Arena'),
      cool('ceniza', 'Ceniza'),
      warm('coffee', 'Coffee'),
      neutral('fresco', 'Fresco'),
      warm('marron', 'Marron'),
      warm('mojave', 'Mojave'),
      cool('moss', 'Moss'),
      neutral('perola', 'Perola'),
    ],
    featured: false,
  },
  {
    slug: 'la-rinconada',
    name: 'La Rinconada',
    tagline: 'Weathered canyon-stone texture with lived-in depth',
    description:
      'It is designed inspired by the weathered stone surfaces in canyons. Its texture, which gives a weathered stone effect, adds a natural sense of history and architectural depth to your spaces.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Irregular Series',
    brochureImage: '/images/pangolin-stones/42.png',
    specs: { sizeCm2: '40 – 450', thicknessCm: '2 – 5.5', m2PerBox: 0.8, weightPerM2Kg: 44 },
    colours: [
      warm('arena', 'Arena'),
      cool('ceniza', 'Ceniza'),
      warm('coffee', 'Coffee'),
      warm('marron', 'Marron'),
      cool('moss', 'Moss'),
      neutral('perola', 'Perola'),
    ],
    featured: false,
  },
  {
    slug: 'invicta',
    name: 'Invicta',
    tagline: 'Classic cut-stone blocks for timeless facades',
    description:
      'Inspired by classic cut stone architecture, Invicta offers a timeless facade feature with its regular block forms and natural surface texture. Thanks to the handcrafted feel of the texture, it creates a strong, lasting architectural impact in both interior and exterior spaces.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Heritage Stone Series',
    brochureImage: '/images/pangolin-stones/48.png',
    specs: { sizeCm2: '110 – 350', thicknessCm: '1.5 – 3', m2PerBox: 1.2, weightPerM2Kg: 30 },
    colours: [
      warm('arena', 'Arena'),
      cool('ceniza', 'Ceniza'),
      warm('coffee', 'Coffee'),
      neutral('fresco', 'Fresco'),
      warm('marron', 'Marron'),
      cool('moss', 'Moss'),
      neutral('perola', 'Perola'),
    ],
    featured: false,
  },
  {
    slug: 'monte-pellegrino',
    name: 'Monte Pellegrino',
    tagline: 'Layered asymmetrical blend with natural rhythm',
    description:
      'This blend, created by bringing together popular asymmetrical stones, forms a natural rhythm and layered depth on the surface through the balanced combination of stones in varying sizes and textures. It offers a characterful veneer solution for interior and exterior applications.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Irregular Series',
    brochureImage: '/images/pangolin-stones/50.png',
    specs: { sizeCm2: '20 – 400', thicknessCm: '2 – 5', m2PerBox: 0.8, weightPerM2Kg: 38 },
    colours: [
      warm('calidum', 'Calidum'),
      neutral('colorado', 'Colorado'),
      neutral('fresco', 'Fresco'),
    ],
    featured: false,
  },
  {
    slug: 'the-glade',
    name: 'The Glade',
    tagline: 'Long, slim brick rhythm with soft atmospheric depth',
    description:
      'With the horizontal rhythm created by its slim brick form and natural texture, it adds a calm sense of strength to the wall, creating a soft and deep atmosphere when it meets light. The Glade is not just a veneer, but an architectural expression that defines the spirit of the space.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Brick Series',
    brochureImage: '/images/pangolin-stones/54.png',
    specs: { sizeCm2: '77 – 120', thicknessCm: '1.5 – 1.8', m2PerBox: 1.2, weightPerM2Kg: 23 },
    colours: [
      warm('brunetta', 'Brunetta'),
      warm('caramello', 'Caramello'),
      warm('castagna', 'Castagna'),
      neutral('classico', 'Classico'),
      warm('giallo', 'Giallo'),
      warm('mais-elevado', 'Mais Elevado'),
      warm('meadow', 'Meadow'),
      neutral('mix', 'Mix'),
      warm('rusty', 'Rusty'),
      neutral('scuro', 'Scuro'),
      neutral('uccello', 'Uccello'),
      warm('versato', 'Versato'),
    ],
    featured: true,
  },
  {
    slug: 'java',
    name: 'Java',
    tagline: 'Traditional brick reimagined for contemporary walls',
    description:
      'A contemporary interpretation of the traditional brick form, this decorative veneer gives walls a timeless and distinctive look with its rough surface and horizontal weave pattern.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Brick Series',
    brochureImage: '/images/pangolin-stones/58.png',
    specs: { sizeCm2: '60 – 120', thicknessCm: '1.5 – 1.8', m2PerBox: 1.0, weightPerM2Kg: 20 },
    colours: [
      warm('antico', 'Antico'),
      neutral('bianco', 'Bianco'),
      neutral('blend', 'Blend'),
      warm('caramello', 'Caramello'),
      neutral('classico', 'Classico'),
      warm('cotto', 'Cotto'),
      warm('laranja', 'Laranja'),
      warm('mais-elevado', 'Mais Elevado'),
      warm('rosso-antico', 'Rosso Antico'),
      warm('rusty', 'Rusty'),
      neutral('panna', 'Panna'),
      neutral('scuro', 'Scuro'),
    ],
    featured: false,
  },
  {
    slug: 'carnivore',
    name: 'Carnivore',
    tagline: 'Modern long-format brick with balanced elegance',
    description:
      'It is a modern brick veneer that emphasizes horizontal lines on the facade with its long and slender form. Thanks to its smooth edges and simple texture, it gives the architecture an elegant and balanced expression.',
    application: ['exterior', 'interior'],
    cornersAvailable: true,
    seriesGroup: 'Brick Series',
    brochureImage: '/images/pangolin-stones/62.png',
    specs: { sizeCm2: '56 – 112', thicknessCm: '1.5 – 1.8', m2PerBox: 1.0, weightPerM2Kg: 18 },
    colours: [
      neutral('bianco', 'Bianco'),
      warm('brunetta', 'Brunetta'),
      warm('castagna', 'Castagna'),
      neutral('classico', 'Classico'),
      warm('coffee', 'Coffee'),
      warm('cotto', 'Cotto'),
      neutral('panna', 'Panna'),
      neutral('sabbia', 'Sabbia'),
    ],
    featured: false,
  },
  {
    slug: 'damascus',
    name: 'Damascus',
    tagline: 'Handcrafted antique-brick character with warmth',
    description:
      'Compatible with industrial, rustic, and modern architectural styles, Damascus is designed with inspiration from antique brick textures. Each piece provides a handcrafted aesthetic through its rough surface that evokes natural aging and its softly contoured edges.',
    application: ['interior', 'both'],
    cornersAvailable: false,
    seriesGroup: 'Brick Series',
    brochureImage: '/images/pangolin-stones/66.png',
    specs: { sizeCm2: '114', thicknessCm: '1.5 – 1.8', m2PerBox: 1.15, weightPerM2Kg: 22 },
    colours: [
      warm('beige', 'Beige'),
      warm('castagna', 'Castagna'),
      neutral('classico', 'Classico'),
      warm('coffee', 'Coffee'),
      warm('laranja', 'Laranja'),
      neutral('oldrose', 'Oldrose'),
    ],
    featured: false,
  },
  {
    slug: 'slate',
    name: 'Slate',
    tagline: 'Slim horizontal layout that widens a room visually',
    description:
      'Offering a modern appearance, Slate brick veneer is an ideal choice to add elegance to your spaces. Its slim, elongated form and horizontal layout create a fluid rhythm along the wall, making the space feel wider and more balanced.',
    application: ['interior', 'both'],
    cornersAvailable: false,
    seriesGroup: 'Linear & Slab Series',
    brochureImage: '/images/pangolin-stones/70.png',
    specs: { sizeCm2: '152', thicknessCm: '3.5 – 4', m2PerBox: 0.64, weightPerM2Kg: 32 },
    colours: [neutral('bianco', 'Bianco'), neutral('warm-ash', 'Warm Ash'), neutral('ivory', 'Ivory')],
    featured: false,
  },
]

export const featuredProducts = products.filter((product) => product.featured)
export const seriesGroups = [...new Set(products.map((product) => product.seriesGroup))]
