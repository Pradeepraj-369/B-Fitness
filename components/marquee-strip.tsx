const ITEMS = [
  'While the city sleeps, we lift',
  'Open 5:30 AM',
  'Safety first',
  'Every body counts',
  'Steel Plant Road, Salem',
  '4.6★ from 53 members',
]

export function MarqueeStrip() {
  // Duplicate the list so the -50% translate loops seamlessly
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-group overflow-hidden border-y border-border bg-ember py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-display text-lg font-bold uppercase tracking-wide text-primary-foreground"
          >
            {item}
            <span
              aria-hidden="true"
              className="mx-6 inline-block h-2 w-2 rotate-45 bg-forge"
            />
          </span>
        ))}
      </div>
    </div>
  )
}
