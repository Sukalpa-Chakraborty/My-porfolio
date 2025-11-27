import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { useState, useEffect } from "react";

const techStack = ["Python", "React", "Node.js", "MongoDB"];

const Hero = () => {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
              onClick={() => scrollToSection("about")}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full glow-effect transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>

            {/* Tech Stack - Animated Cycling */}
            <div className="mt-12">
              <div className="flex justify-center md:justify-start items-center gap-4">
                <span className="text-muted-foreground">Skilled in</span>
                <div className="relative h-12 w-32 overflow-hidden">
                  {techStack.map((tech, index) => (
                    <div
                      key={tech}
                      className={`absolute inset-0 flex items-center justify-center card-glass px-6 py-3 rounded-full transition-all duration-500 ${
                        index === currentTechIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      <span className="text-sm md:text-base font-semibold text-gradient whitespace-nowrap">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 animate-fade-in group" style={{ animationDelay: "0.3s" }}>
            <div className="relative cursor-pointer">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 group-hover:blur-3xl transition-all duration-500"></div>
              <img 
                src={profileImage} 
                alt="Sukalpa Chakraborty - Full Stack Developer" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/50 group-hover:border-primary group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 shadow-2xl"
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