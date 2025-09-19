"use client"
import AboutSection from "@/components/about";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/service";
import WhyChooseUs from "@/components/whychooseus";

export default function Home() {


  return (
    <>
      <Hero />
      <AboutSection />

      <ServicesSection />
      <WhyChooseUs />
    </>
  );
}
