import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck, KeyRound, ScrollText, Brain, BadgeCheck, Wand2, Boxes,
  Lock, Eye, FileLock2, AlertTriangle, ArrowRight, CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import enterpriseHero from "@/assets/enterprise-hero.jpg";

const pillars = [
  {
    icon: KeyRound,
    title: "Enterprise Identity, Out of the Box",
    points: [
      "Azure AD SSO with MSAL, CSRF protection, and code-reuse detection",
      "Just-in-time user provisioning with safe defaults (zero roles until granted)",
      "Local login with JWT (24h expiry) and JTI blacklist on logout",
      "Every credential secret stored in HashiCorp Vault — not env files",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Four-Tier Granular Permissions",
    points: [
      "Global → Workspace → Application → Page level controls",
      "Three independent bits per scope: view, edit, raw IDE access",
      "Grants by user OR role with automatic union of permissions",
      "One model governs apps, forms, dashboards, AI assistants & docs",
    ],
  },
  {
    icon: ScrollText,
    title: "Immutable Audit Log",
    points: [
      "Captures user, IP, user-agent, and roles snapshotted at action time",
      "Tracks workspace opens, app opens, edits, IDE access, permission changes",
      "Filter by 30-day windows, sort by 6 keys, export for compliance",
      "Compliance audits stop being a project — they become a query",
    ],
  },
  {
    icon: Brain,
    title: "Built-in AI Knowledge Base",
    points: [
      "5-stage RAG: parse, chunk, enrich (PII + entities), embed, index",
      "Swap providers (OpenAI, Anthropic, Azure OpenAI) and embedding models",
      "Per-document access policies — AI only answers from allowed content",
      "Every query logged with access decisions, denial reasons & latency",
    ],
  },
  {
    icon: BadgeCheck,
    title: "License Management That Enforces",
    points: [
      "Seat-based licensing with live validation on every write",
      "Dashboard: max users, current count, seats available, expiry",
      "Login-page setup card surfaces config — no hidden admin pages",
      "Hit your limit? User creation blocks with a clear error",
    ],
  },
  {
    icon: Wand2,
    title: "First-Run Setup Wizard",
    points: [
      "Two-section accordion with status badges (Configured / Optional)",
      "Walks admins through SMTP / Microsoft Graph email setup",
      "Guided Azure AD configuration, no scavenger hunts",
      "Every secret written to Vault — not scattered across configs",
    ],
  },
  {
    icon: Boxes,
    title: "Cross-Module Integration Glue",
    points: [
      "Forms in OneApp trigger workflows in OneFlow automatically",
      "Files uploaded route to OneDoc with full versioning",
      "Pages embed OneChat assistants respecting OneApp permissions",
      "One identity, one permission model, one audit log — platform-wide",
    ],
  },
];

const securityChecklist = [
  { icon: Lock, label: "Azure AD SSO with CSRF protection & code-reuse detection" },
  { icon: KeyRound, label: "JWT tokens with 24-hour expiry and JTI blacklist on logout" },
  { icon: ShieldCheck, label: "4-tier RBAC at global / workspace / application / page levels" },
  { icon: ScrollText, label: "Immutable audit log with IP, user-agent, and role snapshots" },
  { icon: FileLock2, label: "Vault-encrypted secrets — AI keys, Azure creds, email passwords" },
  { icon: Lock, label: "AES-256 fallback encryption for environments without Vault" },
  { icon: BadgeCheck, label: "Seat-based license enforcement on every write operation" },
  { icon: Eye, label: "Per-document access policies for AI queries" },
  { icon: AlertTriangle, label: "PII detection and masking at ingestion" },
  { icon: Lock, label: "No-cache headers on sensitive admin endpoints" },
];

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <ShieldCheck size={14} className="text-primary" />
                <span className="text-sm text-muted-foreground">IT-Approved Low-Code</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Build apps fast.{" "}
                <span className="text-gradient-gold">Deploy with the SSO,</span>{" "}
                permissions, and audit your security team demands.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Most low-code tools build the app — but stall the moment security looks at it.
                OneApp ships with Azure AD SSO, four-tier RBAC, immutable audit logs, AI governance,
                and Vault-backed secrets. Production code, running today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-gold">
                  Book a Demo <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
                  See Plans
                </Link>
              </div>
            </AnimatedSection>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-border/50">
                <img
                  src={enterpriseHero}
                  alt="OneApp Enterprise Security & Audit Dashboard"
                  width={1280}
                  height={896}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <AnimatedSection direction="left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                The gap between <span className="text-gradient-violet">"low-code"</span> and{" "}
                <span className="text-gradient-gold">"enterprise-ready"</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Operations wants an inventory tracker. HR wants an employee request portal.
                Finance wants a dashboard pulling from three databases. You could build it all
                in days — until your security team asks the questions that stall every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                So you either pay enterprise prices for Power Apps, or you wait six months for
                an in-house build. <span className="text-foreground font-semibold">OneApp is the third option.</span>
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-2xl bg-gradient-card border border-border p-8 space-y-4">
                {[
                  "How does this integrate with Azure AD?",
                  "Who audits who opened what?",
                  "What permissions can we assign per page?",
                  "Where's the user activity log for compliance?",
                ].map((q) => (
                  <div key={q} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                    <AlertTriangle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground italic">"{q}"</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 7 Pillars */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What makes OneApp <span className="text-gradient-gold">different</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Seven enterprise capabilities most low-code platforms charge a premium for — built in.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <div className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <p.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground pt-2">{p.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security checklist */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Security & <span className="text-gradient-gold">Control</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              MFA enforced through your Azure AD policies — your existing rules apply automatically.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-3">
            {securityChecklist.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.03}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed pt-1.5">{item.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Plays well with stack */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Plays well with the rest of your <span className="text-gradient-violet">stack</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "OneFlow", desc: "Forms trigger workflows; task pages open inside OneApp." },
              { name: "OneDoc", desc: "Files uploaded through forms file into OneDoc automatically." },
              { name: "OneChat", desc: "Embed AI assistants in any page, respecting platform permissions." },
              { name: "Microsoft 365", desc: "Azure AD for identity, Microsoft Graph for email." },
              { name: "HashiCorp Vault", desc: "All secrets — AI keys, credentials — vaulted by default." },
              { name: "40+ databases", desc: "PostgreSQL, MongoDB, MySQL, Snowflake, REST, GraphQL." },
            ].map((s) => (
              <AnimatedSection key={s.name}>
                <div className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all h-full">
                  <h3 className="font-display font-bold text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Stop paying enterprise prices for basics."
        subtitle="30 minutes. We'll build an app with you — one you actually need. Walk away with a working prototype and a clear picture of what OneApp can replace in your stack."
      />
      <Footer />
    </div>
  );
};

export default Enterprise;
