import Navbar from "./src/components/Navbar";
import HeroSection from "./src/components/HeroSection";
import AboutSection from "./src/components/AboutSection";
import ProjectSection from "./src/components/ProjectSection";
import EmailSection from "./src/components/EmailSection";
import Footer from "./src/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto  px-11 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
