import { Target, Lightbulb, Heart, Rocket, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import teamImage from "@/assets/team.jpg";

const values = [
  { icon: Target, title: "Developer-First", description: "We build tools for developers, by developers. Every feature is designed to eliminate boilerplate and let you focus on what matters — shipping great internal tools." },
  { icon: Lightbulb, title: "Open Source at Heart", description: "Transparency and community drive everything we do. Our core platform is open-source, and we actively contribute to the ecosystem that powers modern development." },
  { icon: Heart, title: "Customer Obsession", description: "Our customers aren't just users — they're partners. We succeed when they succeed, and we go above and beyond to make that happen with every release." },
  { icon: Rocket, title: "Ship Fast, Ship Right", description: "We believe in velocity without sacrificing quality. Our engineering culture values both speed and craftsmanship — because your internal tools deserve both." },
];

const milestones = [
  { year: "2020", title: "One Logic Tec Founded", description: "Started with a vision to simplify internal tool development for enterprises across MENA and beyond." },
  { year: "2021", title: "OneApp Platform Launch", description: "Launched OneApp as an open-source low-code platform for building internal tools with drag-and-drop widgets." },
  { year: "2022", title: "30+ Integrations", description: "Added native connectors for PostgreSQL, MongoDB, Salesforce, Slack, OpenAI, and 25+ other services." },
  { year: "2023", title: "Enterprise Edition", description: "Released Enterprise tier with SSO, audit logs, air-gapped deployments, and dedicated support." },
  { year: "2024", title: "OneApp Ecosystem Expands", description: "Launched OneChat, OneFlow, OneDoc, and OneEngine alongside 10+ starter kit templates." },
  { year: "2025", title: "AI-Powered Features", description: "Integrated OpenAI, Anthropic, and Google AI connectors for building AI-powered internal tools." },
];

const team = [
  { name: "Youssef El Amrani", role: "CEO & Founder", bio: "Enterprise software veteran with 15+ years building developer tools. Passionate about democratizing app development." },
  { name: "Dr. Nadia Berrada", role: "CTO", bio: "PhD in Computer Science. Previously led engineering teams at major tech companies. Expert in distributed systems." },
  { name: "Karim Tazi", role: "VP of Engineering", bio: "Full-stack architect with deep experience in React, Node.js, and cloud infrastructure. Built platforms serving millions." },
  { name: "Sara Idrissi", role: "VP of Product", bio: "Former product lead at enterprise SaaS companies. Focused on building intuitive tools for complex workflows." },
  { name: "Omar Fassi", role: "Head of Integrations", bio: "Database and API specialist. Architected OneApp's connector framework supporting 30+ native integrations." },
  { name: "Leila Bennani", role: "Head of Customer Success", bio: "10+ years in enterprise SaaS. Ensures every OneApp customer gets maximum value from the platform." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building the Future of{" "}
              <span className="text-gradient-gold">Internal Tools</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              One Logic Tec is on a mission to eliminate the gap between what teams need and what developers have time to build. OneApp is our answer: an open-source, low-code platform that makes internal tool development fast, flexible, and enjoyable.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-elevated border border-border/50 max-w-4xl mx-auto">
              <img src={teamImage} alt="One Logic Tec Team" width={1280} height={800} className="w-full h-auto" loading="lazy" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every engineering team faces the same challenge: building internal tools. Admin panels, dashboards, CRUD apps — they're essential for operations, but they drain developer time from core product work.
                </p>
                <p>
                  We founded One Logic Tec to solve this problem. Our flagship product, OneApp, gives developers a canvas with 45+ pre-built widgets, 30+ native data connectors, and the flexibility to write custom code when needed — all deployable in minutes.
                </p>
                <p>
                  Today, OneApp powers internal tools at companies of all sizes — from startups building their first admin panel to enterprises running mission-critical dashboards across global teams. Our ecosystem includes OneChat, OneFlow, OneDoc, and OneEngine for end-to-end digital operations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "45+", label: "Widgets" },
                  { value: "30+", label: "Integrations" },
                  { value: "10K+", label: "Apps Built" },
                  { value: "5", label: "Product Suite" },
                ].map((s) => (
                  <div key={s.label} className="p-6 rounded-2xl bg-gradient-card border border-border text-center">
                    <div className="font-display text-3xl font-bold text-gradient-gold mb-1">{s.value}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">The principles that guide everything we build and every decision we make.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <v.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the <span className="text-gradient-gold">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A passionate team of engineers, designers, and product thinkers building the future of low-code.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/20 transition-all">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Journey</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-0">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.08} className="relative pl-8 pb-12 last:pb-0 border-l border-border">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="text-sm text-primary font-bold mb-1">{m.year}</div>
                <h3 className="font-display font-semibold text-foreground mb-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
