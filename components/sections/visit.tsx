import { Reveal } from '@/components/reveal'
import { MAPS_EMBED_URL, MAPS_PLACE_URL } from '@/lib/site'

const hours = [
  { day: 'Monday', time: '5:30 AM – 9:00 PM' },
  { day: 'Tuesday', time: '5:30 AM – 9:00 PM' },
  { day: 'Wednesday', time: '5:30 AM – 9:00 PM' },
  { day: 'Thursday', time: '5:30 AM – 9:00 PM' },
  { day: 'Friday', time: '5:30 AM – 9:00 PM' },
  { day: 'Saturday', time: '5:30 AM – 9:00 PM' },
  { day: 'Sunday', time: '5:30 AM – 9:00 PM' },
]

export function Visit() {
  return (
    <section
      id="visit"
      className="scroll-mt-20 border-t border-border bg-card px-6 py-20 md:px-12 md:py-28 lg:px-20"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ember">
          Find Us
        </p>
        <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-black uppercase leading-tight text-bone">
          Walk in. Try a session.
        </h2>
        <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
          No sign-up forms, no pressure. Come see the floor, talk to Baskar, and
          lift. We&apos;re on Steel Plant Road in Mohan Nagar.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-8">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Address
            </h3>
            <a
              href={MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-lg leading-relaxed text-bone transition-colors hover:text-ember"
            >
              Steel Plant Rd, Mohan Nagar, Maramangalathupatti,
              <br />
              Salem, Tamil Nadu 636030
            </a>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Phone
            </h3>
            <a
              href="tel:08754094880"
              className="mt-2 inline-block font-mono text-2xl text-ember transition-colors hover:text-ember-bright"
            >
              087540 94880
            </a>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Hours
            </h3>
            <ul className="mt-2 max-w-sm divide-y divide-border">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between py-2"
                >
                  <span className="text-bone">{h.day}</span>
                  <span className="font-mono text-sm text-muted-foreground">
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-iron">
              Hours shown as a guide &mdash; confirm by phone before your first
              visit.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-bone/40 px-8 py-4 font-display text-xl font-bold uppercase tracking-wide text-bone transition-colors hover:border-ember hover:text-ember"
            >
              Get Directions
            </a>
            <a
              href="tel:08754094880"
              className="inline-flex items-center justify-center bg-ember px-8 py-4 font-display text-xl font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-ember-bright"
            >
              Call to Join
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={100} className="min-h-[320px]">
          <a
            href={MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full w-full overflow-hidden border border-border"
          >
            {/* Invisible overlay to make the entire area clickable */}
            <div className="absolute inset-0 z-10" />
            <iframe
              title="Map to B Fit Gym, Steel Plant Road, Salem"
              src={MAPS_EMBED_URL}
              className="h-full min-h-[320px] w-full grayscale-[0.3] transition-all duration-300 group-hover:grayscale-[0.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              tabIndex={-1}
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
