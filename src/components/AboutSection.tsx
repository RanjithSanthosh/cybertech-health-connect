import { Shield, Users, Award, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const stats = [
    { icon: Users, label: "Healthcare Partners", value: "2,500+", description: "Hospitals & Clinics" },
    { icon: Shield, label: "Expert Radiologists", value: "850+", description: "Board Certified" },
    { icon: Award, label: "Accuracy Rate", value: "99.7%", description: "Diagnostic Precision" },
    { icon: Globe, label: "Countries Served", value: "45+", description: "Global Reach" }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-hidden ${titleVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Leading the Future of <span className="gradient-text">Medical Imaging</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            CybertechNinja is revolutionizing healthcare by bridging the gap between advanced AI technology 
            and expert medical knowledge. Our platform enables faster, more accurate diagnoses while 
            maintaining the highest standards of security and compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className={`scroll-slide-left ${sectionVisible ? 'scroll-visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-6 text-primary">
              Transforming Healthcare Through Innovation
            </h3>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Founded by a team of medical professionals and AI researchers, CybertechNinja addresses 
                the critical shortage of radiologists worldwide while enhancing diagnostic capabilities 
                through cutting-edge artificial intelligence.
              </p>
              <p className="leading-relaxed">
                Our multi-modal AI platform analyzes medical images with unprecedented accuracy, 
                supporting radiologists in making faster, more confident diagnoses. We've processed 
                over 2 million medical scans and continue to expand our network of expert healthcare 
                professionals globally.
              </p>
              <p className="leading-relaxed">
                With HIPAA compliance, enterprise-grade security, and seamless integration with 
                existing healthcare systems, we're making advanced medical imaging accessible to 
                healthcare providers of all sizes.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`scroll-slide-right ${sectionVisible ? 'scroll-visible' : ''}`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`medical-card scroll-slide-left ${sectionVisible ? 'scroll-visible' : ''}`}>
            <h4 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h4>
            <p className="text-muted-foreground leading-relaxed">
              To democratize access to expert medical imaging analysis by combining the power of 
              artificial intelligence with human expertise, ensuring every patient receives accurate, 
              timely diagnosis regardless of their location.
            </p>
          </div>
          
          <div className={`medical-card scroll-slide-right ${sectionVisible ? 'scroll-visible' : ''}`}>
            <h4 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h4>
            <p className="text-muted-foreground leading-relaxed">
              A world where geographical barriers don't limit access to quality healthcare, where 
              AI enhances human capabilities, and where every medical professional has the tools 
              they need to save lives and improve patient outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    icon: any;
    label: string;
    value: string;
    description: string;
  };
  index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  return (
    <div 
      ref={ref}
      className={`medical-card text-center group scroll-scale ${isVisible ? 'scroll-visible' : ''}`}
      style={{ 
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-medical flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <stat.icon className="w-8 h-8 text-white" />
      </div>
      
      <div className="stats-number mb-2">{stat.value}</div>
      <h4 className="font-semibold text-primary mb-1">{stat.label}</h4>
      <p className="text-sm text-muted-foreground">{stat.description}</p>
    </div>
  );
};

export default AboutSection;