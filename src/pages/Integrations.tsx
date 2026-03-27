import { useState } from "react";
import { Database, Cloud, MessageSquare, Brain, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

const tabs = ["All", "Databases", "Storage", "SaaS & Communication", "Developer & AI"];

const integrations = [
  // Databases
  { name: "PostgreSQL", category: "Databases", desc: "Connect to PostgreSQL databases with native driver support." },
  { name: "MongoDB", category: "Databases", desc: "Query and manage MongoDB collections natively." },
  { name: "MySQL", category: "Databases", desc: "Full MySQL support with query builder and raw SQL." },
  { name: "Microsoft SQL Server", category: "Databases", desc: "Enterprise SQL Server connectivity." },
  { name: "Oracle", category: "Databases", desc: "Oracle database integration for enterprise systems." },
  { name: "Redis", category: "Databases", desc: "In-memory data store for caching and real-time data." },
  { name: "Snowflake", category: "Databases", desc: "Cloud data warehouse for analytics workloads." },
  { name: "Redshift", category: "Databases", desc: "Amazon Redshift data warehouse connector." },
  { name: "Databricks", category: "Databases", desc: "Unified analytics platform connector." },
  { name: "Firestore", category: "Databases", desc: "Google Cloud Firestore document database." },
  { name: "Elasticsearch", category: "Databases", desc: "Full-text search and analytics engine." },
  { name: "Supabase", category: "Databases", desc: "Open-source Firebase alternative with Postgres." },
  { name: "Neo4j", category: "Databases", desc: "Graph database for connected data queries." },
  { name: "DynamoDB", category: "Databases", desc: "AWS NoSQL database service." },
  { name: "Neon", category: "Databases", desc: "Serverless Postgres for modern apps." },
  { name: "GraphQL", category: "Databases", desc: "Query any GraphQL endpoint as a data source." },
  // Storage
  { name: "Amazon S3", category: "Storage", desc: "Manage buckets and objects for file uploads and downloads." },
  { name: "Dropbox", category: "Storage", desc: "Access files stored in Dropbox accounts." },
  { name: "Google Docs", category: "Storage", desc: "Embed and edit Google Documents." },
  // SaaS
  { name: "Airtable", category: "SaaS & Communication", desc: "Spreadsheet-database hybrid for flexible data management." },
  { name: "Slack", category: "SaaS & Communication", desc: "Send messages and manage Slack workspaces." },
  { name: "Microsoft Teams", category: "SaaS & Communication", desc: "Integrate with Teams for notifications and workflows." },
  { name: "HubSpot", category: "SaaS & Communication", desc: "CRM and marketing automation integration." },
  { name: "Salesforce", category: "SaaS & Communication", desc: "Enterprise CRM connector for leads and accounts." },
  { name: "Zendesk", category: "SaaS & Communication", desc: "Customer support ticket management." },
  { name: "Jira", category: "SaaS & Communication", desc: "Project and issue tracking integration." },
  { name: "Notion", category: "SaaS & Communication", desc: "Workspace and knowledge base connector." },
  { name: "Trello", category: "SaaS & Communication", desc: "Board and card management integration." },
  { name: "Monday.com", category: "SaaS & Communication", desc: "Work management platform connector." },
  { name: "Intercom", category: "SaaS & Communication", desc: "Customer messaging and support platform." },
  { name: "Asana", category: "SaaS & Communication", desc: "Task and project management integration." },
  { name: "SharePoint", category: "SaaS & Communication", desc: "Microsoft SharePoint document management." },
  // Developer & AI
  { name: "OpenAI", category: "Developer & AI", desc: "GPT models for text generation and AI features." },
  { name: "Anthropic", category: "Developer & AI", desc: "Claude AI for advanced language model tasks." },
  { name: "Google AI", category: "Developer & AI", desc: "Gemini and PaLM models for AI-powered features." },
  { name: "AWS Lambda", category: "Developer & AI", desc: "Serverless function execution in the cloud." },
  { name: "Stripe", category: "Developer & AI", desc: "Payment processing and subscription management." },
  { name: "Twilio", category: "Developer & AI", desc: "SMS, WhatsApp, and voice messaging APIs." },
  { name: "SMTP", category: "Developer & AI", desc: "Send emails from any SMTP server." },
  { name: "n8n", category: "Developer & AI", desc: "Workflow automation and orchestration." },
  { name: "REST API", category: "Developer & AI", desc: "Generic HTTP connector for any REST service." },
  { name: "Amplitude", category: "Developer & AI", desc: "Product analytics and event tracking." },
  { name: "Mixpanel", category: "Developer & AI", desc: "User analytics and behavioral insights." },
];

const categoryIcons: Record<string, typeof Database> = {
  Databases: Database,
  Storage: Cloud,
  "SaaS & Communication": MessageSquare,
  "Developer & AI": Brain,
};

const Integrations = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = integrations.filter((i) => {
    const matchesTab = activeTab === "All" || i.category === activeTab;
    const matchesSearch = i.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Database size={14} className="text-primary" />
              <span className="text-sm text-muted-foreground">30+ Native Connectors</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Connect to{" "}
              <span className="text-gradient-gold">Any Datasource</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              OneApp connects instantly to popular databases, SaaS services, AI providers, and APIs. No custom drivers. No boilerplate. Just plug in and start building.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search & Tabs */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative mb-8">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((integration, i) => {
              const Icon = categoryIcons[integration.category] || Database;
              return (
                <AnimatedSection key={integration.name} delay={Math.min(i * 0.02, 0.3)}>
                  <div className="group p-5 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon size={16} className="text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground text-sm">{integration.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{integration.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No integrations found. Try a different search.</p>
            </div>
          )}

          {/* Generic REST */}
          <AnimatedSection className="text-center mt-16 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Don't see your service? OneApp also exposes a{" "}
              <span className="text-primary font-semibold">generic REST API connector</span>{" "}
              to integrate with any service not yet covered natively.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
            >
              Request an Integration <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Integrations;
