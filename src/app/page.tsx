import HomeSection from "@/components/HomeSection"
import ServicesSection from "@/components/ServicesSection"

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <HomeSection />
      <ServicesSection />
    </div>
  )
}
