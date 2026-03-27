import { Target, Lightbulb, Heart, Rocket, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import teamImage from "@/assets/team.jpg";

const values = [
  { icon: Target, title: "Relentless Focus", description: "We obsess over the problems that matter most. Every feature we build, every decision we make is guided by one question: does this help our customers grow?" },
  { icon: Lightbulb, title: "Bold Innovation", description: "We don't follow trends — we set them. Our R&D team pushes the boundaries of what's possible with data, AI, and predictive analytics." },
  { icon: Heart, title: "Customer Obsession", description: "Our customers aren't just users — they're partners. We succeed when they succeed, and we go above and beyond to make that happen." },
  { icon: Rocket, title: "Speed & Quality", description: "We ship fast and we ship right. Our engineering culture values both velocity and craftsmanship, because our customers deserve both." },
];

const milestones = [
  { year: "2019", title: "Founded in San Francisco", description: "Started with a team of 4 data scientists on a mission to democratize enterprise analytics." },
  { year: "2020", title: "Series A — $12M", description: "Secured funding from top-tier VCs and grew the team to 25. Launched our first AI prediction engine." },
  { year: "2021", title: "1,000 Customers", description: "Hit our first major milestone. Named 'Top Analytics Platform' by TechCrunch and G2." },
  { year: "2022", title: "Series B — $45M", description: "Expanded globally with offices in London and Singapore. Team grew to 120+." },
  { year: "2023", title: "Enterprise Launch", description: "Launched Enterprise tier with on-premise deployment, custom ML, and dedicated support." },
  { year: "2024", title: "2,500+ Companies", description: "Became the #1 rated analytics platform on G2 with 4.9/5 stars across 2,000+ reviews." },
  { year: "2025", title: "AI v3.0 Release", description: "Launched our most advanced AI engine yet with 94% prediction accuracy and autonomous insights." },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", bio: "Former Head of Data at Google. Stanford CS. 15+ years building data products at scale." },
  { name: "Dr. Priya Patel", role: "CTO & Co-Founder", bio: "PhD in Machine Learning from MIT. Previously led ML teams at DeepMind and Meta." },
  { name: "James Liu", role: "VP of Engineering", bio: "Built and scaled systems at Stripe and Datadog. Expert in distributed systems and real-time data." },
  { name: "Maria Santos", role: "VP of Product", bio: "Former Product Lead at Notion. Passionate about building intuitive tools for complex workflows." },
  { name: "David Kim", role: "Head of AI Research", bio: "Published researcher in NLP and time-series forecasting. Previously at OpenAI." },
  { name: "Lisa Okonkwo", role: "VP of Customer Success", bio: "10+ years in enterprise SaaS. Built CS organizations at Salesforce and HubSpot." },
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
              We're on a Mission to{" "}
              <span className="text-gradient-gold">Democratize Data</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NovaPulse was born from a simple belief: every company, regardless of size, deserves access to the same powerful analytics that drive the world's biggest brands. We're building the future of data-driven decision making.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-elevated border border-border/50 max-w-4xl mx-auto">
              <img src={teamImage} alt="NovaPulse Team" width={1280} height={800} className="w-full h-auto" loading="lazy" />
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
                  In 2019, our founders Alex and Priya were frustrated. They'd spent years at Google and DeepMind building incredible data tools — but those tools were locked behind enterprise contracts that cost millions. Small and mid-size companies were left with spreadsheets and gut instincts.
                </p>
                <p>
                  So they built NovaPulse: an analytics platform with the power of enterprise tools, the simplicity of a consumer app, and the price point that any growing company could afford. The response was overwhelming.
                </p>
                <p>
                  Today, NovaPulse serves 2,500+ companies across 60 countries. Our AI processes over 50 million events daily, our platform maintains 99.99% uptime, and our customers report an average 340% ROI increase within their first year.
                </p>
                <p>
                  But we're just getting started. With our latest AI v3.0 release, we're pushing the boundaries of what predictive analytics can do — and we're bringing every one of our customers along for the ride.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "120+", label: "Team Members" },
                  { value: "60+", label: "Countries Served" },
                  { value: "$57M", label: "Total Funding" },
                  { value: "4.9/5", label: "G2 Rating" },
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
              World-class talent from Google, DeepMind, Stripe, and more — united by a passion for data.
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
