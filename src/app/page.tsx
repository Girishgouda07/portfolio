import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ScrollRestoration from "@/components/ScrollRestoration";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <ScrollRestoration />
      <SmoothScroll />
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
