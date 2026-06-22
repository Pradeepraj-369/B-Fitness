import { AnimatedHeadline } from '@/components/animated-headline'
import { HeroLegendCarousel } from '@/components/hero-legend-carousel'
import { MAPS_PLACE_URL } from '@/lib/site'

export function Hero() {
  return (
    <header
      id="top"
      className="relative isolate min-h-screen overflow-hidden bg-black"
    >
      {/* Full-bleed carousel — black bg matches photo backgrounds */}
      <div className="absolute inset-0 z-0 bg-black">
        <HeroLegendCarousel />
      </div>

      {/* Text readability fade — left side only, stays pure black */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full max-w-2xl bg-gradient-to-r from-black via-black/85 to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-28 md:px-12 lg:px-20">
        <div className="max-w-xl">
          <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-ember">
            <span className="live-dot inline-block h-2 w-2 rounded-full bg-tactical" />
            Open now &mdash; Steel Plant Road, Salem
          </p>

          <AnimatedHeadline
            text="B FIT GYM"
            className="font-display font-black uppercase text-bone text-[clamp(3rem,7vw,6.5rem)]"
          />

          <p className="mt-6 max-w-xl font-display text-2xl font-bold uppercase leading-tight text-bone md:text-4xl">
            While the city sleeps, we lift.
          </p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A real training floor on Steel Plant Road. Iron, discipline, and a
            community that shows up before 5:30 AM &mdash; every single day.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:08754094880"
              className="inline-flex items-center justify-center bg-ember px-8 py-4 font-display text-xl font-bold uppercase tracking-wide text-primary-foreground transition-all duration-200 hover:bg-ember-bright hover:-translate-y-0.5"
            >
              Call to Join
            </a>
            <a
              href={MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-bone/40 px-8 py-4 font-display text-xl font-bold uppercase tracking-wide text-bone transition-all duration-200 hover:-translate-y-0.5 hover:border-ember hover:text-ember"
            >
              Directions
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 z-10 flex items-center gap-4 font-mono text-sm md:left-12 lg:left-20">
        <div>
          <div className="text-ember">4.6&#9733;</div>
          <div className="text-xs text-muted-foreground">RATING</div>
        </div>
        <div className="h-8 w-px bg-iron" />
        <div>
          <div className="text-bone">53</div>
          <div className="text-xs text-muted-foreground">MEMBERS</div>
        </div>
      </div>
    </header>
  )
}
