'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const LEGENDS = [
  { src: '/images/Arnold.png', alt: 'Arnold Schwarzenegger' },
  { src: '/images/Ronnie.png', alt: 'Ronnie Coleman' },
  { src: '/images/Mike.png', alt: 'Mike Mentzer' },
  { src: '/images/Jculter.png', alt: 'Jay Cutler' },
  { src: '/images/Cbam.png', alt: 'Chris Bumstead' },
] as const

const DISPLAY_MS = 4200
const FADE_MS = 900

export function HeroLegendCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % LEGENDS.length)
    }, DISPLAY_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div
      className="relative h-full min-h-screen w-full bg-black"
      aria-live="polite"
      aria-label="Legendary bodybuilders"
    >
      {LEGENDS.map((legend, index) => (
        <Image
          key={legend.src}
          src={legend.src}
          alt={legend.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={cn(
            'object-contain object-right transition-all ease-in-out scale-[1.65] md:scale-100 brightness-125',
            index === activeIndex ? 'opacity-100' : 'opacity-0',
            '-translate-x-1/4 md:translate-x-0'
          )}
          style={{ transitionDuration: `${FADE_MS}ms` }}
        />
      ))}
    </div>
  )
}
