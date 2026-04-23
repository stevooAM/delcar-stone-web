'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { ProductSeries } from '@/lib/data/products'

interface ProductApplicationShowcaseProps {
  product: ProductSeries
}

export function ProductApplicationShowcase({ product }: ProductApplicationShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (product.projectImages.length < 2) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % product.projectImages.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [product.projectImages.length])

  return (
    <div className="grid h-full grid-cols-1 border-t border-stone-dark lg:grid-cols-2 lg:border-l lg:border-t-0">
      <div className="relative min-h-[280px] border-b border-stone-dark bg-[#fbf8f2] lg:min-h-full lg:border-b-0 lg:border-r">
        <Image
          src={product.definitionImage}
          alt={`${product.name} stone definition board`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 20vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent px-5 py-5">
          <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gold-bright">Stone Definition</p>
          <p className="font-display text-[24px] font-light leading-none text-white">{product.name}</p>
        </div>
      </div>

      <div className="relative min-h-[280px] overflow-hidden bg-white lg:min-h-full">
        {product.projectImages.map((slide, index) => (
          <div
            key={`${product.slug}-${slide.src}`}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" aria-hidden="true" />
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 px-5 py-5">
          <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gold-bright">Application Sample</p>
          <p className="font-display text-[24px] font-light leading-none text-white">{product.projectImages[activeIndex]?.label}</p>
        </div>

        {product.projectImages.length > 1 ? (
          <div className="absolute right-5 top-5 flex gap-2">
            {product.projectImages.map((slide, index) => (
              <button
                key={`${product.slug}-${slide.label}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full border transition-colors ${
                  index === activeIndex ? 'border-gold-bright bg-gold-bright' : 'border-white/70 bg-white/20'
                }`}
                aria-label={`Show ${product.name} in ${slide.label}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
