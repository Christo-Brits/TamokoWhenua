'use client';
import Header from "./components/Header";
import Hero from "./components/Hero";
import FadeInSection from "./components/FadeInSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Journey from "./components/Journey";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import SectionWave from "./components/SectionWave";

export default function Home() {
  return (
    <div className="relative bg-[#f7f5f0] min-h-screen font-sans">
      <ScrollIndicator />
      <Header />
      <main>
        <FadeInSection id="hero"><Hero /></FadeInSection>
        <SectionWave color="#37513a" />
        <FadeInSection id="services"><Services /></FadeInSection>
        <SectionWave color="#e6d6c3" flip />
        <FadeInSection id="about"><AboutUs /></FadeInSection>
        <SectionWave color="#8b3a2e" />
        <FadeInSection id="journey"><Journey /></FadeInSection>
        <SectionWave color="#e6d6c3" flip />
        <FadeInSection id="team"><Team /></FadeInSection>
        <SectionWave color="#37513a" />
        <FadeInSection id="testimonials"><Testimonials /></FadeInSection>
        <SectionWave color="#8b3a2e" flip />
        <FadeInSection id="contact"><Contact /></FadeInSection>
      </main>
      <Footer />
      <style jsx global>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .fade-in-section.is-visible {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </div>
  );
}
