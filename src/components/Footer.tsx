import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">N</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">NovaPulse</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The premium analytics platform that transforms raw data into strategic decisions. Trusted by 2,500+ companies worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Product</h4>
            <div className="flex flex-col gap-3">
              <Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
              <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</Link>
              <span className="text-sm text-muted-foreground">Integrations</span>
              <span className="text-sm text-muted-foreground">API Docs</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <span className="text-sm text-muted-foreground">Careers</span>
              <span className="text-sm text-muted-foreground">Blog</span>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <span className="text-sm text-muted-foreground">Press Kit</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">Get the latest updates and insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-2.5 rounded-lg bg-gradient-gold text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 NovaPulse. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
