import { Rocket, Calendar } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-gradient">Portfolio</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="card-glass p-12 rounded-3xl text-center animate-scale-in hover-lift">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <Rocket className="w-24 h-24 text-primary mx-auto relative z-10 animate-float" />
            </div>
            <h3 className="text-3xl font-bold mb-4 animate-fade-in stagger-1">Coming Soon!</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-fade-in stagger-2">
              I'm currently working on exciting projects that will be showcased here soon. Stay tuned for updates as I continue to build and create innovative solutions.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary animate-fade-in stagger-3">
              <Calendar className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">Check back for updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;