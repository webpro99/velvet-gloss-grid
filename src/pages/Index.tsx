import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3, Shield, Zap, Globe, TrendingUp, Users, ArrowRight, Star, CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const trustLogos = ["Stripe", "Shopify", "Notion", "Slack", "Vercel", "Linear"];

const benefits = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track every metric that matters with live dashboards that update in milliseconds. Make decisions based on what's happening right now, not yesterday.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption. Your data is protected by the same standards used by Fortune 500 companies.",
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Process billions of events per second with sub-100ms query times. No lag, no downtime, just pure speed when you need it most.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Deployed across 40+ regions worldwide. Your analytics are always fast, no matter where your users or team are located.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Insights",
    description: "AI-powered forecasting identifies trends before they happen. Stay ahead of the curve with intelligent recommendations tailored to your business.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share dashboards, set alerts, and collaborate in real-time with unlimited team members. Everyone stays aligned on the metrics that matter.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Growth, TechFlow",
    quote: "NovaPulse transformed how we approach data. We increased our conversion rate by 340% in just three months using their predictive insights.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, ScaleUp AI",
    quote: "The real-time dashboards are game-changing. We can now respond to market shifts within minutes instead of days. It's given us a massive competitive edge.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Head of Analytics, Horizon",
    quote: "We evaluated 12 analytics platforms before choosing NovaPulse. Nothing else comes close in terms of speed, reliability, and the quality of insights.",
    rating: 5,
  },
];

const stats = [
  { value: "2,500+", label: "Companies Worldwide" },
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "340%", label: "Avg. ROI Increase" },
  { value: "50M+", label: "Events Processed Daily" },
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
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Now with AI-Powered Insights v3.0</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Turn Data Into{" "}
                <span className="text-gradient-gold">Revenue-Driving</span>{" "}
                Decisions
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                NovaPulse is the premium analytics platform trusted by 2,500+ companies to unlock actionable insights, predict trends, and accelerate growth — all in real time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-gold"
                >
                  Start Free Trial <ArrowRight size={18} />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
                >
                  See How It Works
                </Link>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Cancel anytime</span>
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
                <img src={heroDashboard} alt="NovaPulse Analytics Dashboard" width={1280} height={800} className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-8">
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Trusted by industry leaders worldwide</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustLogos.map((logo, i) => (
              <AnimatedSection key={logo} delay={i * 0.1}>
                <span className="font-display text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-default">
                  {logo}
                </span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
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
              <span className="text-gradient-gold">Dominate</span> Your Market
            </h2>
            <p className="text-muted-foreground text-lg">
              One platform. Every insight. Built for teams that refuse to settle for mediocre data.
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

      {/* Featured Product Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                See the Future Before{" "}
                <span className="text-gradient-violet">It Happens</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our AI engine analyzes billions of data points to predict customer behavior, market trends, and revenue opportunities — giving you a 90-day crystal ball for your business.
              </p>
              <div className="space-y-4">
                {[
                  "Predict churn 30 days before it happens",
                  "Identify high-value opportunities automatically",
                  "Get custom recommendations for growth",
                  "Automate reporting across all channels",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all"
              >
                Explore All Features <ArrowRight size={18} />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-border/50 bg-gradient-card p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Revenue Forecast", value: "$2.4M", change: "+24%" },
                    { label: "Customer Score", value: "94/100", change: "+12%" },
                    { label: "Churn Risk", value: "2.1%", change: "-18%" },
                    { label: "Growth Rate", value: "47%", change: "+31%" },
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
              Loved by <span className="text-gradient-gold">Industry Leaders</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our customers have to say.
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
