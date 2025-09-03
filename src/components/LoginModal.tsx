import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Building2, Stethoscope } from "lucide-react";
import hospitalScannerImg from "@/assets/hospital-scanner.jpg";
import radiologistReviewImg from "@/assets/radiologist-review.jpg";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl p-0 bg-background border-border/50">
        <DialogHeader className="p-8 pb-4">
          <DialogTitle className="text-3xl font-bold text-center gradient-text">
            Choose Your Access Type
          </DialogTitle>
          <p className="text-muted-foreground text-center mt-2">
            Select your role to access the CybertechNinja platform
          </p>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 p-8 pt-4">
          {/* Hospital/Diagnostic Centre */}
          <div className="medical-card group cursor-pointer hover:border-secondary/50">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden">
                <img 
                  src={hospitalScannerImg} 
                  alt="Hospital Scanner"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-medical/20 group-hover:bg-gradient-medical/30 transition-colors duration-300" />
                <Building2 className="absolute bottom-2 right-2 w-8 h-8 text-white drop-shadow-lg" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-primary">
                HOSPITAL/DIAGNOSTIC CENTRE
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Upload patient scans and manage diagnostic cases efficiently through our secure platform
              </p>
              
              <Button className="w-full btn-hero group-hover:shadow-glow">
                Access Portal
              </Button>
            </div>
          </div>

          {/* Radiologist */}
          <div className="medical-card group cursor-pointer hover:border-secondary/50">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden">
                <img 
                  src={radiologistReviewImg} 
                  alt="Radiologist Review"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-medical/20 group-hover:bg-gradient-medical/30 transition-colors duration-300" />
                <Stethoscope className="absolute bottom-2 right-2 w-8 h-8 text-white drop-shadow-lg" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-primary">
                RADIOLOGIST
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Review and analyze medical scans using advanced OHIF viewers and earn competitive compensation
              </p>
              
              <Button className="w-full btn-hero group-hover:shadow-glow">
                Expert Login
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;