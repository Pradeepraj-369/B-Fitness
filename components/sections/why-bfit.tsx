import { CountUp } from '@/components/count-up'
import { Reveal } from '@/components/reveal'

const pillars = [
  {
    stat: <CountUp end={1} className="font-mono" />,
    title: 'Safety First',
    body: "Mr. Baskar teaches form before weight. Every regimen is built so you train hard without getting hurt — careful instruction, every set.",
  },
  {
    stat: <CountUp end={2} className="font-mono" />,
    title: 'Every Body Counts',
    body: 'Members help members here. The trainers take a personal interest in what you need — no one gets lost in the crowd.',
  },
  {
    stat: (
      <span className="font-mono">
        <CountUp end={5} />
        <span className="text-ember">:30</span>
      </span>
    ),
    title: 'Open Before Dawn',
    body: 'Doors open at 5:30 AM. For the workers and early risers of Steel Plant Road, the day starts on the floor.',
  },
]

export function WhyBFit() {
  return (
    <section
      id="why"
      className="scroll-mt-20 border-t border-border px-6 py-20 md:px-12 md:py-28 lg:px-20"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ember">
          Why B Fit
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-black uppercase leading-tight text-balance text-bone">
          Three things we do not compromise on.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <Reveal
            key={pillar.title}
            delayMs={i * 80}
            className="group relative bg-forge p-8 transition-colors duration-300 hover:bg-card md:p-10"
          >
            <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-ember transition-all duration-300 group-hover:w-full" />
            <div className="font-display text-6xl font-black text-steel transition-colors duration-300 group-hover:text-ember md:text-7xl">
              {pillar.stat}
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide text-ember">
              {pillar.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {pillar.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
