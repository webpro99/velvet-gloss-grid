import {
  Layers, BarChart3, FileCode, Globe, Truck, Shield, ArrowRight, CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

const useCases = [
  {
    icon: Shield,
    title: "Account Management Dashboards",
    subtitle: "User authentication, role management & activity tracking",
    description: "Build custom dashboards for account administration with user authentication, account creation/editing, role management and activity tracking. Avoid the limitations of off-the-shelf products.",
    benefits: [
      "Customizable dashboards with widgets for user auth and role management",
      "Seamless integration with databases, CRM systems and third-party APIs",
      "User-friendly interface reduces technical barriers for non-developers",
      "Granular access controls and audit logs for security",
    ],
    widgets: "Table, Form, Chart",
    teams: "IT, HR, Customer Support",
  },
  {
    icon: Layers,
    title: "Admin Panels",
    subtitle: "Manage data from any database or SaaS tool",
    description: "Create memberships on MongoDB, update customer details on Salesforce, or delete outdated CMS content — in minutes. OneApp includes ready connectors, built-in CRUD operations and a growing library of widgets.",
    benefits: [
      "Connect to PostgreSQL, MongoDB, Snowflake, S3, Airtable, REST or GraphQL in minutes",
      "Bind data to widgets with built-in CRUD functionality",
      "Write JavaScript anywhere to extend functionality — or just drag and drop",
      "Version control via Git and one-click cloud deployments",
    ],
    widgets: "Tables, Forms, Buttons, Charts, Modals, Tabs",
    teams: "Engineering, Operations, Product",
  },
  {
    icon: FileCode,
    title: "CRUD Front-Ends",
    subtitle: "User-friendly interfaces for your databases",
    description: "Connect your Postgres, MongoDB, S3 or Google Sheets, choose your table and click 'Generate New Page' to get a working app. Style with out-of-the-box themes or write custom code.",
    benefits: [
      "Auto-generate CRUD pages from any connected data source",
      "45+ widgets for building interactive interfaces",
      "JavaScript editor for dynamic updates and custom logic",
      "Deploy to cloud or on-prem platforms",
    ],
    widgets: "Tables, Forms, JSON Forms, Inputs, Selects, Buttons",
    teams: "Developers, Data Teams",
  },
  {
    icon: BarChart3,
    title: "Dashboards & BI",
    subtitle: "Visualize and interact with data from any source",
    description: "Get a dashboard for any team in under thirty minutes using ready connectors, a query IDE and a library of widgets. Bind data from multiple sources to the same widgets.",
    benefits: [
      "Drill-down views and role-based access on different pages",
      "Connect multiple databases and APIs to one dashboard",
      "Ready templates: sales analytics, customer support panels",
      "Eliminate boilerplate while keeping full customization",
    ],
    widgets: "Charts, Tables, Progress, Gauges, Map Charts, Sliders",
    teams: "Analytics, Sales, Executive",
  },
  {
    icon: Globe,
    title: "Portals",
    subtitle: "External-facing apps for partners & customers",
    description: "Build partner portals, community engagement portals, employee feedback systems or multi-warehouse inventory portals in less than thirty minutes. Join data from multiple tables and services.",
    benefits: [
      "Ready insert, update and delete queries for each datasource",
      "Expose portals to thousands of users or a handful",
      "Deploy via OneApp cloud or your preferred hosting platform",
      "Templates for order management, inventory and IT asset tracking",
    ],
    widgets: "Tables, Lists, Forms, Charts, File Pickers, Modals",
    teams: "Customer Success, Partners, Operations",
  },
  {
    icon: Truck,
    title: "Trackers",
    subtitle: "Monitor orders, expenses, applicants & more",
    description: "Replace spreadsheets with production-grade tracking apps. Ready connectors to Google Sheets and databases enable interactive data access. Automatic read/write triggers update records as events occur.",
    benefits: [
      "Granular access controls: department, seniority, ownership",
      "Interactive UI that spreadsheets can't provide",
      "Automatic triggers for real-time data updates",
      "Fork templates: applicant trackers, time trackers, IT asset trackers",
    ],
    widgets: "Tables, Lists, Date Pickers, Checkboxes, Charts, Search",
    teams: "HR, Finance, Logistics, Operations",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What Can You Build with{" "}
              <span className="text-gradient-gold">OneApp?</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From admin panels to customer portals, OneApp handles entire categories of internal tools. Here's how teams use it to ship faster and eliminate boilerplate.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            {useCases.map((uc, i) => (
              <AnimatedSection key={uc.title}>
                <div className="rounded-2xl bg-gradient-card border border-border overflow-hidden hover:border-primary/20 transition-all">
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <uc.icon size={28} className="text-primary" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-foreground">{uc.title}</h2>
                        <p className="text-sm text-muted-foreground mt-1">{uc.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">{uc.description}</p>

                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {uc.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs">
                      <div className="px-3 py-1.5 rounded-full bg-secondary border border-border">
                        <span className="text-muted-foreground">Widgets: </span>
                        <span className="text-foreground font-medium">{uc.widgets}</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-secondary border border-border">
                        <span className="text-muted-foreground">Teams: </span>
                        <span className="text-foreground font-medium">{uc.teams}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Real-world stories */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How teams use <span className="text-gradient-gold">OneApp</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real workflows running in production — built by business teams, approved by IT.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                tag: "Procurement portal",
                story: "The procurement team builds an intake form for purchase requests. Submissions trigger a multi-level approval workflow in OneFlow with 48-hour SLAs. Approved requests auto-generate POs. All documents filed in OneDoc.",
                outcome: "Runs for a year with zero IT changes — the business team updates the form themselves.",
              },
              {
                tag: "HR case management",
                story: "An HR analyst builds a case-tracking app with a dashboard, detail page, and document viewer. Employees see only their own cases; managers see their team; HR admins see everything — all controlled in OneApp's permission screen.",
                outcome: "Every view is logged with IP and timestamp for compliance audits.",
              },
              {
                tag: "Field engineering KB",
                story: "Operations manuals, safety procedures, and incident reports are uploaded into OneApp's AI knowledge base. Engineers ask in natural language: \"What's the shutdown procedure for Unit 3?\" Every answer cites its source.",
                outcome: "PII auto-masked. Contractors see public manuals only; staff engineers see everything.",
              },
            ].map((s, i) => (
              <AnimatedSection key={s.tag} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all h-full flex flex-col">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider self-start mb-4">
                    {s.tag}
                  </span>
                  <p className="text-foreground leading-relaxed mb-4 flex-1">{s.story}</p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic">→ {s.outcome}</p>
                  </div>
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
              Start Building Your{" "}
              <span className="text-gradient-gold">Use Case Today</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Pick a template, connect your data, and ship a production-ready internal tool in minutes — not weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-gold"
              >
                Try OneApp Free <ArrowRight size={18} />
              </Link>
              <Link
                to="/templates"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Browse Templates
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
