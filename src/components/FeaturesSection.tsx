import { Upload, Eye, DollarSign, Shield, Zap, Users, Brain, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FeaturesSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const features = [
    {
      icon: Upload,
      title: "Secure Upload System",
      description: "HIPAA-compliant secure upload for medical scans from any diagnostic center worldwide"
    },
    {
      icon: Eye,
      title: "OHIF Integration",
      description: "Advanced medical imaging viewers for precise analysis and diagnostic capabilities"
    },
    {
      icon: DollarSign,
      title: "Fair Compensation",
      description: "Transparent payment system ensuring radiologists are compensated fairly for their expertise"
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Multi-modal AI assists in preliminary analysis to enhance diagnostic accuracy"
    },
    {
      icon: Clock,
      title: "Rapid Turnaround",
      description: "Get expert analysis within 24 hours with our network of qualified radiologists"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with global healthcare data protection standards"
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-hidden ${titleVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span> for Modern Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform bridges the gap between diagnostic centers and expert radiologists 
            with cutting-edge technology and seamless workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const animationClass = isEven ? 'scroll-slide-right' : 'scroll-slide-left';
            
            return (
              <FeatureCard 
                key={index}
                feature={feature}
                index={index}
                animationClass={animationClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: {
    icon: any;
    title: string;
    description: string;
  };
  index: number;
  animationClass: string;
}

const FeatureCard = ({ feature, index, animationClass }: FeatureCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref}
      className={`medical-card group ${animationClass} ${isVisible ? 'scroll-visible' : ''}`}
      style={{ 
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-medical flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <feature.icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-primary">
        {feature.title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

export default FeaturesSection;