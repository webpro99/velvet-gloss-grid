import { TrendingUp, ArrowRight, BarChart3, Users, DollarSign, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import caseStudyHero from "@/assets/case-study-hero.jpg";

const caseStudies = [
  {
    company: "TechFlow Inc.",
    industry: "B2B SaaS",
    challenge: "TechFlow was struggling with a 12% monthly churn rate and couldn't identify which customers were at risk. Their existing analytics were fragmented across 8 different tools, making it impossible to get a unified view.",
    solution: "We deployed NovaPulse's AI-powered churn prediction engine and consolidated all data into a single unified dashboard. The team could now see customer health scores in real-time and act proactively.",
    results: [
      { metric: "Churn Reduction", value: "67%", icon: TrendingUp },
      { metric: "Revenue Growth", value: "+$2.4M", icon: DollarSign },
      { metric: "Time Saved", value: "40hrs/week", icon: Target },
      { metric: "Team Efficiency", value: "+85%", icon: Users },
    ],
    quote: "NovaPulse didn't just give us data — it gave us the ability to predict and prevent churn before it happened. We saved over $2 million in the first year alone.",
    person: "Sarah Chen, VP of Growth",
  },
  {
    company: "ScaleUp AI",
    industry: "Enterprise AI",
    challenge: "ScaleUp AI needed to track complex user journeys across web, mobile, and API touchpoints. Their marketing team was flying blind, spending $500K/month on ads without clear attribution.",
    solution: "NovaPulse's multi-channel attribution engine mapped every touchpoint in the customer journey. The marketing team gained full visibility into which channels drove the highest-value conversions.",
    results: [
      { metric: "ROAS Improvement", value: "312%", icon: TrendingUp },
      { metric: "Cost Per Lead", value: "-54%", icon: DollarSign },
      { metric: "Conversion Rate", value: "+89%", icon: Target },
      { metric: "Data Sources", value: "23→1", icon: BarChart3 },
    ],
    quote: "We went from guessing to knowing. NovaPulse's attribution showed us exactly where our money was going and where it should go. We cut ad waste by 54% while doubling conversions.",
    person: "Marcus Rodriguez, CEO",
  },
  {
    company: "Horizon Commerce",
    industry: "E-Commerce",
    challenge: "Horizon was processing 100K+ orders daily but lacked real-time inventory and demand forecasting. Stockouts were costing them $1.2M per quarter in lost sales.",
    solution: "We implemented NovaPulse's predictive analytics with custom ML models for demand forecasting. Real-time inventory dashboards gave the ops team instant visibility across 12 warehouses.",
    results: [
      { metric: "Stockout Reduction", value: "91%", icon: TrendingUp },
      { metric: "Revenue Recovery", value: "+$4.8M/yr", icon: DollarSign },
      { metric: "Forecast Accuracy", value: "96%", icon: Target },
      { metric: "Warehouses Synced", value: "12", icon: BarChart3 },
    ],
    quote: "NovaPulse's demand forecasting is scary accurate. We went from constant stockouts to 96% forecast accuracy. That's nearly $5 million in recovered revenue annually.",
    person: "Emily Watson, Head of Operations",
  },
];

const aggregateStats = [
  { value: "340%", label: "Average ROI" },
  { value: "67%", label: "Avg Churn Reduction" },
  { value: "4.2x", label: "Revenue Multiplier" },
  { value: "< 30 days", label: "Time to Value" },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={caseStudyHero} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Real Results From{" "}
              <span className="text-gradient-gold">Real Companies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See how companies like yours are using NovaPulse to cut churn, boost revenue, and make smarter decisions — backed by real numbers and real outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aggregateStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.company} className="mb-24 last:mb-0">
              <div className="rounded-2xl bg-gradient-card border border-border overflow-hidden">
                {/* Header */}
                <div className="p-8 md:p-12 border-b border-border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-primary font-semibold">{cs.industry}</span>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">{cs.company}</h2>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-4 py-2 rounded-full self-start">Case Study #{i + 1}</span>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cs.results.map((r) => (
                      <div key={r.metric} className="p-4 rounded-xl bg-background/50 border border-border text-center">
                        <r.icon size={20} className="text-primary mx-auto mb-2" />
                        <div className="font-display text-2xl font-bold text-foreground">{r.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                  <div className="p-8 md:p-12">
                    <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-destructive" /> The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="p-8 md:p-12">
                    <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" /> The Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-8 md:p-12 bg-secondary/30 border-t border-border">
                  <blockquote className="text-lg text-foreground italic leading-relaxed mb-4">
                    "{cs.quote}"
                  </blockquote>
                  <p className="text-sm text-primary font-semibold">— {cs.person}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Success Story <span className="text-gradient-gold">Starts Here</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Join 2,500+ companies already transforming their business with NovaPulse. Let's write your case study next.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-gold"
            >
              Start Your Free Trial <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
