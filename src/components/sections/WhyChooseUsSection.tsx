import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Heart, 
  Clock, 
  Leaf, 
  Calendar, 
  Home, 
  MessageSquare, 
  Wrench,
  Star,
  TreePine,
  Shield
} from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: MapPin,
      title: "Local Houston Expertise",
      description: "We know Houston and the surrounding areas. From soil types to seasonal growth patterns, our experience with local trees and landscapes ensures services that suit your neighborhood's unique needs.",
      badge: "Local",
      bgColor: "bg-blue-50 dark:bg-blue-950/50",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your property and well-being are our top priorities. We follow strict safety protocols and use the latest equipment to ensure every job is completed carefully, efficiently, and without incident.",
      badge: "Safe",
      bgColor: "bg-red-50 dark:bg-red-950/50",
      borderColor: "border-red-200 dark:border-red-800"
    },
    {
      icon: Clock,
      title: "Reliability You Can Count On",
      description: "We value your time and property. Expect punctual, organized, and efficient service that minimizes disruption and keeps your yard looking its best.",
      badge: "Dependable",
      bgColor: "bg-green-50 dark:bg-green-950/50",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      icon: Leaf,
      title: "Commitment to Sustainability",
      description: "Our methods protect both your trees and the environment. We prioritize eco-conscious techniques, including responsible pruning, recycling debris, and minimizing chemical use.",
      badge: "Eco-Friendly",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/50",
      borderColor: "border-emerald-200 dark:border-emerald-800"
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Every tree and yard is different. We tailor our approach to your property, offering solutions that make sense for your landscape and lifestyle.",
      badge: "Custom",
      bgColor: "bg-purple-50 dark:bg-purple-950/50",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      icon: Home,
      title: "Respect for Your Property",
      description: "Your home and yard are important to you, and they're important to us. We maintain clean work areas, minimize impact, and leave your property better than we found it.",
      badge: "Careful",
      bgColor: "bg-amber-50 dark:bg-amber-950/50",
      borderColor: "border-amber-200 dark:border-amber-800"
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "Clear estimates, straightforward explanations, and consistent updates. We make sure you know what's happening and why, every step of the way.",
      badge: "Clear",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/50",
      borderColor: "border-cyan-200 dark:border-cyan-800"
    },
    {
      icon: Wrench,
      title: "Innovative Equipment & Techniques",
      description: "We invest in modern tools and proven methods to provide faster, safer, and more precise tree care for your property.",
      badge: "Advanced",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/50",
      borderColor: "border-indigo-200 dark:border-indigo-800"
    },
    {
      icon: Calendar,
      title: "Long-Term Care Focus",
      description: "We don't just trim or remove trees—we ensure their health and longevity with proactive care and practical advice for your property.",
      badge: "Proactive",
      bgColor: "bg-teal-50 dark:bg-teal-950/50",
      borderColor: "border-teal-200 dark:border-teal-800"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TreePine className="h-4 w-4" />
            Your Houston Tree Care Specialists
          </div>
          <h2 className="text-section-title mb-6">
            What Sets Our Tree Services Apart
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the difference that comes from working with Houston's most trusted tree care professionals. 
            Here's what makes our approach unique to your local landscape needs.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={reason.title} 
              className={`hover-lift animate-fade-in shadow-soft ${reason.bgColor} ${reason.borderColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="h-8 w-8 text-primary" />
                  </div>
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