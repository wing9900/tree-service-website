import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone } from "lucide-react";

const ServiceAreasSection = () => {
  const serviceAreas = [
    {
      name: "Katy",
      description: "Complete tree services for Katy residents including emergency storm response.",
      href: "/areas/katy",
      landmarks: ["Katy Mills", "LaCenterra", "Mary Jo Peckham Park"]
    },
    {
      name: "Sugar Land",
      description: "Professional tree care serving Sugar Land and surrounding communities.",
      href: "/areas/sugar-land", 
      landmarks: ["Sugar Land Town Square", "Constellation Field", "Imperial Park"]
    },
    {
      name: "Richmond",
      description: "Trusted tree services for Richmond homeowners and businesses.",
      href: "/areas/richmond",
      landmarks: ["George Ranch", "Brazos Bend State Park", "Fort Bend County Fairgrounds"]
    },
    {
      name: "Rosenberg",
      description: "Expert tree trimming and removal services throughout Rosenberg.",
      href: "/areas/rosenberg",
      landmarks: ["Seabourne Creek Park", "Historic Downtown", "Rosenberg Railroad Museum"]
    },
    {
      name: "Fulshear",
      description: "Professional arborist services for the growing Fulshear community.",
      href: "/areas/fulshear",
      landmarks: ["Cross Creek Ranch", "Jordan Ranch", "Fulshear Run Park"]
    },
    {
      name: "Cypress",
      description: "Comprehensive tree care services for Cypress area properties.",
      href: "/areas/cypress",
      landmarks: ["Cypress Creek", "Spring Creek Park", "Willowbrook Mall Area"]
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="h-4 w-4" />
            Service Areas
          </div>
          <h2 className="text-section-title mb-6">
            Serving Greater Houston Area
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We proudly serve communities throughout the Houston metro area with professional 
            tree services, emergency response, and expert consultation.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <Card 
              key={area.name} 
              className="hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-card-title">{area.name}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {area.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">
                    Local Landmarks:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {area.landmarks.map((landmark) => (
                      <span 
                        key={landmark}
                        className="text-xs bg-secondary/50 px-2 py-1 rounded-full text-secondary-foreground"
                      >
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors" 
                  asChild
                >
                  <Link to={area.href}>
                    View Area Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coverage Map Placeholder */}
        <div className="bg-card rounded-2xl p-8 mb-12 text-center shadow-soft">
          <h3 className="text-xl font-bold mb-4">
            Complete Coverage Across Houston Metro
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our service territory extends throughout Harris County and Fort Bend County. 
            If you don't see your area listed, give us a call - we likely serve your location!
          </p>
          
          <div className="bg-muted/50 rounded-lg p-8 mb-6">
            <div className="text-muted-foreground italic">
              [Interactive Service Area Map Would Be Embedded Here]
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" asChild>
              <Link to="/service-areas">
                View All Service Areas
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:{{PHONE}}">
                <Phone className="h-4 w-4" />
                Call to Confirm Coverage
              </a>
            </Button>
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="bg-emergency rounded-2xl p-6 text-center text-emergency-foreground">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="h-6 w-6" />
            <h3 className="text-xl font-bold">
              24/7 Emergency Response
            </h3>
          </div>
          <p className="text-emergency-foreground/90 mb-4">
            Storm damage doesn't wait for business hours. We provide emergency tree services 
            throughout all our service areas when you need us most.
          </p>
          <Button variant="hero" asChild>
            <a href="tel:{{PHONE}}">
              Emergency Hotline: {"{{PHONE}}"}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;