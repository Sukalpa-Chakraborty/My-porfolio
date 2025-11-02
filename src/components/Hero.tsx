import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-gradient">Sukalpa</span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              <p className="mb-2">CSE Student</p>
              <p className="mb-2">Full Stack Developer</p>
              <p>Software Engineer</p>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Passionate about building modern web applications and exploring the intersection of software engineering and artificial intelligence.
            </p>
            <Button 
              onClick={() => scrollToSection("skills")}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full glow-effect transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Sukalpa Chakraborty" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;