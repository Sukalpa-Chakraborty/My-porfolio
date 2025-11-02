import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "C", level: 85, color: "hsl(190 85% 55%)" },
  { name: "C++", level: 80, color: "hsl(195 85% 55%)" },
  { name: "C#", level: 75, color: "hsl(200 85% 55%)" },
  { name: "Python", level: 85, color: "hsl(190 85% 55%)" },
  { name: "Node.js", level: 80, color: "hsl(195 85% 55%)" },
  { name: "React", level: 85, color: "hsl(200 85% 55%)" },
  { name: "MongoDB", level: 75, color: "hsl(190 85% 55%)" },
];

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-glass p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: inView ? `${skill.level}%` : '0%',
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;