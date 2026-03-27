import {
  Users, BarChart3, FileText, MessageSquare, Package, Monitor,
  DollarSign, Calendar, Truck, ShoppingBag, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

const templates = [
  {
    icon: Users,
    title: "Applicant Tracker",
    description: "A recruiting application that captures job applications, lets reviewers examine candidate CVs, schedules interviews via Google Calendar, and collects feedback. Centralizes the hiring pipeline to prevent applications from falling through the cracks.",
    tags: ["HR", "Recruiting", "Calendar"],
  },
  {
    icon: BarChart3,
    title: "Business Analytics Dashboard",
    description: "A unified dashboard for pulling data from various sources to analyze metrics across all business units. View and edit records and visualize data using charts and progress indicators.",
    tags: ["Analytics", "BI", "Charts"],
  },
  {
    icon: FileText,
    title: "Content Management System",
    description: "Manage and upload academic content — text, videos and quizzes — with intuitive modules and subject organization. Perfect for instructors and curriculum designers.",
    tags: ["CMS", "Education", "Content"],
  },
  {
    icon: MessageSquare,
    title: "Customer Messaging Tool",
    description: "Select groups of clients from a customer table, compose messages and send WhatsApp or SMS notifications through the Twilio integration. Built for outreach at scale.",
    tags: ["Messaging", "Twilio", "CRM"],
  },
  {
    icon: Package,
    title: "Inventory Management Dashboard",
    description: "A multi-warehouse inventory system that tracks products, manages suppliers, and handles stock transfers, purchase orders and reorder points across all locations.",
    tags: ["Inventory", "Supply Chain", "Warehousing"],
  },
  {
    icon: Monitor,
    title: "IT Asset Tracker",
    description: "Track company assets, assign devices to employees, mark assets for maintenance and view statistics on total and returned items. Full lifecycle management.",
    tags: ["IT", "Asset Tracking", "Devices"],
  },
  {
    icon: DollarSign,
    title: "Loan Approval App",
    description: "An end-to-end loan management application where lenders view borrower applications, check credit scores, upload documents and disburse approved loans with role-based authentication.",
    tags: ["Finance", "Lending", "Auth"],
  },
  {
    icon: Calendar,
    title: "Meeting Scheduler",
    description: "A Calendly-style scheduler that connects to Google Calendar. Users set availability, create custom meeting durations and allow customers or colleagues to book meetings easily.",
    tags: ["Scheduling", "Calendar", "Booking"],
  },
  {
    icon: Truck,
    title: "Order Fulfillment Tracker",
    description: "A logistics tool that helps warehouses pick items, print invoices and labels, manage returns and track delivery status — end-to-end order lifecycle management.",
    tags: ["Logistics", "Orders", "Shipping"],
  },
  {
    icon: ShoppingBag,
    title: "Product Catalog",
    description: "A simple CRUD application to create, update, delete and list products with easy data source swapping. Perfect starting point for e-commerce internal tools.",
    tags: ["E-Commerce", "CRUD", "Products"],
  },
];

const Templates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Package size={14} className="text-primary" />
              <span className="text-sm text-muted-foreground">Ready-Made Starter Kits</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Start with a{" "}
              <span className="text-gradient-gold">Template</span>,
              Ship in Minutes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Fork any starter kit, connect your data, and customize to your needs. Each template is a production-ready app you can deploy immediately.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {templates.map((template, i) => (
              <AnimatedSection key={template.title} delay={i * 0.05}>
                <div className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <template.icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">{template.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {template.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{template.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all self-start"
                  >
                    Use This Template <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See What You Need?"
        subtitle="Build any internal tool from scratch with OneApp's drag-and-drop builder. Or request a custom template from our team."
      />
      <Footer />
    </div>
  );
};

export default Templates;
