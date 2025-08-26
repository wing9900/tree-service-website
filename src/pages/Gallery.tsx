import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const galleryImages = [
    {
      id: 1,
      title: "Professional Lot Clearing",
      category: "Lot Clearing",
      location: "Houston, TX",
      image: "/lovable-uploads/c560043f-b9f2-45db-bea6-329e65825c95.png",
      description: "Comprehensive lot clearing project showcasing our professional forest management services"
    },
    {
      id: 2,
      title: "Mature Tree Preservation",
      category: "Tree Preservation",
      location: "Sugar Land, TX",
      image: "/lovable-uploads/5944f598-0061-466f-8e06-320c8005941e.png",
      description: "Beautiful example of how proper tree care enhances property value and curb appeal"
    },
    {
      id: 3,
      title: "Landscape Tree Maintenance",
      category: "Tree Trimming",
      location: "The Woodlands, TX",
      image: "/lovable-uploads/8b7ff4ea-2009-4747-934a-12ebcf276408.png",
      description: "Professional pruning and maintenance of mature oak trees for optimal health and safety"
    },
    {
      id: 4,
      title: "Hedge Trimming & Shaping",
      category: "Hedge Trimming",
      location: "Katy, TX",
      image: "/lovable-uploads/de6067fd-0835-4fd1-9439-92ef3b8ef3df.png",
      description: "Precision hedge trimming and landscape shaping for residential properties"
    },
    {
      id: 5,
      title: "Mature Tree Care",
      category: "Tree Care",
      location: "Conroe, TX",
      image: "/lovable-uploads/e0fa01c9-67f7-4b35-9696-dd91d85fc80e.png",
      description: "Expert care for mature trees in residential landscape settings"
    },
    {
      id: 6,
      title: "Professional Pruning",
      category: "Tree Pruning",
      location: "Pasadena, TX",
      image: "/lovable-uploads/379f6253-3016-4f42-acaf-a587854ce122.png",
      description: "Crown thinning and structural pruning for large residential trees"
    },
    {
      id: 7,
      title: "Landscape Design Integration",
      category: "Landscape Design",
      location: "Houston, TX",
      image: "/lovable-uploads/eda396dd-d8a3-4d24-9117-15aaad371689.png",
      description: "Professional integration of tree care with landscape design and garden features"
    },
    {
      id: 8,
      title: "Forest Management",
      category: "Forest Management",
      location: "Montgomery County, TX",
      image: "/lovable-uploads/9b409e51-e319-4d2f-a64f-0db55d5b4e73.png",
      description: "Large-scale forest management and selective clearing for residential developments"
    }
  ];

  const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];

  const filteredImages = selectedFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedFilter);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <Layout hideCTA={true}>
      {/* SEO Meta Tags */}
      <div className="hidden">
        <h1>Houston Tree Service Gallery - Professional Tree Care Results</h1>
        <meta name="description" content="View our professional tree service work in Houston, Sugar Land, The Woodlands, and surrounding areas. See real results from our certified arborists." />
      </div>
      
      <div className="container-custom section-padding">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <ImageIcon className="h-4 w-4" />
            Professional Gallery
          </div>
          
          <h1 className="text-section-title font-bold text-foreground mb-4">
            Our Tree Service Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our portfolio of professional tree services throughout Houston and surrounding areas. 
            Each project showcases our commitment to quality, safety, and customer satisfaction.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(category)}
                className="transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group overflow-hidden hover-lift animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={image.image}
                  alt={`${image.title} - ${image.description}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">View Details</div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold">
                    {image.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 text-sm">{image.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{image.location}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for Image Viewing */}
        {selectedImage !== null && (
          <Dialog open={selectedImage !== null} onOpenChange={closeModal}>
            <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black/95 border-0">
              <div className="relative w-full h-full">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                  onClick={closeModal}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <div className="flex items-center justify-center w-full h-[80vh]">
                  <img
                    src={filteredImages[selectedImage].image}
                    alt={filteredImages[selectedImage].title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-primary text-primary-foreground">
                      {filteredImages[selectedImage].category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{filteredImages[selectedImage].title}</h3>
                  <p className="text-sm text-white/80 mb-2">{filteredImages[selectedImage].location}</p>
                  <p className="text-sm text-white/70">{filteredImages[selectedImage].description}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Service</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center p-8 rounded-lg bg-primary/5 border border-primary/10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their tree care needs. 
            Get a free consultation and see how we can enhance your landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="shadow-md hover:shadow-lg">
                Get Free Estimate
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;