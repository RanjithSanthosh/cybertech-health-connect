// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react";
// import LoginModal from "./LoginModal";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import medicalHeroBg from "@/assets/medical-hero-bg.jpg";

// const HeroSection = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({
//     threshold: 0.5,
//   });

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image with Parallax */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ 
//           backgroundImage: `url(${medicalHeroBg})`,
//           transform: `translateY(${scrollY * 0.5}px)`
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-hero/90" />
//       </div>

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 medical-pattern opacity-50" />
//       <div 
//         className="absolute top-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" 
//         style={{ transform: `translateY(${scrollY * 0.3}px)` }}
//       />
//       <div 
//         className="absolute bottom-20 left-20 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-float" 
//         style={{ 
//           animationDelay: '2s',
//           transform: `translateY(${scrollY * 0.2}px)`
//         }} 
//       />
//       <div 
//         className="absolute top-1/2 left-10 w-24 h-24 bg-secondary/5 rounded-full blur-2xl animate-glow-pulse" 
//         style={{ transform: `translateY(${scrollY * 0.4}px)` }}
//       />

//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <div className="max-w-5xl mx-auto">
//           {/* Hero Badge */}
//           <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up backdrop-blur-sm">
//             <Shield className="w-5 h-5 text-secondary" />
//             <span className="text-secondary font-medium">Secure Medical Platform</span>
//           </div>

//           {/* Main Headline with staggered animation */}
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
//             <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
//               <span className="text-white drop-shadow-lg">Building </span>
//               <span className="text-white drop-shadow-lg bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent font-extrabold">Multi-Modal AI</span>
//             </div>
//             <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
//               <span className="text-white drop-shadow-lg">for </span>
//               <span className="text-white drop-shadow-lg bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent font-extrabold">Personalized Medicine</span>
//             </div>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
//             Elevating Diagnosis Capabilities Through Advanced AI-Powered Medical Imaging Analysis and Expert Radiologist Networks
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
//             <Button 
//               onClick={() => setIsLoginOpen(true)}
//               className="btn-hero text-lg px-10 py-6 group relative overflow-hidden"
//             >
//               <span className="relative z-10">Experience the Magic</span>
//               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
//               <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//             </Button>
            
//             <Button 
//               variant="outline" 
//               className="btn-outline-hero text-lg px-10 py-6 group relative overflow-hidden"
//             >
//               <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//               <span>Watch Demo</span>
//               <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
//             </Button>
//           </div>

//           {/* Stats with scroll animation */}
//           <div 
//             ref={statsRef}
//             className={`grid md:grid-cols-3 gap-8 max-w-3xl mx-auto scroll-hidden ${statsVisible ? 'scroll-visible' : ''}`}
//           >
//             <div className="text-center animate-scale-in" style={{ animationDelay: '1s' }}>
//               <div className="stats-number mb-2">10,000+</div>
//               <p className="text-gray-400">Scans Analyzed</p>
//             </div>
//             <div className="text-center animate-scale-in" style={{ animationDelay: '1.2s' }}>
//               <div className="stats-number mb-2">500+</div>
//               <p className="text-gray-400">Expert Radiologists</p>
//             </div>
//             <div className="text-center animate-scale-in" style={{ animationDelay: '1.4s' }}>
//               <div className="stats-number mb-2">99.9%</div>
//               <p className="text-gray-400">Accuracy Rate</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-secondary/70 rounded-full mt-2 animate-pulse" />
//         </div>
//       </div>

//       <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
//     </section>
//   );
// };

// export default HeroSection;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Users } from "lucide-react";
import LoginModal from "./LoginModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import medicalHeroBg from "@/assets/medical-hero-bg.jpg";

const HeroSection = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({
    threshold: 0.5,
  });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 medical-pattern opacity-30" />
      <div 
        className="absolute top-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" 
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div 
        className="absolute bottom-20 left-20 w-48 h-48 bg-primary-glow/10 rounded-full blur-3xl animate-float" 
        style={{ 
          animationDelay: '2s',
          transform: `translateY(${scrollY * 0.2}px)`
        }} 
      />
      <div 
        className="absolute top-1/2 left-10 w-24 h-24 bg-secondary/5 rounded-full blur-2xl animate-glow-pulse" 
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-medium">Secure Medical Platform</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <span className="text-white drop-shadow-lg">Building </span>
                  <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent font-extrabold">Multi-Modal AI</span>
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <span className="text-white drop-shadow-lg">for </span>
                  <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent font-extrabold">Personalized Medicine</span>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Elevating Diagnosis Capabilities Through Advanced AI-Powered Medical Imaging Analysis and Expert Radiologist Networks
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button 
                onClick={() => setIsLoginOpen(true)}
                className="btn-hero text-lg px-8 py-6 group relative overflow-hidden"
              >
                <span className="relative z-10">Experience the Magic</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-outline-hero text-lg px-8 py-6 group relative overflow-hidden"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
                <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>

            {/* Stats */}
            <div 
              ref={statsRef}
              className={`grid grid-cols-3 gap-6 pt-8 scroll-hidden ${statsVisible ? 'scroll-visible' : ''}`}
            >
              <div className="text-left animate-scale-in" style={{ animationDelay: '1s' }}>
                <div className="stats-number mb-1">10,000+</div>
                <p className="text-gray-400 text-sm">Scans Analyzed</p>
              </div>
              <div className="text-left animate-scale-in" style={{ animationDelay: '1.2s' }}>
                <div className="stats-number mb-1">500+</div>
                <p className="text-gray-400 text-sm">Expert Radiologists</p>
              </div>
              <div className="text-left animate-scale-in" style={{ animationDelay: '1.4s' }}>
                <div className="stats-number mb-1">99.9%</div>
                <p className="text-gray-400 text-sm">Accuracy Rate</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:h-[600px] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              {/* Main Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${medicalHeroBg})`,
                  transform: `translateY(${scrollY * 0.1}px)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-secondary/20 backdrop-blur-md rounded-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">AI Analysis Active</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span className="text-white font-medium">HIPAA Compliant</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary/30 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-glow/40 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </section>
  );
};

export default HeroSection;