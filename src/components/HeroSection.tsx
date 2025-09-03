import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react";
import LoginModal from "./LoginModal";
import medicalHeroBg from "@/assets/medical-hero-bg.jpg";

const HeroSection = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${medicalHeroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 medical-pattern opacity-50" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-medium">Secure Medical Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-white">Building </span>
            <span className="gradient-text">Multi-Modal AI</span>
            <br />
            <span className="text-white">for </span>
            <span className="gradient-text">Personalized Medicine</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Elevating Diagnosis Capabilities Through Advanced AI-Powered Medical Imaging Analysis and Expert Radiologist Networks
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => setIsLoginOpen(true)}
              className="btn-hero text-lg px-10 py-6 group"
            >
              Experience the Magic
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-outline-hero text-lg px-10 py-6 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="stats-number mb-2">10,000+</div>
              <p className="text-gray-400">Scans Analyzed</p>
            </div>
            <div className="text-center">
              <div className="stats-number mb-2">500+</div>
              <p className="text-gray-400">Expert Radiologists</p>
            </div>
            <div className="text-center">
              <div className="stats-number mb-2">99.9%</div>
              <p className="text-gray-400">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </section>
  );
};

export default HeroSection;