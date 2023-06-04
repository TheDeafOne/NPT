import Navbar from "@/components/Navbar/Navbar";
import WelcomeSection from "@/components/WelcomeSection/WelcomeSection";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <WelcomeSection />
    </div>
  )
}
