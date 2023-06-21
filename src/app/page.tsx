import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";
import { useRef } from "react";

export default function Home() {
  const navItems = [
    { title: "About", id: "about-section", navRef: useRef() },
    { title: "Skills", id: "skills-section", navRef: useRef() },
    { title: "Projects", id: "projects-section", navRef: useRef() },
    { title: "Experience", id: "experience-section", navRef: useRef() },
    { title: "Contact Me", id: "contact-section", navRef: useRef() }
  ]
  return (
    <div className={`bg-background`}>
      <Navbar navItems={navItems}/>
      <WelcomeSection />
      <AboutSection ref={navItems[0].navRef}/>
      <SkillsSection ref={navItems[1].navRef} />
      <ProjectsSection ref={navItems[2].navRef} />
      <ExperienceSection ref={navItems[3].navRef} />
      <ContactSection ref={navItems[4].navRef} />
      <Footer/>
    </div>
  )
}
