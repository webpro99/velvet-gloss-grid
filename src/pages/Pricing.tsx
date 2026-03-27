import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, X, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Community",
    price: "Free",
    period: "",
    description: "Open-source and free forever. Perfect for individual developers and small teams getting started with internal tools.",
    features: [
      "Unlimited apps",
      "5 team members",
      "All 45+ widgets",
      "Core integrations",
      "Git version control",
      "Community support",
      "Self-hosted deployment",
      "Custom widgets",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Business",
    price: "$49",
    period: "/user/month",
    description: "For growing teams that need advanced access controls, priority support, and enterprise integrations.",
    features: [
      "Everything in Community",
      "Unlimited team members",
      "SSO / SAML authentication",
      "Granular access controls",
      "Audit logs",
      "Priority email support",
      "OneApp Cloud hosting",
      "Custom branding",
      "Advanced integrations",
      "Environments (dev/staging/prod)",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations needing dedicated infrastructure, SLA guarantees, and hands-on onboarding.",
    features: [
      "Everything in Business",
      "Dedicated instance",
      "99.99% uptime SLA",
      "Dedicated account manager",
      "Custom training & onboarding",
      "Air-gapped deployment",
      "HIPAA & SOC 2 compliance",
      "Custom integrations",
      "Premium support (< 1hr SLA)",
      "Architecture review",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Team Members", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Apps", starter: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Widgets", starter: "45+", pro: "45+", enterprise: "45+ & Custom" },
  { feature: "Self-Hosting", starter: true, pro: true, enterprise: true },
  { feature: "Cloud Hosting", starter: false, pro: true, enterprise: true },
  { feature: "SSO / SAML", starter: false, pro: true, enterprise: true },
  { feature: "Audit Logs", starter: false, pro: true, enterprise: true },
  { feature: "Environments", starter: false, pro: true, enterprise: true },
  { feature: "Uptime SLA", starter: false, pro: false, enterprise: true },
  { feature: "Dedicated Support", starter: false, pro: false, enterprise: true },
];

const faqs = [
  {
    question: "Is OneApp really free?",
    answer: "Yes! The Community edition is free and open-source forever. You can self-host it on your own infrastructure with no limits on the number of apps you build. The Business and Enterprise plans add team collaboration, access controls, and managed hosting.",
  },
  {
    question: "Can I self-host OneApp?",
    answer: "Absolutely. OneApp supports Docker, Kubernetes, and AWS/GCP/Azure deployments. The Community edition is fully self-hostable. Enterprise customers can also opt for air-gapped deployments for maximum security.",
  },
  {
    question: "What integrations are included?",
    answer: "All plans include core database connectors (PostgreSQL, MongoDB, MySQL, etc.) and the REST API connector. Business and Enterprise plans unlock premium connectors like Salesforce, Snowflake, and AI services (OpenAI, Anthropic).",
  },
  {
    question: "How does pricing work for teams?",
    answer: "Community is free for up to 5 team members. Business pricing is per-user per-month. Enterprise pricing is custom based on your organization's needs — contact our sales team for a quote.",
  },
  {
    question: "Do you offer a free trial for paid plans?",
    answer: "Yes! The Business plan comes with a 14-day free trial with full access to all features. No credit card required. Enterprise trials are available on request with a personalized demo.",
  },
  {
    question: "Can I migrate from Appsmith or Retool?",
    answer: "Yes. OneApp is based on the Appsmith codebase, so migration is straightforward. Our team provides hands-on migration support for Business and Enterprise customers to ensure a smooth transition.",
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
              Start free and scale as your team grows. No hidden fees. Open-source core with premium add-ons for teams that need more.
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
                    className={`w-full text-center py-3.5 rounded-lg font-semibold text-sm transition-all block ${
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
                    <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">Community</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-primary">Business</th>
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
              Our team will help you find the perfect plan and show you OneApp in action with a personalized demo.
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
