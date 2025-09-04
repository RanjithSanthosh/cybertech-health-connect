import { Brain, Shield, Zap, Database, Cloud, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TechnologySection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const technologies = [
    {
      icon: Brain,
      title: "Deep Learning AI",
      description: "Advanced neural networks trained on millions of medical images for precise pattern recognition and anomaly detection",
      features: ["Computer Vision", "Natural Language Processing", "Predictive Analytics"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable, reliable cloud architecture ensuring 99.9% uptime and global accessibility for healthcare providers",
      features: ["Auto-scaling", "Global CDN", "Disaster Recovery"]
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security with end-to-end encryption, audit trails, and compliance with global healthcare regulations",
      features: ["AES-256 Encryption", "Access Controls", "Audit Logging"]
    },
    {
      icon: Database,
      title: "Medical Imaging",
      description: "Support for all major medical imaging formats with advanced processing and analysis capabilities",
      features: ["DICOM Support", "3D Reconstruction", "Multi-modal Fusion"]
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast image analysis and report generation with sub-second response times for critical cases",
      features: ["GPU Acceleration", "Edge Computing", "Parallel Processing"]
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Zero-trust security model with advanced threat detection and prevention for healthcare data protection",
      features: ["Blockchain Audit", "Biometric Access", "Data Anonymization"]
    }
  ];

  return (
    <section id="technology" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-hidden ${titleVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powered by <span className="gradient-text">Cutting-Edge Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our platform leverages the latest advances in artificial intelligence, cloud computing, 
            and medical imaging to deliver unparalleled accuracy and reliability in medical diagnosis.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <TechnologyCard 
              key={index}
              technology={tech}
              index={index}
            />
          ))}
        </div>

        {/* Technology Stack Showcase */}
        <div className={`medical-card scroll-scale ${sectionVisible ? 'scroll-visible' : ''}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Our Technology Stack</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built on a foundation of proven technologies and innovative solutions designed 
              specifically for healthcare applications.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-medical flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2">AI/ML</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>TensorFlow</p>
                <p>PyTorch</p>
                <p>OpenCV</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-medical flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Cloud</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>AWS/Azure</p>
                <p>Kubernetes</p>
                <p>Docker</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-medical flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Data</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>PostgreSQL</p>
                <p>MongoDB</p>
                <p>Redis</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-medical flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Security</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>OAuth 2.0</p>
                <p>JWT</p>
                <p>SSL/TLS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TechnologyCardProps {
  technology: {
    icon: any;
    title: string;
    description: string;
    features: string[];
  };
  index: number;
}

const TechnologyCard = ({ technology, index }: TechnologyCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  const animationClass = index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right';

  return (
    <div 
      ref={ref}
      className={`medical-card group ${animationClass} ${isVisible ? 'scroll-visible' : ''}`}
      style={{ 
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-medical flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <technology.icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-primary">
        {technology.title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        {technology.description}
      </p>

      <div className="space-y-2">
        {technology.features.map((feature, idx) => (
          <div key={idx} className="flex items-center text-sm">
            <div className="w-2 h-2 rounded-full bg-secondary mr-3" />
            <span className="text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologySection;