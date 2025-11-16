import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;