import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers, Shield, Zap, Globe, Database, Users, ArrowRight, Star, CheckCircle2,
  LayoutGrid, Plug, FileCode,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const productPills = [
  { name: "OneChat", color: "bg-blue-500/20 text-blue-400" },
  { name: "OneApp", color: "bg-primary/20 text-primary" },
  { name: "OneFlow", color: "bg-violet-500/20 text-violet-400" },
  { name: "OneDoc", color: "bg-emerald-500/20 text-emerald-400" },
  { name: "OneEngine", color: "bg-rose-500/20 text-rose-400" },
];

const benefits = [
  {
    icon: LayoutGrid,
    title: "45+ Drag-and-Drop Widgets",
    description: "Tables, charts, forms, maps, rich text editors, file pickers, and more. Build any UI with pre-built components — no frontend code needed.",
  },
  {
    icon: Database,
    title: "Instant Data Connections",
    description: "Connect to PostgreSQL, MongoDB, MySQL, Snowflake, REST APIs, GraphQL, and 30+ other datasources with native drivers — zero configuration.",
  },
  {
    icon: Zap,
    title: "Visual App Assembly",
    description: "Drag widgets onto a canvas, bind them to queries, and ship production apps in minutes. Write JavaScript only when you want to — never when you have to.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Role-based access controls, audit logs, SSO/SAML, and granular permissions. Deploy to our cloud or self-host on your own infrastructure.",
  },
  {
    icon: Globe,
    title: "Workflow Automation",
    description: "Trigger queries, APIs, or custom logic on any user action. Automate approvals, notifications, and data pipelines without leaving the platform.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Git-based version control, shared workspaces, and one-click deployments. Your entire team can build and iterate on apps together.",
  },
];

const stats = [
  { value: "45+", label: "Pre-Built Widgets" },
  { value: "30+", label: "Data Integrations" },
  { value: "10K+", label: "Apps Built" },
  { value: "99.9%", label: "Uptime SLA" },
];

const testimonials = [
  {
    name: "Ahmed Benali",
    role: "CTO, FinStack",
    quote: "OneApp cut our internal tool development time from weeks to hours. We built a complete loan management system in a single afternoon — it's a game-changer.",
    rating: 5,
  },
  {
    name: "Laura Mitchell",
    role: "VP of Engineering, DataCore",
    quote: "We replaced 6 different admin tools with OneApp. The drag-and-drop builder is incredibly intuitive, and the database connectors just work out of the box.",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Head of Ops, CloudVenture",
    quote: "Our operations team — with zero coding experience — built their own inventory tracker in OneApp. Self-hosting on our infrastructure was seamless.",
    rating: 5,
  },
];

const useCases = [
  { icon: Layers, title: "Admin Panels", description: "CRUD operations on any database or SaaS tool in minutes." },
  { icon: FileCode, title: "Dashboards", description: "Real-time analytics from multiple data sources on one screen." },
  { icon: Plug, title: "CRUD Front-Ends", description: "User-friendly interfaces for your databases — no boilerplate." },
  { icon: Globe, title: "Customer Portals", description: "External-facing apps for partners, clients, and stakeholders." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Open-Source Low-Code Platform</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Build Internal Tools{" "}
                <span className="text-gradient-gold">10x Faster</span>{" "}
                with OneApp
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
                OneApp is the open-source, low-code platform to build admin panels, dashboards, and CRUD apps. Connect any datasource, drag and drop 45+ widgets, and deploy in minutes.
              </p>

              {/* Product Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {productPills.map((pill) => (
                  <span key={pill.name} className={`px-3 py-1.5 rounded-full text-xs font-semibold ${pill.color}`}>
                    {pill.name}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-gold"
                >
                  Start Building Free <ArrowRight size={18} />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  Explore Widgets
                </Link>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Free forever tier</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Self-host or cloud</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Open source</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-border/50">
                <img src={heroDashboard} alt="OneApp Dashboard Builder" width={1280} height={800} className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to{" "}
              <span className="text-gradient-gold">Ship Faster</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              One platform. Every widget. Every integration. Built for developers who refuse to write boilerplate.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-gold h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Build Any Internal Tool{" "}
                <span className="text-gradient-violet">Without Code</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                From admin panels to customer portals, OneApp handles it all. Connect your data, drag widgets, write JavaScript only when you need to — and deploy to cloud or self-host.
              </p>
              <div className="space-y-4">
                {useCases.map((uc) => (
                  <div key={uc.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <uc.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{uc.title}</span>
                      <span className="text-muted-foreground"> — {uc.description}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/use-cases"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all"
              >
                Explore All Use Cases <ArrowRight size={18} />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-border/50 bg-gradient-card p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Widgets", value: "45+", change: "Drag & Drop" },
                    { label: "Integrations", value: "30+", change: "Native" },
                    { label: "Deploy Time", value: "< 5min", change: "One Click" },
                    { label: "Templates", value: "11+", change: "Ready to Fork" },
                  ].map((metric) => (
                    <div key={metric.label} className="p-4 rounded-xl bg-background/50 border border-border">
                      <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                      <div className="font-display text-2xl font-bold text-foreground">{metric.value}</div>
                      <div className="text-xs text-primary font-medium">{metric.change}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by <span className="text-gradient-gold">Developers & Teams</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              See why engineering teams around the world choose OneApp for their internal tools.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/20 transition-all h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
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

export default Index;
