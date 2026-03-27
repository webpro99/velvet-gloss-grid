import { useState } from "react";
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", role: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", company: "", role: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Build Something{" "}
              <span className="text-gradient-gold">Extraordinary</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're ready to start your free trial, need a custom demo, or just want to learn more — we're here to help. Our team typically responds within 2 hours during business hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-2xl bg-gradient-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Your Role</label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="VP of Marketing"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your needs, goals, or questions..."
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-gold"
                  >
                    Send Message <ArrowRight size={18} />
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our Privacy Policy. We'll never share your data.
                  </p>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right" className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">hello@novapulse.io</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Phone</div>
                      <div className="text-sm text-muted-foreground">+1 (415) 555-0147</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Headquarters</div>
                      <div className="text-sm text-muted-foreground">548 Market St, Suite 300<br />San Francisco, CA 94104</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-primary mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Business Hours</div>
                      <div className="text-sm text-muted-foreground">Mon–Fri: 8AM–6PM PST</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-card border border-primary/30 shadow-gold">
                <h3 className="font-display font-semibold text-foreground mb-3">Book a Demo</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Want a personalized walkthrough? Our team will show you NovaPulse in action using your real-world scenarios. Available for 30 or 60 minute sessions.
                </p>
                <button className="w-full py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all">
                  Schedule a Demo
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-card border border-border">
                <h3 className="font-display font-semibold text-foreground mb-3">Why NovaPulse?</h3>
                <div className="space-y-3">
                  {[
                    "14-day free trial, no credit card",
                    "Setup in under 5 minutes",
                    "Dedicated onboarding specialist",
                    "99.99% uptime guarantee",
                    "Cancel anytime, no contracts",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global <span className="text-gradient-gold">Offices</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { city: "San Francisco", address: "548 Market St, Suite 300", type: "Headquarters" },
              { city: "London", address: "71 Queen Victoria St, EC4V", type: "EMEA Office" },
              { city: "Singapore", address: "1 Raffles Place, Tower 2", type: "APAC Office" },
            ].map((office, i) => (
              <AnimatedSection key={office.city} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-gradient-card border border-border text-center">
                  <MapPin size={24} className="text-primary mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-foreground">{office.city}</h3>
                  <p className="text-xs text-primary mb-2">{office.type}</p>
                  <p className="text-sm text-muted-foreground">{office.address}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
