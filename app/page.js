import Navbar from "./src/components/Navbar";
import HeroSection from "./src/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container max-auto px-12 py-4 ">
      <Navbar />
      <HeroSection />
    </main>
  );
}
