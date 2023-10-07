'use client'
import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";
import { useState } from "react";

export default function Home() {
  const [newClientX, setClientX] = useState(0);
  const [newClientY, setClientY] = useState(0);
  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    setClientX(clientX);
    setClientY(clientY);
  }
  return (
    <div className="bg-background-950 text-text-50" onMouseMove={handleMouseMove}>
      <div
        className='bg-white z-20 h-44 w-44 fixed rounded-full pointer-events-none origin-center bg-gradient-to-r from-accent-500 to-primary-950 animate-gradient-rotate'
        style={{
          left: newClientX,
          top: newClientY,
        }}
      />
      <div className="pointer-events-none w-full h-screen fixed backdrop-blur-3xl z-[21]"/>
      <Navbar />
      <WelcomeSection />
      <AboutSection />
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
