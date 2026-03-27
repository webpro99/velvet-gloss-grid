import {
  BarChart3, Shield, Zap, Globe, TrendingUp, Users, Brain, Layers,
  Lock, RefreshCcw, Smartphone, Database, ArrowRight, CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import featuresHero from "@/assets/features-hero.jpg";

const mainFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    description: "Our machine learning models analyze historical patterns and current signals to forecast revenue, churn, and growth with 94% accuracy. Get recommendations tailored to your specific industry and business model.",
    highlights: ["Revenue forecasting", "Churn prediction", "Growth modeling", "Custom ML pipelines"],
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description: "Build stunning, interactive dashboards in minutes — not hours. Drag-and-drop widgets, custom visualizations, and live data feeds keep your entire team aligned on the metrics that matter most.",
    highlights: ["Drag-and-drop builder", "50+ chart types", "Live data feeds", "Custom themes"],
  },
  {
    icon: Layers,
    title: "Multi-Channel Attribution",
    description: "Understand exactly which channels, campaigns, and touchpoints drive conversions. Our attribution engine tracks the entire customer journey across web, mobile, email, and social.",
    highlights: ["Cross-device tracking", "Campaign analysis", "ROI measurement", "Funnel optimization"],
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II, GDPR, and HIPAA compliant. Your data is encrypted at rest and in transit with AES-256 encryption. Role-based access controls and audit logs keep everything secure.",
    highlights: ["SOC 2 certified", "GDPR compliant", "AES-256 encryption", "Audit logging"],
  },
];

const additionalFeatures = [
  { icon: Globe, title: "Global CDN", description: "Data served from 40+ edge locations for sub-50ms response times worldwide." },
  { icon: Database, title: "Data Warehouse", description: "Built-in data warehouse with unlimited storage and instant query capabilities." },
  { icon: RefreshCcw, title: "Auto Sync", description: "Automatic data sync from 200+ integrations including Salesforce, HubSpot, and Stripe." },
  { icon: Smartphone, title: "Mobile App", description: "Full-featured iOS and Android apps so you can monitor KPIs on the go." },
  { icon: Users, title: "Team Workspaces", description: "Organize teams with shared dashboards, custom roles, and collaboration tools." },
  { icon: TrendingUp, title: "Smart Alerts", description: "AI-powered alerts notify you of anomalies, milestones, and trends before they escalate." },
  { icon: Shield, title: "Data Governance", description: "Complete data lineage, quality monitoring, and compliance controls in one place." },
  { icon: Zap, title: "API & Webhooks", description: "RESTful API and webhooks for building custom integrations and automations." },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={featuresHero} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Zap size={14} className="text-primary" />
              <span className="text-sm text-muted-foreground">50+ Powerful Features</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Built for Teams That{" "}
              <span className="text-gradient-gold">Demand More</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every feature in NovaPulse is designed to help you move faster, understand deeper, and grow stronger. Here's what makes us the platform of choice for 2,500+ companies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Features - Detailed */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {mainFeatures.map((feature, i) => (
            <AnimatedSection key={feature.title} className="mb-20 last:mb-0" direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon size={28} className="text-primary" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">{feature.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`rounded-2xl bg-gradient-card border border-border p-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video rounded-xl bg-background/50 border border-border flex items-center justify-center">
                    <feature.icon size={64} className="text-primary/30" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              And <span className="text-gradient-gold">So Much More</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From data governance to mobile apps, we've got every angle covered.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.05}>
                <div className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Integrates With Your <span className="text-gradient-gold">Entire Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Connect NovaPulse with 200+ tools you already use. Salesforce, HubSpot, Stripe, Slack, Google Analytics, and more — with zero-code setup.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Salesforce", "HubSpot", "Stripe", "Slack", "Zapier", "Segment", "Snowflake", "BigQuery", "Google Analytics", "Shopify", "Intercom", "Twilio"].map((tool) => (
                <span key={tool} className="px-5 py-3 rounded-xl bg-secondary border border-border text-sm text-muted-foreground font-medium hover:text-foreground hover:border-primary/30 transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-10 text-primary font-semibold hover:gap-3 transition-all">
              See All Integrations <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Features;
