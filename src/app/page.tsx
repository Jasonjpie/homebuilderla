import HomeSection from "@/components/HomeSection"
import AboutSection from "@/components/AboutSection"
import ContactUs from "@/components/ContactUs"

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <HomeSection />
      <AboutSection />
      <ContactUs />
    </div>
  )
}
