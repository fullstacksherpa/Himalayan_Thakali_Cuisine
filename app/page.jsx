import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Menu from "@/components/Menu";
import MomoDropdown from "@/components/MomoDropdown";

import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MomoDropdown/>
      <Menu />
      <Testimonial/>
      <Footer />
      
    </main>
  );
}
