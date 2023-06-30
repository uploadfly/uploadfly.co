import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import UpTime from "@/components/UpTime";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <TechStack />
      <UpTime />
    </>
  );
}
