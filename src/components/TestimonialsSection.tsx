import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Radiologist",
      hospital: "Metro General Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      quote: "CybertechNinja has transformed our workflow. The AI-assisted analysis helps us catch details we might have missed, and the quality of remote radiologist reviews is exceptional.",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Emergency Medicine Director",
      hospital: "Regional Medical Center",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      quote: "In emergency situations, every minute counts. The 24/7 availability and rapid turnaround times have literally helped us save lives. The platform is intuitive and reliable.",
      rating: 5
    },
    {
      name: "Dr. Emily Thompson",
      role: "Teleradiologist",
      hospital: "Independent Practice",
      image: "https://images.unsplash.com/photo-1594824388862-a062f5652a75?w=150&h=150&fit=crop&crop=face",
      quote: "As a remote radiologist, I appreciate the seamless OHIF integration and secure platform. The AI preliminary analysis helps me focus on the most critical areas immediately.",
      rating: 5
    },
    {
      name: "Dr. James Park",
      role: "Department Head",
      hospital: "University Medical Center",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      quote: "The quality assurance and peer review features have elevated our department's standards. Our residents learn faster with AI-assisted training modules.",
      rating: 5
    },
    {
      name: "Dr. Lisa Anderson",
      role: "Radiologist",
      hospital: "Children's Hospital Network",
      image: "https://images.unsplash.com/photo-1624179112035-9be9711daaac?w=150&h=150&fit=crop&crop=face",
      quote: "Pediatric imaging requires specialized expertise. The platform's ability to connect us with pediatric radiologists worldwide has been invaluable for complex cases.",
      rating: 5
    },
    {
      name: "Dr. Robert Kim",
      role: "Chief Medical Officer",
      hospital: "Rural Health Network",
      image: "https://images.unsplash.com/photo-1612349316200-eebb7e4e4e97?w=150&h=150&fit=crop&crop=face",
      quote: "For rural hospitals, access to specialist radiologists was always a challenge. CybertechNinja has leveled the playing field and improved patient care significantly.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 scroll-hidden ${titleVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Healthcare Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from medical professionals who are transforming their practice with our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`text-center mt-16 scroll-scale ${sectionVisible ? 'scroll-visible' : ''}`}>
          <div className="medical-card inline-block">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="stats-number mb-2">4.9/5</div>
            <p className="text-muted-foreground">Average rating from 2,500+ healthcare professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    hospital: string;
    image: string;
    quote: string;
    rating: number;
  };
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  const animationClass = index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right';

  return (
    <div 
      ref={ref}
      className={`medical-card ${animationClass} ${isVisible ? 'scroll-visible' : ''}`}
      style={{ 
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote className="w-8 h-8 text-secondary/30" />
      </div>

      {/* Quote */}
      <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-primary">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-xs text-muted-foreground/70">{testimonial.hospital}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;