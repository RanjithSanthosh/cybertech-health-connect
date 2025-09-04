import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();
  return (
    <footer className="bg-primary text-primary-foreground py-16" ref={footerRef}>
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-4 gap-8 mb-12 scroll-hidden ${footerVisible ? 'scroll-visible' : ''}`}>
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-medical flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">CybertechNinja</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Revolutionizing medical imaging with AI-powered analysis and expert radiologist networks.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Platform</h4>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                For Hospitals
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                For Radiologists
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                OHIF Integration
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Security & Compliance
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Resources</h4>
            <div className="space-y-3">
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                API Reference
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Support Center
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Blog
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-5 h-5" />
                <span>contact@cybertechninja.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span>Coimbatore ,Tamilnadu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60">
              © 2025 CybertechNinja. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;