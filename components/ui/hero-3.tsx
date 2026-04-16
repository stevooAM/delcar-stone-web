"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  ctaHref?: string;
  images: string[];
  className?: string;
}

const ActionButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  const cls =
    "mt-8 px-8 py-3 rounded-sm bg-navy text-white font-medium tracking-[0.08em] text-sm uppercase shadow-md transition-colors hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-navy focus:ring-opacity-40";
  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={cls}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={cls}
    >
      {children}
    </motion.button>
  );
};

const OutlineButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  const cls =
    "mt-8 px-8 py-3 rounded-sm border border-gold text-gold font-medium tracking-[0.08em] text-sm uppercase transition-colors hover:bg-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-40";
  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={cls}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={cls}
    >
      {children}
    </motion.button>
  );
};

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  secondaryCtaText,
  secondaryCtaHref,
  ctaHref,
  images,
  className,
}) => {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full h-screen min-h-[700px] overflow-hidden bg-white flex flex-col items-center justify-center text-center px-4",
        className
      )}
      aria-label="Hero"
    >
      {/* Subtle dot-grid texture — adds depth without competing with content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(27,43,94,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Very subtle gold radial warmth at centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 42%, rgba(154,122,20,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade — blends marquee into white field */}
      <div
        className="absolute bottom-0 left-0 w-full h-[200px] pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="z-10 flex flex-col items-center">
        {/* Tagline pill */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-5 inline-flex items-center gap-3"
        >
          <div className="w-8 h-px bg-gold" aria-hidden="true" />
          <span className="text-[10px] font-medium tracking-[0.4em] uppercase text-gold">
            {tagline}
          </span>
          <div className="w-8 h-px bg-gold" aria-hidden="true" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="font-display font-light text-navy leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(44px, 6vw, 82px)" }}
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={FADE_IN_ANIMATION_VARIANTS}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.45 }}
          className="mt-6 max-w-md text-sm font-light text-navy/55 leading-[1.8]"
        >
          {description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <ActionButton href={ctaHref}>{ctaText}</ActionButton>
          {secondaryCtaText && (
            <OutlineButton href={secondaryCtaHref}>
              {secondaryCtaText}
            </OutlineButton>
          )}
        </motion.div>
      </div>

      {/* Animated image marquee */}
      <div className="absolute bottom-0 left-0 w-full h-[38%] [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)]">
        <motion.div
          className="flex gap-4 h-full"
          animate={{
            x: ["0%", "-50%"],
            transition: {
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-full flex-shrink-0"
              style={{
                transform: `rotate(${index % 2 === 0 ? -2 : 3}deg)`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Stone collection ${(index % images.length) + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-xl"
                style={{ boxShadow: "0 8px 32px rgba(27,43,94,0.18), inset 0 0 0 1px rgba(154,122,20,0.15)" }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-navy/35">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
};
