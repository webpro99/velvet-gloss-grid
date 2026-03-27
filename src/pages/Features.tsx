import { useState } from "react";
import {
  Table2, BarChart3, Image, FileText, Globe, List, Map, Mic, Camera, CheckSquare,
  ScanLine, DollarSign, Calendar, Upload, Type, Phone, RadioTower, TextCursorInput,
  ToggleLeft, TreePine, Columns, Minus, FileInput, Layers, PanelTop, MousePointerClick,
  SlidersHorizontal, Star, ArrowRight, ChevronDown, ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

const widgetCategories = [
  {
    category: "Display & Data Widgets",
    description: "Visualize and present data beautifully",
    widgets: [
      { icon: Table2, name: "Table", desc: "Displays tabular data from any API or database with pagination, filtering and row actions. Sort and edit rows without writing code." },
      { icon: BarChart3, name: "Chart", desc: "Visualize KPIs with configurable bar, line, pie and other chart types for dashboards and BI panels." },
      { icon: Image, name: "Audio / Video / Image", desc: "Embed media files directly into your apps — preview audio clips, watch videos or display images." },
      { icon: FileText, name: "Document Viewer", desc: "Show PDFs or documents within your app, enabling quick file previews without leaving the interface." },
      { icon: Globe, name: "iFrame", desc: "Embed external web pages or apps in a sandboxed frame for seamless third-party content." },
      { icon: List, name: "List", desc: "Render collections of items with custom layouts — ideal for cards, feeds or menus." },
      { icon: Map, name: "Map Chart", desc: "Plot geographic data on interactive maps for visualizing locations or regions." },
    ],
  },
  {
    category: "Input Widgets",
    description: "Collect data from users with validation",
    widgets: [
      { icon: Mic, name: "Audio Recorder", desc: "Capture voice notes from users directly in the browser." },
      { icon: Camera, name: "Camera", desc: "Take photos via webcam or device camera for uploading images." },
      { icon: CheckSquare, name: "Checkbox / Checkbox Group", desc: "Collect boolean choices or multiple selections from users." },
      { icon: ScanLine, name: "Code Scanner", desc: "Use the device camera to scan barcodes or QR codes and populate fields automatically." },
      { icon: DollarSign, name: "Currency Input", desc: "Accept numeric currency values with automatic formatting and validation." },
      { icon: Calendar, name: "Date Picker", desc: "Select single dates or date ranges from a calendar component." },
      { icon: Upload, name: "File Picker", desc: "Upload files from the user's device and pass them to APIs or database queries." },
      { icon: Type, name: "Input", desc: "Standard text field for user input with configurable validation." },
      { icon: TextCursorInput, name: "Rich Text Editor", desc: "WYSIWYG editor for formatted text — bold, lists, links, and more." },
      { icon: Phone, name: "Phone Input", desc: "Format and validate phone numbers with country code support." },
      { icon: RadioTower, name: "Radio Group", desc: "Present a group of mutually exclusive options." },
      { icon: ToggleLeft, name: "Switch / Switch Group", desc: "Toggle switches for on/off states, singly or in groups." },
      { icon: TreePine, name: "Tree Select", desc: "Dropdown with hierarchical tree options — ideal for nested data." },
    ],
  },
  {
    category: "Layout Widgets",
    description: "Structure and organize your interface",
    widgets: [
      { icon: Columns, name: "Container", desc: "Group widgets together and allow nested layouts to structure the interface." },
      { icon: Minus, name: "Divider", desc: "Insert horizontal lines to visually separate sections." },
      { icon: FileInput, name: "Form / JSON Form", desc: "Generate forms from schemas to collect user input and validate data." },
      { icon: Layers, name: "Modal", desc: "Create overlay dialogs for confirmations, forms or additional information." },
      { icon: Tabs, name: "Tabs", desc: "Organize content into multiple tab panels for cleaner navigation." },
    ],
  },
  {
    category: "Action & Misc Widgets",
    description: "Trigger operations and capture feedback",
    widgets: [
      { icon: MousePointerClick, name: "Button / Button Group", desc: "Trigger queries, APIs or workflows when clicked. Includes icon and menu button variants." },
      { icon: SlidersHorizontal, name: "Number / Range Slider", desc: "Let users select numeric values by sliding a handle along a track." },
      { icon: Star, name: "Rating", desc: "Collect star ratings from users for feedback and reviews." },
      { icon: Map, name: "Interactive Map", desc: "Integrate interactive maps for location display, selection and geocoding." },
    ],
  },
];

const Features = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Layers size={14} className="text-primary" />
              <span className="text-sm text-muted-foreground">45+ Drag-and-Drop Widgets</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Drag, Drop &{" "}
              <span className="text-gradient-gold">Build Faster</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              OneApp provides a comprehensive library of pre-built widgets to assemble responsive internal tools. From tables and charts to forms and maps — everything is ready to use.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Widget Categories */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-6">
            {widgetCategories.map((cat, catIdx) => (
              <AnimatedSection key={cat.category} delay={catIdx * 0.05}>
                <div className="rounded-2xl bg-gradient-card border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenCategory(openCategory === catIdx ? null : catIdx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-secondary/30 transition-colors"
                  >
                    <div>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{cat.category}</h2>
                      <p className="text-sm text-muted-foreground mt-1">{cat.description} • {cat.widgets.length} widgets</p>
                    </div>
                    {openCategory === catIdx ? (
                      <ChevronUp size={24} className="text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown size={24} className="text-muted-foreground flex-shrink-0" />
                    )}
                  </button>

                  {openCategory === catIdx && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cat.widgets.map((w) => (
                        <div key={w.name} className="group p-5 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                            <w.icon size={20} className="text-primary" />
                          </div>
                          <h3 className="font-display font-semibold text-foreground mb-1 text-sm">{w.name}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Widgets */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Something Custom? <span className="text-gradient-gold">Build It</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              If none of the 45+ widgets meet your requirements, build a fully custom widget using JavaScript, HTML and CSS. OneApp lets you register custom widgets that behave like native components — with full access to the platform's data binding and event system.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-gold"
            >
              Start Building <ArrowRight size={18} />
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
