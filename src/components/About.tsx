import { Button } from "@/components/ui/button";
import { Download, Code2, Brain, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm <span className="text-primary font-semibold">Sukalpa Chakraborty</span>, a passionate Computer Science and Engineering student at Dr. B.C. Roy Engineering College, Durgapur (Batch of 2028).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology is driven by curiosity and innovation. I specialize in building scalable web applications, crafting efficient software solutions, and exploring the fascinating world of artificial intelligence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me learning new frameworks, contributing to open-source projects, or staying updated with the latest tech trends.
            </p>
            <Button 
              className="group bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold px-6 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
          
          <div className="grid gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="card-glass p-6 rounded-2xl hover:scale-105 transition-all duration-300">
              <Code2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">Building responsive and user-friendly web applications with modern technologies</p>
            </div>
            
            <div className="card-glass p-6 rounded-2xl hover:scale-105 transition-all duration-300">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Enthusiast</h3>
              <p className="text-muted-foreground">Exploring machine learning and artificial intelligence applications</p>
            </div>
            
            <div className="card-glass p-6 rounded-2xl hover:scale-105 transition-all duration-300">
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-muted-foreground">Tackling complex challenges with innovative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;