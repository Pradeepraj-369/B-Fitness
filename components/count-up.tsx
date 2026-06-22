'use client'

import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  end: number
  decimals?: number
  suffix?: string
  prefix?: string
  durationMs?: number
  className?: string
}

export function CountUp({
  end,
  decimals = 0,
  suffix = '',
  prefix = '',
  durationMs = 1200,
  className,
}: CountUpProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReduced) {
      setValue(end)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / durationMs, 1)
              const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
              setValue(end * eased)
              if (progress < 1) requestAnimationFrame(tick)
              else setValue(end)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, durationMs])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
