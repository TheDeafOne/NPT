'use client'
import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";
import MouseHighlighter from "@/components/MouseHighlighter/MouseHighlighter";
import { useEffect, useRef, useState } from "react";

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
            className='bg-white z-20 h-10 w-10 fixed'
            style={{ 
              left: newClientX, 
              top: newClientY,
            }}
        />
      <MouseHighlighter />
      <Navbar />
      <WelcomeSection />
      <AboutSection/>
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer/>
    </div>
  )
}
