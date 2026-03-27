import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = "Ready to Transform Your Business?",
  subtitle = "Join 2,500+ companies already using NovaPulse to drive growth. Start your free 14-day trial — no credit card required.",
  buttonText = "Start Your Free Trial",
  buttonLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={buttonLink}
              className="px-8 py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold text-base hover:opacity-90 transition-all hover:shadow-gold"
            >
              {buttonText}
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
