import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import UpTime from "@/components/UpTime";
import PlausibleProvider from "next-plausible";

export default function Home() {
  return (
    <PlausibleProvider domain="uploadfly.cloud">
      <Navbar />
      <Hero />
      <Features />
      {/* <TechStack /> */}
      <UpTime />
    </PlausibleProvider>
  );
}
