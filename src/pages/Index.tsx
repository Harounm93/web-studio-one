import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Palette, Zap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Web Studio</h1>
          <div className="flex gap-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Build Digital
                <span className="block bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We craft beautiful, functional websites and applications that bring your vision to life.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="Web Studio creative workspace" 
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h3>
            <p className="text-muted-foreground text-lg">Expert solutions for modern web challenges</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-card-foreground">Web Development</h4>
              <p className="text-muted-foreground">
                Custom websites and web applications built with modern technologies and best practices.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-card-foreground">UI/UX Design</h4>
              <p className="text-muted-foreground">
                Beautiful, intuitive interfaces that engage users and drive conversions.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-card-foreground">Performance</h4>
              <p className="text-muted-foreground">
                Lightning-fast websites optimized for speed, SEO, and user experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Work</h3>
            <p className="text-muted-foreground text-lg">Recent projects we're proud of</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="group overflow-hidden hover:shadow-xl transition-all border-border">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10"></div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-card-foreground">Project {item}</h4>
                  <p className="text-muted-foreground">
                    A showcase of modern web design and development excellence.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Work Together</h3>
          <p className="text-muted-foreground text-lg mb-8">
            Ready to start your next project? Get in touch and let's create something amazing.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">© 2024 Web Studio. Ready for your custom code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
