import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart, Clock, Leaf, Calendar, Home, Pencil, MessageSquare, Wrench, Star, TreePine, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
const WhyChooseUsSection = () => {
  const [api, setApi] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (!isHovering) {
          api.scrollNext();
        }
      }, 5000);
    };

    startAutoplay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api, isHovering]);

  const reviews = [{
    id: 1,
    name: "Michael R.",
    avatar: "M",
    date: "2025-08-15",
    rating: 5,
    text: "After a big storm, we had a massive oak branch hanging dangerously over our driveway. I called in a panic, and they had a crew out here the same afternoon. They were professional, worked incredibly fast, and left the yard cleaner than they found it. Truly a top-notch emergency service.",
    readMore: false
  }, {
    id: 2,
    name: "Sarah Chen",
    avatar: "S",
    date: "2025-08-02",
    rating: 5,
    text: "I needed two large pine trees removed that were too close to the house. The team was amazing from start to finish. They provided a fair and transparent quote, arrived on time, and took down the trees with surgical precision. I would highly recommend this company to anyone.",
    readMore: false
  }, {
    id: 3,
    name: "David Garcia",
    avatar: "D",
    date: "2025-07-28",
    rating: 5,
    text: "We used them for stump grinding on three old stumps in our backyard, and the results were fantastic. The technician was skilled and made quick work of them. It's like they were never there. Excellent service and very reasonable pricing.",
    readMore: false
  }, {
    id: 4,
    name: "Emily Johnson",
    avatar: "E",
    date: "2025-07-19",
    rating: 5,
    text: "This is my 2nd time using this service and they continue to impress. This time it was for routine tree trimming to get more light into our yard. They did an excellent job shaping the trees and provided great advice on how to keep them healthy. Very professional team.",
    readMore: false
  }, {
    id: 5,
    name: "Chris Lee",
    avatar: "C",
    date: "2025-07-11",
    rating: 5,
    text: "I was extremely impressed with the crew's attention to safety and detail. They had to remove a tree that was awkwardly positioned near power lines, and they handled it flawlessly. The entire process was smooth and stress-free. A very reliable and skilled company.",
    readMore: false
  }, {
    id: 6,
    name: "Jessica Martinez",
    avatar: "J",
    date: "2025-06-30",
    rating: 5,
    text: "From the initial call for a quote to the final cleanup, every interaction was professional and courteous. They delivered on every promise at a fair price. They did excellent work and cleaned up perfectly. So glad we chose them!",
    readMore: false
  }, {
    id: 7,
    name: "Tom Williams",
    avatar: "T",
    date: "2025-06-21",
    rating: 5,
    text: "Needed a large plot of land cleared of overgrown brush and small trees. The crew arrived with impressive equipment and worked tirelessly to get the job done ahead of schedule. The transformation is incredible. Highly recommend for any land clearing projects.",
    readMore: false
  }, {
    id: 8,
    name: "Olivia Brown",
    avatar: "O",
    date: "2025-06-14",
    rating: 5,
    text: "Quick, efficient, and professional. They helped us with a stump removal we had been putting off for years. I would highly recommend them. They provided reasonable prices and did a great job cleaning up after they finished. Wish we had called them sooner!",
    readMore: false
  }];
  const reasons = [{
    icon: MapPin,
    title: "Local Houston Expertise",
    description: "We know Houston and the surrounding areas. From soil types to seasonal growth patterns, our experience with local trees and landscapes ensures services that suit your neighborhood's unique needs.",
    badge: "Local",
    bgColor: "bg-blue-50 dark:bg-blue-950/50",
    borderColor: "border-blue-200 dark:border-blue-800"
  }, {
    icon: Shield,
    title: "Safety First",
    description: "Your property and well-being are our top priorities. We follow strict safety protocols and use the latest equipment to ensure every job is completed carefully, efficiently, and without incident.",
    badge: "Safe",
    bgColor: "bg-orange-50 dark:bg-orange-950/50",
    borderColor: "border-orange-200 dark:border-orange-800"
  }, {
    icon: Clock,
    title: "Reliability You Can Count On",
    description: "We value your time and property. Expect punctual, organized, and efficient service that minimizes disruption and keeps your yard looking its best.",
    badge: "Dependable",
    bgColor: "bg-green-50 dark:bg-green-950/50",
    borderColor: "border-green-200 dark:border-green-800"
  }, {
    icon: Leaf,
    title: "Commitment to Sustainability",
    description: "Our methods protect both your trees and the environment. We prioritize eco-conscious techniques, including responsible pruning, recycling debris, and minimizing chemical use.",
    badge: "Eco-Friendly",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/50",
    borderColor: "border-emerald-200 dark:border-emerald-800"
  }, {
    icon: Pencil,
    title: "Personalized Service",
    description: "Every tree and yard is different. We tailor our approach to your property, offering solutions that make sense for your landscape and lifestyle.",
    badge: "Custom",
    bgColor: "bg-stone-100 dark:bg-stone-900/50",
    borderColor: "border-stone-300 dark:border-stone-700"
  }, {
    icon: Home,
    title: "Respect for Your Property",
    description: "Your home and yard are important to you, and they're important to us. We maintain clean work areas, minimize impact, and leave your property better than we found it.",
    badge: "Careful",
    bgColor: "bg-amber-50 dark:bg-amber-950/50",
    borderColor: "border-amber-200 dark:border-amber-800"
  }, {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Clear estimates, straightforward explanations, and consistent updates. We make sure you know what's happening and why, every step of the way.",
    badge: "Clear",
    bgColor: "bg-slate-50 dark:bg-slate-950/50",
    borderColor: "border-slate-200 dark:border-slate-800"
  }, {
    icon: Wrench,
    title: "Innovative Equipment & Techniques",
    description: "We invest in modern tools and proven methods to provide faster, safer, and more precise tree care for your property.",
    badge: "Advanced",
    bgColor: "bg-amber-60 dark:bg-amber-950/60",
    borderColor: "border-indigo-200 dark:border-indigo-800"
  }, {
    icon: Calendar,
    title: "Long-Term Care Focus",
    description: "We don't just trim or remove trees—we ensure their health and longevity with proactive care and practical advice for your property.",
    badge: "Proactive",
    bgColor: "bg-teal-50 dark:bg-teal-950/50",
    borderColor: "border-teal-200 dark:border-teal-800"
  }];
  return <section className="section-padding bg-background">
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
          {reasons.map((reason, index) => <Card key={reason.title} className={`hover-lift animate-fade-in shadow-soft ${reason.bgColor} ${reason.borderColor}`} style={{
          animationDelay: `${index * 0.1}s`
        }}>
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
            </Card>)}
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              What Our Clients Are Saying
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Read real feedback from satisfied clients who trust us for exceptional tree and landscaping services.
            </p>
            
            {/* Google Rating */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold">EXCELLENT</div>
                <div className="flex items-center gap-1 justify-center mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <div className="text-sm text-muted-foreground">Based on 128 reviews</div>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Reviews Carousel */}
          <Carousel 
            opts={{
              align: "start",
              loop: true
            }} 
            setApi={setApi}
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map(review => <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white dark:bg-gray-800 shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-lg">
                          {review.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-foreground">{review.name}</h4>
                            <div className="w-6 h-6 bg-white rounded-lg shadow-sm flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-4 h-4">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                              </svg>
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground mb-2">{review.date}</div>
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {review.text}
                      </p>
                      
                      {review.readMore && <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          Read more
                        </button>}
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>;
};
export default WhyChooseUsSection;