import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Have a project in mind? Let's work together!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-in-left">
            <div className="card-glass p-6 rounded-2xl hover-lift">
              <Mail className="w-12 h-12 text-primary mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <a 
                href="mailto:sukapa@gmail.com" 
                className="text-primary hover:text-primary/80 transition-colors text-lg"
              >
                sukapa@gmail.com
              </a>
            </div>
            
            <div className="card-glass p-6 rounded-2xl hover-lift stagger-2">
              <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2 animate-fade-in stagger-1">
                  <span className="text-primary">•</span>
                  <span>Available for freelance work</span>
                </li>
                <li className="flex items-start gap-2 animate-fade-in stagger-2">
                  <span className="text-primary">•</span>
                  <span>Open to collaboration</span>
                </li>
                <li className="flex items-start gap-2 animate-fade-in stagger-3">
                  <span className="text-primary">•</span>
                  <span>Response time: 24-48 hours</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="card-glass p-8 rounded-2xl space-y-6 hover-lift">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-full glow-effect transition-all duration-300 hover:scale-105"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;