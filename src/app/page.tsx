import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <WelcomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
