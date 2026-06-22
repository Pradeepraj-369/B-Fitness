import { SiteHeader } from '@/components/site-header'
import { MarqueeStrip } from '@/components/marquee-strip'
import { Hero } from '@/components/sections/hero'
import { WhyBFit } from '@/components/sections/why-bfit'
import { Trainer } from '@/components/sections/trainer'
import { Voices } from '@/components/sections/voices'
import { Visit } from '@/components/sections/visit'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-black text-bone">
        <Hero />
        <MarqueeStrip />
        <WhyBFit />
        <Trainer />
        <Voices />
        <Visit />
        <Footer />
      </main>
    </>
  )
}
