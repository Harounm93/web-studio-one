import { useState } from "react";
import { Menu, X, Code2, Palette, ShoppingCart, Headphones, Rocket, CheckCircle2, ArrowRight, Star, Mail, Phone, MapPin, Zap, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border shadow-sm">
        <nav className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <button onClick={() => scrollToSection("top")} className="flex items-center gap-3 font-bold tracking-tight text-xl">
            <div className="relative w-10 h-10">
              {/* Custom Web Studio Logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg transform rotate-0 shadow-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="text-white font-black text-xl">W</div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full" />
                </div>
              </div>
            </div>
            <span className="text-foreground">Web Studio</span>
          </button>

          <button 
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          <ul className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-8 text-sm absolute md:relative top-16 md:top-0 right-6 md:right-0 bg-white/98 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-elevated md:shadow-none border border-border md:border-0`}>
            {[
              ["about", "About"],
              ["services", "Services"],
              ["portfolio", "Portfolio"],
              ["process", "Process"],
              ["testimonials", "Testimonials"],
              ["pricing", "Pricing"]
            ].map(([id, label]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="font-semibold text-text-muted hover:text-foreground relative group transition-colors"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1.5 w-0 h-0.5 bg-accent-color transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-color text-white text-sm font-semibold hover:bg-accent-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="top" className="relative overflow-hidden gradient-mesh py-20 md:py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-200">
                  <Zap className="w-4 h-4" />
                  Trusted by businesses nationwide
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground">
                  We Build Digital Experiences That <span className="bg-gradient-primary bg-clip-text text-transparent">Drive Results</span>
                </h1>
                <p className="text-text-muted text-lg md:text-xl mb-8 leading-relaxed">
                  Partner with a digital agency that combines creative design with powerful development. 
                  We transform your vision into websites and web applications that convert visitors into customers.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 rounded-full bg-accent-color text-white font-semibold text-lg shadow-elevated hover:bg-accent-dark transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                  >
                    Start Your Project <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="px-8 py-4 rounded-full border-2 border-border text-foreground font-semibold text-lg hover:bg-secondary transition-all"
                  >
                    View Our Work
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
                  <div>
                    <div className="text-3xl font-bold text-accent-color mb-1">Quality</div>
                    <div className="text-sm text-text-muted">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-color mb-1">Happy</div>
                    <div className="text-sm text-text-muted">Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-color mb-1">24/7</div>
                    <div className="text-sm text-text-muted">Support Available</div>
                  </div>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-glow float-animation">
                  {/* Abstract Tech Illustration */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                          <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 h-3 bg-white/20 rounded-full" />
                        <div className="w-16 h-3 bg-white/30 rounded-full" />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-24 bg-white/20 rounded-lg" />
                        <div className="h-24 bg-white/30 rounded-lg" />
                        <div className="h-24 bg-white/20 rounded-lg" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/30 rounded-full" />
                        <div className="h-2 bg-white/20 rounded-full w-4/5" />
                        <div className="h-2 bg-white/20 rounded-full w-3/5" />
                      </div>
                    </div>
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl rotate-12 shadow-lg float-animation float-delay-1" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-400 rounded-full shadow-lg float-animation float-delay-2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Who We Are</h2>
              <p className="text-xl text-text-muted">
                A digital agency passionate about crafting exceptional web experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-text-muted text-lg mb-4 leading-relaxed">
                  At Web Studio, we believe every business deserves a digital presence that not only looks stunning 
                  but also drives real results. We combine cutting-edge technology with creative design to build 
                  websites and web applications that help our clients grow.
                </p>
                <p className="text-text-muted text-lg mb-4 leading-relaxed">
                  We specialize in serving small to mid-sized businesses, helping companies 
                  transform their online presence and achieve their digital goals.
                </p>
                <p className="text-text-muted text-lg leading-relaxed">
                  We're not just developers and designers—we're strategic partners invested in your success. 
                  From the first consultation to post-launch support, we're with you every step of the way.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <Users className="w-10 h-10 text-blue-600 mb-3" />
                  <h4 className="font-bold text-xl mb-2">Expert Team</h4>
                  <p className="text-sm text-text-muted">Skilled designers & developers</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                  <TrendingUp className="w-10 h-10 text-purple-600 mb-3" />
                  <h4 className="font-bold text-xl mb-2">Proven Results</h4>
                  <p className="text-sm text-text-muted">Strong ROI for our clients</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                  <CheckCircle2 className="w-10 h-10 text-green-600 mb-3" />
                  <h4 className="font-bold text-xl mb-2">Quality First</h4>
                  <p className="text-sm text-text-muted">Satisfaction guaranteed</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                  <Rocket className="w-10 h-10 text-orange-600 mb-3" />
                  <h4 className="font-bold text-xl mb-2">Fast Delivery</h4>
                  <p className="text-sm text-text-muted">On-time project completion</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-3xl p-8 md:p-12 border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why Businesses Trust Us</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Transparent Process", desc: "No hidden costs. Clear timelines. Regular updates throughout your project." },
                  { title: "Modern Technology", desc: "We use the latest frameworks and tools to build fast, secure, and scalable solutions." },
                  { title: "Ongoing Support", desc: "Your launch is just the beginning. We provide continuous maintenance and optimization." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent-color flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-bg-alt">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
              <p className="text-xl text-text-muted">
                Comprehensive digital solutions to power your business growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code2 className="w-8 h-8" />,
                  title: "Website Development",
                  desc: "Custom-built websites optimized for performance, SEO, and conversions. From landing pages to complex multi-page sites.",
                  features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"]
                },
                {
                  icon: <Palette className="w-8 h-8" />,
                  title: "Website Design",
                  desc: "Beautiful, user-centered designs that capture your brand identity and create memorable experiences for your visitors.",
                  features: ["UI/UX Design", "Brand Identity", "Wireframing", "Prototyping"]
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Web Applications",
                  desc: "Powerful custom web apps built with modern frameworks. Scalable solutions for your unique business needs.",
                  features: ["Custom Features", "API Integration", "Cloud Hosting", "Real-time Updates"]
                },
                {
                  icon: <ShoppingCart className="w-8 h-8" />,
                  title: "Dashboards",
                  desc: "Dynamic dashboards and engaging promotional displays to showcase your data and marketing content effectively.",
                  features: ["Interactive Dashboards", "Promo Widgets", "Real-time Data", "Custom Displays"]
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Branding & Identity",
                  desc: "Create a cohesive brand identity including logo design, color palettes, typography, and brand guidelines.",
                  features: ["Logo Design", "Brand Guide", "Marketing Materials", "Social Media Assets"]
                },
                {
                  icon: <Headphones className="w-8 h-8" />,
                  title: "Ongoing Support",
                  desc: "Keep your website running smoothly with regular updates, security patches, backups, and technical support.",
                  features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Bug Fixes"]
                }
              ].map((service, i) => (
                <article key={i} className="bg-white rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated transition-all hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-text-muted mb-4 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-text-muted">
                        <CheckCircle2 className="w-4 h-4 text-accent-color flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio / Case Studies Section */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Work</h2>
              <p className="text-xl text-text-muted">
                Real projects. Real results. See how we've helped businesses like yours succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "CoreFit",
                  category: "Gym & Fitness",
                  desc: "Modern website with class booking system and member management portal.",
                  results: ["Enhanced brand identity", "Majority mobile traffic", "Improved search rankings"],
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Maple & Mug",
                  category: "Cafe & Restaurant",
                  desc: "Updated menu designs, logo and website for a local artisan cafe.",
                  results: ["Improved SEO performance", "Increased click-through rate", "Enhanced brand visibility"],
                  color: "from-amber-600 to-yellow-500"
                }
              ].map((project, i) => (
                <article key={i} className="bg-white rounded-3xl shadow-soft border border-border hover:shadow-elevated transition-all overflow-hidden group">
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-50">{i + 1}</div>
                    </div>
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-8">
                    <div className="text-sm font-semibold text-accent-color mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-text-muted mb-4 leading-relaxed">{project.desc}</p>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm text-foreground">Key Results:</h4>
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-text-muted">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                    <button className="text-accent-color font-semibold flex items-center gap-2 hover:gap-3 transition-all group-hover:text-accent-dark">
                      View Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-bg-alt">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How We Work</h2>
              <p className="text-xl text-text-muted">
                A proven process that delivers results, from concept to launch
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20" />
              
              <div className="grid md:grid-cols-5 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    desc: "We learn about your business, goals, target audience, and project requirements.",
                    icon: "🔍"
                  },
                  {
                    step: "02",
                    title: "Design",
                    desc: "Our designers create beautiful mockups and prototypes for your review and approval.",
                    icon: "🎨"
                  },
                  {
                    step: "03",
                    title: "Development",
                    desc: "We build your website or app using modern technologies and best practices.",
                    icon: "⚙️"
                  },
                  {
                    step: "04",
                    title: "Launch",
                    desc: "After thorough testing, we launch your project and ensure everything runs smoothly.",
                    icon: "🚀"
                  },
                  {
                    step: "05",
                    title: "Support",
                    desc: "We provide ongoing maintenance, updates, and optimization to keep you ahead.",
                    icon: "🛡️"
                  }
                ].map((phase, i) => (
                  <div key={i} className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated transition-all text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-10">
                        {phase.step}
                      </div>
                      <div className="text-4xl mb-3">{phase.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{phase.title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">Ready to Get Started?</h3>
              <p className="text-white text-lg md:text-xl mb-6 max-w-2xl mx-auto drop-shadow">
                Every great project begins with a conversation. Let's discuss your vision and create something amazing together.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 rounded-full bg-white text-blue-700 font-semibold text-lg shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 hover:scale-105"
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Client Success Stories</h2>
              <p className="text-xl text-text-muted">
                Don't just take our word for it—here's what our clients say
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Mitchell",
                  role: "CEO, CoreFit",
                  company: "CoreFit",
                  text: "Web Studio transformed our outdated website into a modern, user-friendly experience. The new brand identity and design have significantly improved our member engagement!",
                  rating: 5
                },
                {
                  name: "Emily Rodriguez",
                  role: "Owner, Maple & Mug",
                  company: "Maple & Mug",
                  text: "Working with Web Studio was fantastic. They didn't just redesign our menu and logo—they created a complete brand experience that truly represents our cafe.",
                  rating: 4
                },
                {
                  name: "David Park",
                  role: "Director, InnovateTech",
                  company: "InnovateTech",
                  text: "Best investment we've made in our digital presence. Web Studio's ongoing support and optimization has kept our site performing at peak levels month after month.",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <article key={i} className="bg-secondary rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated transition-all">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-text-muted mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary text-white flex items-center justify-center font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-text-muted">{testimonial.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-text-muted mb-4">Trusted by businesses of all sizes</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                {["CoreFit", "Maple & Mug", "InnovateTech"].map((company, i) => (
                  <div key={i} className="text-2xl font-bold text-foreground">{company}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-bg-alt">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Simple, Transparent Pricing</h2>
              <p className="text-xl text-text-muted">
                Choose a package that fits your needs, or let's create a custom solution
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Starter",
                  price: "£250",
                  desc: "Perfect for small businesses and startups",
                  features: [
                    "5-page custom website",
                    "Mobile responsive design",
                    "SEO optimization",
                    "Contact form integration"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "£500",
                  desc: "Ideal for growing businesses",
                  features: [
                    "10-page custom website",
                    "Advanced animations",
                    "Advanced SEO",
                    "Social media integration",
                    "Custom graphics & imagery",
                    "Performance optimization"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "£750+",
                  desc: "For complex projects and large businesses",
                  features: [
                    "Unlimited pages",
                    "Custom web application",
                    "API integrations",
                    "Custom features"
                  ],
                  popular: false
                }
              ].map((plan, i) => (
                <article key={i} className={`bg-white rounded-3xl p-8 shadow-soft border-2 ${plan.popular ? 'border-accent-color shadow-glow' : 'border-border'} hover:shadow-elevated transition-all relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-accent-color text-white text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  <p className="text-text-muted mb-6">{plan.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-accent-color flex-shrink-0 mt-0.5" />
                        <span className="text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`w-full py-3 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? 'bg-accent-color text-white hover:bg-accent-dark shadow-md hover:shadow-lg'
                        : 'bg-secondary text-foreground hover:bg-border'
                    }`}
                  >
                    Get Started
                  </button>
                </article>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-border text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Need a Custom Solution?</h3>
              <p className="text-text-muted text-lg mb-6 max-w-2xl mx-auto">
                Every business is unique. If our packages don't quite fit your needs, let's create a custom solution tailored specifically for you.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 rounded-full border-2 border-accent-color text-accent-color font-semibold hover:bg-accent-color hover:text-white transition-all"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Let's Build Something Great</h2>
              <p className="text-xl text-text-muted">
                Ready to transform your digital presence? Get in touch and let's discuss your project.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for your message! We'll get back to you within 24 hours.");
                }}
                className="md:col-span-3 bg-white rounded-3xl p-8 shadow-soft border border-border"
              >
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent transition-all text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent transition-all text-foreground"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="company" className="block text-sm font-semibold mb-2 text-foreground">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent transition-all text-foreground"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="service" className="block text-sm font-semibold mb-2 text-foreground">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent transition-all text-foreground"
                  >
                    <option>Website Design</option>
                    <option>Website Development</option>
                    <option>Web Application</option>
                    <option>E-Commerce</option>
                    <option>Branding</option>
                    <option>Ongoing Support</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="budget" className="block text-sm font-semibold mb-2 text-foreground">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent transition-all text-foreground"
                  >
                    <option>Under £250</option>
                    <option>£250 - £500</option>
                    <option>£500 - £750</option>
                    <option>£750+</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What are your goals? What challenges are you facing? Any specific features you need?"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-secondary focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-transparent resize-y transition-all text-foreground"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-accent-color text-white font-semibold text-lg shadow-elevated hover:bg-accent-dark transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>

              {/* Contact Info */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-gradient-primary rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                  <p className="text-white/90 mb-6">
                    Have questions? We're here to help. Reach out through any of these channels.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Email Us</div>
                        <a href="mailto:hello@webstudio.com" className="text-white/90 hover:text-white">
                          hello@webstudio.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Call Us</div>
                        <a href="tel:+1234567890" className="text-white/90 hover:text-white">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Visit Us</div>
                        <div className="text-white/90">
                          123 Digital Avenue<br />
                          Tech District, CA 94000<br />
                          United States
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary rounded-3xl p-8 border border-border">
                  <h4 className="font-bold text-lg mb-3 text-foreground">Office Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Saturday</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-text-muted">
                      <strong className="text-foreground">Response Time:</strong> We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 font-bold text-xl mb-4">
                <div className="relative w-10 h-10">
                  {/* Custom Web Studio Logo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg transform rotate-0 shadow-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="text-white font-black text-xl">W</div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-200 rounded-full" />
                    </div>
                  </div>
                </div>
                Web Studio
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Building exceptional digital experiences for forward-thinking businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Website Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Web Applications</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">E-Commerce</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <div>© 2024 Web Studio Digital Agency. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
