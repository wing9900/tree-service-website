import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  Wrench, 
  CheckCircle, 
  Star,
  TreePine
} from "lucide-react";
import licensedInsuredBadge from "@/assets/licensed-insured-badge.jpg";
import isaArboristBadge from "@/assets/isa-certified-badge.png";
import fiveStarBadge from "@/assets/five-star-badge.jpg";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind. We carry comprehensive liability and workers' compensation coverage.",
      badge: "Verified",
      image: licensedInsuredBadge
    },
    {
      icon: Award,
      title: "ISA Certified Arborist",
      description: "Our team includes certified arborists who understand tree biology, proper pruning techniques, and safety protocols.",
      badge: "Certified",
      image: isaArboristBadge
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Consistently rated 5-stars by our customers for quality workmanship, professionalism, and exceptional service.",
      badge: "Top Rated",
      image: fiveStarBadge
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Storm damage doesn't wait for business hours. We provide round-the-clock emergency response when you need it most.",
      badge: "Available"
    },
    {
      icon: Wrench,
      title: "Professional Equipment",
      description: "State-of-the-art equipment including cranes, bucket trucks, and specialized tools for safe, efficient work.",
      badge: "Advanced"
    },
    {
      icon: CheckCircle,
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work with a complete satisfaction guarantee. Your property and satisfaction are our priorities.",
      badge: "Guaranteed"
    }
  ];

  const stats = [
    { number: "2,500+", label: "Trees Serviced" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Emergency Response" }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TreePine className="h-4 w-4" />
            Why Choose Professional Tree Services
          </div>
          <h2 className="text-section-title mb-6">
            Trusted Tree Care Experts in Houston Area
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            When it comes to your property's trees, experience and expertise matter. 
            Here's why homeowners and businesses choose us for their tree care needs.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-6 bg-muted/50 rounded-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={reason.title} 
              className="hover-lift animate-fade-in border-0 shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  {reason.image ? (
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={reason.image} 
                        alt={`${reason.title} badge`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <reason.icon className="h-8 w-8 text-primary" />
                    </div>
                  )}
                  <Badge variant="secondary" className="absolute -top-2 -right-2">
                    {reason.badge}
                  </Badge>
                </div>
                
                <h3 className="text-card-title mb-4">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-success/5 border border-success/20 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-success">
            Rated #1 Tree Service in Houston Area
          </h3>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            "Outstanding service from start to finish. Professional, knowledgeable, and left our 
            property cleaner than when they arrived. Highly recommend!"
          </p>
          
          <div className="text-sm text-muted-foreground">
            <strong>Sample Review (Placeholder)</strong> - Real reviews available on Google Business Profile
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;