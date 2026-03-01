import HeroSection from '@/components/sections/Hero'
import WhatIDoSection from '@/components/sections/WhatIDo'
import AboutSection from '@/components/sections/AboutSection'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import SkillsSection from '@/components/sections/SkillsSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIDoSection />
      <AboutSection />
      <FeaturedProjects />
      <SkillsSection />
      <CTASection />
    </>
  )
}