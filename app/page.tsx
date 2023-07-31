import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Ready from "@/components/Ready";
import TechStack from "@/components/TechStack";
import UpTime from "@/components/UpTime";

export default function Home() {
  return (
    <>
      <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(/grid-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        <Navbar />
      <Hero />
      </div>
      <Features />
      {/* <TechStack /> */}
      <UpTime />
      <Ready/>
      </>
  );
}
