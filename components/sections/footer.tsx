import { MAPS_PLACE_URL } from '@/lib/site'

const NAV = [
  { label: 'Why B Fit', href: '#why' },
  { label: 'Trainer', href: '#trainer' },
  { label: 'Voices', href: '#voices' },
  { label: 'Visit', href: '#visit' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card px-6 py-16 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-3xl font-black uppercase tracking-tight text-bone"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-ember text-primary-foreground">
              B
            </span>
            Fit Gym
          </a>
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            A real training floor serving Steel Plant Road, Mohan Nagar, and the
            Salem community. Iron, discipline, and people who show up.
          </p>
          <p className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-iron">
            <span className="live-dot inline-block h-2 w-2 rounded-full bg-tactical" />
            While the city sleeps, we lift.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-ember">
            Explore
          </h3>
          <ul className="mt-4 space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-lg font-bold uppercase tracking-wide text-bone transition-colors hover:text-ember"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4 font-mono text-sm text-muted-foreground">
          <h3 className="text-xs uppercase tracking-[0.25em] text-ember">
            Visit &amp; Contact
          </h3>
          <a
            href={MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="leading-relaxed transition-colors hover:text-ember"
          >
            Steel Plant Rd, Mohan Nagar,
            <br />
            Salem, Tamil Nadu 636030
          </a>
          <p>
            <a
              href="tel:08754094880"
              className="text-xl text-ember transition-colors hover:text-ember-bright"
            >
              087540 94880
            </a>
          </p>
          <p>Open daily 5:30 AM &ndash; 9:00 PM</p>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 font-mono text-xs uppercase tracking-widest text-iron sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {year} B Fit Gym &middot; Salem</span>
        <span>Built for the early risers of Steel Plant Road</span>
      </div>
    </footer>
  )
}
