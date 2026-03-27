import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, X, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting started with analytics. All the essentials without the complexity.",
    features: [
      "Up to 5 team members",
      "10,000 events/month",
      "5 custom dashboards",
      "7-day data retention",
      "Email support",
      "Basic integrations",
      "Standard reports",
      "Mobile app access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For growing teams that need advanced analytics, AI insights, and deeper integrations.",
    features: [
      "Up to 25 team members",
      "500,000 events/month",
      "Unlimited dashboards",
      "90-day data retention",
      "Priority support",
      "All integrations",
      "AI-powered insights",
      "Custom reports & alerts",
      "API access",
      "Team workspaces",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations requiring unlimited scale, dedicated support, and custom solutions.",
    features: [
      "Unlimited team members",
      "Unlimited events",
      "Unlimited dashboards",
      "Unlimited data retention",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced AI & ML",
      "White-label options",
      "SLA guarantee",
      "On-premise deployment",
      "Custom training",
      "Priority engineering",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Team Members", starter: "5", pro: "25", enterprise: "Unlimited" },
  { feature: "Monthly Events", starter: "10K", pro: "500K", enterprise: "Unlimited" },
  { feature: "Dashboards", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Data Retention", starter: "7 days", pro: "90 days", enterprise: "Unlimited" },
  { feature: "AI Insights", starter: false, pro: true, enterprise: true },
  { feature: "Custom Reports", starter: false, pro: true, enterprise: true },
  { feature: "API Access", starter: false, pro: true, enterprise: true },
  { feature: "SSO / SAML", starter: false, pro: false, enterprise: true },
  { feature: "White Label", starter: false, pro: false, enterprise: true },
  { feature: "Dedicated Support", starter: false, pro: false, enterprise: true },
];

const faqs = [
  {
    question: "Can I switch plans at any time?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference. No lock-in contracts, no cancellation fees.",
  },
  {
    question: "What happens after my 14-day free trial?",
    answer: "After your trial ends, you can choose any plan that fits your needs. Your data and dashboards are preserved — nothing is lost. If you don't choose a plan, your account will be paused until you're ready.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes! When you choose annual billing, you save 20% compared to monthly pricing. That's essentially getting 2+ months free. Contact our team for custom volume discounts on Enterprise plans.",
  },
  {
    question: "What integrations are included?",
    answer: "The Starter plan includes our most popular integrations (Google Analytics, Stripe, Shopify). Professional and Enterprise plans include all 200+ integrations, including Salesforce, HubSpot, Snowflake, and more.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We're SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Enterprise customers also get options for on-premise deployment and custom security configurations.",
  },
  {
    question: "Can I get a demo before purchasing?",
    answer: "Of course! Our team offers personalized demos where we walk you through the platform using your actual data scenarios. Book a demo through our contact page, and we'll have you set up within 24 hours.",
  },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent{" "}
              <span className="text-gradient-gold">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No surprise charges. Choose the plan that fits your team and start making data-driven decisions today. All plans include a 14-day free trial.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div
                  className={`relative p-8 rounded-2xl border h-full flex flex-col ${
                    plan.popular
                      ? "bg-gradient-card border-primary/50 shadow-gold"
                      : "bg-gradient-card border-border hover:border-primary/20"
                  } transition-all`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-gold text-primary-foreground text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full text-center py-3.5 rounded-lg font-semibold text-sm transition-all ${
                      plan.popular
                        ? "bg-gradient-gold text-primary-foreground hover:opacity-90 hover:shadow-gold"
                        : "border border-border text-foreground hover:bg-secondary"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compare <span className="text-gradient-gold">Plans</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">Feature</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Starter</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-primary">Professional</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className="border-b border-border/50">
                      <td className="py-4 px-4 text-sm text-muted-foreground">{row.feature}</td>
                      {["starter", "pro", "enterprise"].map((plan) => {
                        const val = row[plan as keyof typeof row];
                        return (
                          <td key={plan} className="text-center py-4 px-4">
                            {typeof val === "boolean" ? (
                              val ? (
                                <CheckCircle2 size={18} className="text-primary mx-auto" />
                              ) : (
                                <X size={18} className="text-muted-foreground/30 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-foreground">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="rounded-2xl bg-gradient-card border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    {openFaq === i ? (
                      <ChevronUp size={20} className="text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Still Not Sure? <span className="text-gradient-gold">Talk to Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Our team will help you find the perfect plan for your business. No pressure, just honest advice.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-gold"
            >
              Schedule a Demo
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
