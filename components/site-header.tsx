'use client'

import { useEffect, useState } from 'react'

const NAV = [
  { label: 'Why B Fit', href: '#why' },
  { label: 'Trainer', href: '#trainer' },
  { label: 'Voices', href: '#voices' },
  { label: 'Visit', href: '#visit' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      setScrolled(top > 24)
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (top / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-forge/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-2xl font-black uppercase tracking-tight text-bone"
        >
          <span className="flex h-8 w-8 items-center justify-center bg-ember text-primary-foreground transition-transform duration-300 group-hover:rotate-[-6deg]">
            B
          </span>
          <span>Fit Gym</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-bone"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="tel:08754094880"
            className="bg-ember px-5 py-2.5 font-display text-base font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-ember-bright"
          >
            Call to Join
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-bone transition-transform duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-bone transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-bone transition-transform duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Scroll progress bar */}
      <div className="h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-ember transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="animate-menu-in border-b border-border bg-forge px-6 pb-6 md:hidden">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-display text-xl font-bold uppercase tracking-wide text-bone"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:08754094880"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center bg-ember px-6 py-4 font-display text-xl font-bold uppercase tracking-wide text-primary-foreground"
          >
            Call to Join
          </a>
        </nav>
      )}
    </header>
  )
}
