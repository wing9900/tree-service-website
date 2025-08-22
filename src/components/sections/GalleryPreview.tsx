import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Eye, ArrowRight, Image as ImageIcon } from "lucide-react";
import heroImage from "@/assets/hero-tree-service.jpg";
import treeTrimmingImg from "@/assets/tree-trimming-service.jpg";
import treeRemovalImg from "@/assets/tree-removal-service.jpg";
import stumpGrindingImg from "@/assets/stump-grinding-service.jpg";
import emergencyServiceImg from "@/assets/emergency-storm-service.jpg";

const GalleryPreview = () => {
  const galleryItems = [
    {
      title: "Professional Tree Pruning",
      category: "Tree Pruning",
      image: "/lovable-uploads/9b457fbe-2c47-4b38-a85e-5b87bc017dec.png",
      description: "Crown thinning and elevation project in Houston, TX"
    },
    {
      title: "Safe Tree Removal",
      category: "Tree Removal", 
      image: "/lovable-uploads/5cc39ea9-d1d2-4f97-a49f-a63c91e470f0.png",
      description: "Removal of a hazardous tree in Pasadena, TX"
    },
    {
      title: "Stump Grinding Service",
      category: "Stump Grinding",
      image: "/lovable-uploads/83e4a60f-a3ad-4031-b013-6de73703af69.png",
      description: "Large stump removal and cleanup in Conroe, TX"
    },
    {
      title: "Emergency Storm Response",
      category: "Emergency Services",
      image: "/lovable-uploads/7813c07a-6621-4cf6-81ab-1687b9dcd97d.png",
      description: "Emergency storm damage cleanup project in Sugar Land, TX"
    },
    {
      title: "Professional Lot Clearing",
      category: "Tree Care",
      image: "/lovable-uploads/f9d7952b-990f-4d19-85ca-4612d04564da.png",
      description: "Comprehensive care for mature trees"
    },
    {
      title: "Residential Tree Services",
      category: "Residential",
      image: "/lovable-uploads/11a3b252-343e-454b-8e6e-cd2af1d8bd6a.png",
      description: "Complete tree care for homeowners"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <ImageIcon className="h-4 w-4" />
            Our Work Gallery
          </div>
          <h2 className="text-section-title mb-6">
            See Our Professional Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a look at our recent projects and see the quality workmanship that has made us 
            the trusted choice for tree services throughout the Houston area.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.title} 
              className="group overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.description}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">View Details</div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-card-title mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="bg-muted/50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Before & After Transformations</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the dramatic difference our professional tree services make. From overgrown trees 
              to clean, healthy landscapes - we transform properties throughout Houston.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-4">
                <h4 className="text-lg font-semibold text-red-800 mb-2">Before</h4>
                <p className="text-red-600 text-sm">
                  Overgrown, hazardous trees blocking sunlight and threatening property
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 mb-4">
                <h4 className="text-lg font-semibold text-green-800 mb-2">After</h4>
                <p className="text-green-600 text-sm">
                  Professional trimming creates safe, beautiful landscapes with proper clearance
                </p>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-4">
            <em>Note: Actual before/after photos would be displayed here with real project images</em>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/gallery">
                <Eye className="h-5 w-5" />
                View Full Gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Get Your Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;