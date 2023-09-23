import Navbar from "./src/components/Navbar";
import HeroSection from "./src/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto  px-11 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
