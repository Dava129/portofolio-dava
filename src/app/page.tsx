import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-primary">
      {/* Grid background */}
      <div className="grid-bg fixed inset-0 z-0 pointer-events-none" />

      {/* Glow orbs */}
      <div
        className="fixed z-0 pointer-events-none rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "rgba(56,189,248,0.04)",
          filter: "blur(80px)",
          top: -100,
          left: -200,
        }}
      />
      <div
        className="fixed z-0 pointer-events-none rounded-full"
        style={{
          width: 400,
          height: 400,
          background: "rgba(129,140,248,0.04)",
          filter: "blur(80px)",
          bottom: 100,
          right: -100,
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates /> {/* <-- 2. Letakkan komponennya di sini */}
      <Contact />
      <Footer />
    </main>
  );
}