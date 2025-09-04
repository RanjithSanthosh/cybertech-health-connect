import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import LoginModal from "./LoginModal";

const PricingSection = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small clinics and diagnostic centers",
      features: [
        "Up to 100 scans per month",
        "Basic AI analysis",
        "48-hour turnaround",
        "Email support",
        "HIPAA compliance",
        "Basic reporting"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$699",
      period: "per month",
      description: "Ideal for mid-size hospitals and medical centers",
      features: [
        "Up to 500 scans per month",
        "Advanced AI analysis",
        "24-hour turnaround",
        "Priority support",
        "HIPAA compliance",
        "Advanced reporting",
        "Custom integrations",
        "Quality assurance"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large hospital networks and healthcare systems",
      features: [
        "Unlimited scans",
        "Premium AI analysis",
        "1-hour emergency turnaround",
        "24/7 dedicated support",
        "HIPAA compliance",
        "Custom reporting",
        "Full API access",
        "White-label solutions",
        "On-premise deployment",
        "Training & certification"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-hidden ${titleVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core AI analysis 
            and expert radiologist network access.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              plan={plan}
              index={index}
              onGetStarted={() => setIsLoginOpen(true)}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-16 scroll-scale ${sectionVisible ? 'scroll-visible' : ''}`}>
          <div className="medical-card inline-block max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-secondary mr-3" />
                <span className="text-muted-foreground">30-day free trial</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-secondary mr-3" />
                <span className="text-muted-foreground">No setup fees</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-secondary mr-3" />
                <span className="text-muted-foreground">Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-secondary mr-3" />
                <span className="text-muted-foreground">Data migration support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </section>
  );
};

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    cta: string;
  };
  index: number;
  onGetStarted: () => void;
}

const PricingCard = ({ plan, index, onGetStarted }: PricingCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  const animationClass = index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right';

  return (
    <div 
      ref={ref}
      className={`relative ${animationClass} ${isVisible ? 'scroll-visible' : ''}`}
      style={{ 
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-medical text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-2" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className={`medical-card h-full ${plan.popular ? 'ring-2 ring-secondary ring-opacity-50' : ''}`}>
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
          <p className="text-muted-foreground mb-4">{plan.description}</p>
          
          <div className="mb-6">
            <span className="stats-number">{plan.price}</span>
            <span className="text-muted-foreground ml-2">/{plan.period}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8 flex-grow">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center">
              <Check className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button 
          onClick={onGetStarted}
          className={`w-full ${plan.popular ? 'btn-hero' : 'btn-outline-hero'}`}
        >
          {plan.cta}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default PricingSection;