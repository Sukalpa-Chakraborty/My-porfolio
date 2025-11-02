import { Globe, Code, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Creating responsive, user-friendly websites using modern frameworks like React, Node.js, and MongoDB. From concept to deployment, I build applications that are both beautiful and functional.",
  },
  {
    icon: Code,
    title: "Software Engineering",
    description: "Designing and building efficient, scalable software solutions. I focus on clean code, best practices, and creating systems that are maintainable and performant.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Exploring and integrating artificial intelligence technologies into applications. Staying at the forefront of AI advancements to create intelligent, future-ready solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          What <span className="text-gradient">I Do</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Leveraging cutting-edge technologies to bring ideas to life
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="card-glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                  <Icon className="w-16 h-16 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;