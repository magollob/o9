import { HeroSection } from "@/components/hero-section"
import { StatisticsSection } from "@/components/statistics-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CommunitySection } from "@/components/community-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { TargetAudience } from "@/components/target-audience"
import { GuidePreview } from "@/components/guide-preview"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatisticsSection />
      <ValuePropositionSection />
      <TargetAudience />
      <GuidePreview />
      <TestimonialSection />
      <CommunitySection />
      <PricingSection />
      <CTASection />
      <GuaranteeSection />
      <Footer />
    </main>
  )
}
