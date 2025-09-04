import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@cybertechninja.com",
      description: "Get in touch for general inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak with our team directly"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Coimbatore, Tamil Nadu, India",
      description: "Our headquarters and main office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "24/7 Support Available",
      description: "Emergency medical support anytime"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-hidden ${titleVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your medical imaging workflow? Contact our team to learn more 
            about how CybertechNinja can help your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className={`scroll-slide-left ${sectionVisible ? 'scroll-visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-8 text-primary">
              Let's Start a Conversation
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're a healthcare provider looking to improve diagnostic capabilities 
              or a radiologist interested in joining our network, we'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={index} info={info} index={index} />
              ))}
            </div>

            {/* Additional Info */}
            <div className="medical-card mt-8">
              <h4 className="text-xl font-bold mb-4 gradient-text">Emergency Support</h4>
              <p className="text-muted-foreground leading-relaxed">
                For critical medical cases requiring immediate attention, our emergency 
                support team is available 24/7 to ensure rapid response and analysis.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`scroll-slide-right ${sectionVisible ? 'scroll-visible' : ''}`}>
            <div className="medical-card">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Dr. John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="john.smith@hospital.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-primary mb-2">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Metro General Hospital"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full"
                    placeholder="Tell us about your needs and how we can help..."
                  />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoCardProps {
  info: {
    icon: any;
    title: string;
    details: string;
    description: string;
  };
  index: number;
}

const ContactInfoCard = ({ info, index }: ContactInfoCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
  });

  return (
    <div 
      ref={ref}
      className={`flex items-start space-x-4 scroll-scale ${isVisible ? 'scroll-visible' : ''}`}
      style={{ 
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-medical flex items-center justify-center flex-shrink-0">
        <info.icon className="w-6 h-6 text-white" />
      </div>
      
      <div>
        <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
        <p className="text-lg font-medium mb-1">{info.details}</p>
        <p className="text-sm text-muted-foreground">{info.description}</p>
      </div>
    </div>
  );
};

export default ContactSection;