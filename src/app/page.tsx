import HomeSection from "@/components/HomeSection"
import ServicesSection from "@/components/ServicesSection"
import AboutSection from "@/components/AboutSection"

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <HomeSection />
      <ServicesSection />
      <AboutSection />
    </div>
  )
}
