import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Trainer() {
  return (
    <section
      id="trainer"
      className="scroll-mt-20 border-t border-border bg-card px-6 py-20 md:px-12 md:py-28 lg:px-20"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/trainer.png"
              alt="Mr. Baskar, head trainer at B Fit Gym"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-steel/35 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-forge/80 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ember">
            Trainer Spotlight
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4rem)] font-black uppercase leading-none text-bone">
            Mr. Baskar
          </h2>
          <p className="mt-2 font-mono text-sm uppercase tracking-widest text-muted-foreground">
            Head Trainer
          </p>

          <div className="mt-8 space-y-4 text-lg leading-relaxed text-bone/90">
            <p>
              Members keep coming back for one reason: Baskar teaches with care.
              He watches your form, fixes it, and makes sure you train safe
              before you train heavy.
            </p>
            <p className="text-muted-foreground">
              He learns your regimen and stays committed to it. Whether you walk
              in to build strength, cut weight, or just move better, he takes a
              real interest in what you need — and the whole floor follows that
              lead.
            </p>
          </div>

          <a
            href="tel:08754094880"
            className="mt-8 inline-flex items-center justify-center bg-ember px-7 py-3.5 font-display text-lg font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-ember-bright"
          >
            Train with Baskar
          </a>
        </Reveal>
      </div>
    </section>
  )
}
