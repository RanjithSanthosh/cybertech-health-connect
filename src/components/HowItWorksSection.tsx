import { ArrowRight, Upload, Search, FileText, CreditCard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorksSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();
  
  const steps = [
    {
      icon: Upload,
      step: "01",
      title: "Upload Medical Scans",
      description: "Hospitals and diagnostic centers securely upload patient scans through our HIPAA-compliant platform"
    },
    {
      icon: Search,
      step: "02", 
      title: "Expert Assignment",
      description: "Our AI system automatically assigns cases to qualified radiologists based on specialization and availability"
    },
    {
      icon: FileText,
      step: "03",
      title: "Professional Analysis",
      description: "Radiologists review scans using advanced OHIF viewers and provide detailed diagnostic reports"
    },
    {
      icon: CreditCard,
      step: "04",
      title: "Secure Payment",
      description: "Automatic payment processing ensures radiologists receive fair compensation for their expertise"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-hidden ${titleVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="gradient-text">CybertechNinja</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined process that connects diagnostic centers with expert radiologists 
            for faster, more accurate medical imaging analysis
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              return (
                <StepCard 
                  key={index}
                  step={step}
                  index={index}
                  isLast={index === steps.length - 1}
                />
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 scroll-scale ${ctaVisible ? 'scroll-visible' : ''}`}
        >
          <div className="medical-card inline-block">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Transform Medical Imaging?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join thousands of healthcare professionals already using our platform
            </p>
            <button className="btn-hero">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  step: {
    icon: any;
    step: string;
    title: string;
    description: string;
  };
  index: number;
  isLast: boolean;
}

const StepCard = ({ step, index, isLast }: StepCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  const animationClass = index % 2 === 0 ? 'scroll-slide-right' : 'scroll-slide-left';

  return (
    <div ref={ref} className="relative">
      <div 
        className={`medical-card text-center ${animationClass} ${isVisible ? 'scroll-visible' : ''}`}
        style={{ 
          transitionDelay: `${index * 0.2}s`,
        }}
      >
        {/* Step Number */}
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-medical flex items-center justify-center">
          <span className="text-white font-bold text-sm">{step.step}</span>
        </div>

        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
          <step.icon className="w-10 h-10 text-secondary" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-4 text-primary">
          {step.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Arrow */}
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
          <ArrowRight className="w-8 h-8 text-secondary animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default HowItWorksSection;