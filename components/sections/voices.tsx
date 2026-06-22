import { CountUp } from '@/components/count-up'
import { Reveal } from '@/components/reveal'

const quotes = [
  {
    body: 'Best gym in the Steel Plant area. The trainers actually know their stuff and care whether you turn up. People here help each other — it never feels like a crowd.',
    name: 'Karthik',
  },
  {
    body: 'I come in before work at 5:30 and the energy is already up. Affordable, all the equipment you need, and Baskar makes sure your form is right.',
    name: 'Suresh',
  },
  {
    body: 'They took a real interest in what I wanted to work on and built around it. Friendly, serious about results — exactly what a local gym should be.',
    name: 'Priya',
  },
]

export function Voices() {
  return (
    <section
      id="voices"
      className="scroll-mt-20 border-t border-border px-6 py-20 md:px-12 md:py-28 lg:px-20"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-20 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ember">
            Member Voices
          </p>
          <div className="mt-4 font-mono">
            <div className="text-7xl font-bold text-ember md:text-8xl">
              <CountUp end={4.6} decimals={1} />
            </div>
            <div className="mt-1 text-bone">
              from <CountUp end={53} /> reviews
            </div>
          </div>
          <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
            Real words from real members on Steel Plant Road. Paraphrased, not
            polished.
          </p>
        </Reveal>

        <ul className="space-y-10">
          {quotes.map((quote, i) => (
            <Reveal as="li" key={quote.name} delayMs={i * 80}>
              <span
                aria-hidden="true"
                className="font-display text-5xl leading-none text-steel"
              >
                &ldquo;
              </span>
              <p className="-mt-4 text-xl leading-relaxed text-bone text-pretty md:text-2xl">
                {quote.body}
              </p>
              <p className="mt-4 font-mono text-sm uppercase tracking-widest text-ember">
                &mdash; {quote.name}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
