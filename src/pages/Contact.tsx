import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Star,
  Shield,
  Award,
  Send,
  User,
  Home
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    urgency: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll contact you within 24 hours to discuss your tree service needs.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        urgency: "",
        message: ""
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground section-padding-sm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero mb-6">Get Your Free Tree Service Estimate</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Ready to enhance your property with professional tree care? Contact our certified arborists 
              for a comprehensive assessment and customized solution.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="accent" size="xl" asChild>
                <a href="tel:{{PHONE}}">
                  <Phone className="h-5 w-5" />
                  Call {"{{PHONE}}"}
                </a>
              </Button>
              <Button variant="hero" size="xl">
                <MessageSquare className="h-5 w-5" />
                24/7 Emergency Service
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>ISA Certified Arborists</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>5-Star Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="h-6 w-6 text-primary" />
                    Request Your Free Estimate
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll contact you within 24 hours to schedule your consultation.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">
                          <Mail className="h-4 w-4 inline mr-2" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">
                          <Phone className="h-4 w-4 inline mr-2" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service">Service Needed</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tree-trimming">Tree Trimming & Pruning</SelectItem>
                            <SelectItem value="tree-removal">Tree Removal</SelectItem>
                            <SelectItem value="stump-grinding">Stump Grinding</SelectItem>
                            <SelectItem value="emergency">Emergency Service</SelectItem>
                            <SelectItem value="land-clearing">Land Clearing</SelectItem>
                            <SelectItem value="health-management">Tree Health Management</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">
                        <Home className="h-4 w-4 inline mr-2" />
                        Property Address
                      </Label>
                      <Input
                        id="address"
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        className="mt-1"
                        placeholder="123 Main St, City, State ZIP"
                      />
                    </div>

                    <div>
                      <Label htmlFor="urgency">Project Timeline</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="When do you need service?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                          <SelectItem value="urgent">Within 1 week</SelectItem>
                          <SelectItem value="soon">Within 1 month</SelectItem>
                          <SelectItem value="planning">Just planning ahead</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="mt-1 min-h-[120px]"
                        placeholder="Please describe your tree service needs, any specific concerns, or questions you have..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      variant="cta" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send My Request
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted about tree services. 
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <p className="text-muted-foreground">
                    Reach out to us directly for immediate assistance or questions.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:{{PHONE}}" className="text-primary hover:underline font-medium">
                        {"{{PHONE}}"}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        24/7 Emergency Service Available
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:{{EMAIL}}" className="text-primary hover:underline">
                        {"{{EMAIL}}"}
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 2 hours during business hours
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Service Area</h4>
                      <p>{"{{ADDRESS_LINE}}"}</p>
                      <p>{"{{CITY}}, {{STATE}} {{ZIP}}"}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Serving {"{{SERVICE_AREAS}}"}
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p>{"{{HOURS}}"}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Emergency services available 24/7
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3">Follow Us</h4>
                    <div className="flex gap-3">
                      <a 
                        href="{{FACEBOOK_URL}}" 
                        className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" 
                        aria-label="Facebook"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a 
                        href="{{INSTAGRAM_URL}}" 
                        className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" 
                        aria-label="Instagram"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297l-.272-.272-.408.816c-.272.544-.816.816-1.36.816-.544 0-1.088-.272-1.36-.816L.907 14.419c-.272-.544-.272-1.088 0-1.632l.816-1.632c.272-.544.816-.816 1.36-.816.544 0 1.088.272 1.36.816l.408.816.272-.272c.878-.807 2.029-1.297 3.326-1.297 2.594 0 4.623 2.029 4.623 4.623s-2.029 4.623-4.623 4.623zm7.347-1.297l-.408-.816-.272.272c-.878.807-2.029 1.297-3.326 1.297-2.594 0-4.623-2.029-4.623-4.623s2.029-4.623 4.623-4.623c1.297 0 2.448.49 3.326 1.297l.272.272.408-.816c.272-.544.816-.816 1.36-.816.544 0 1.088.272 1.36.816l.816 1.632c.272.544.272 1.088 0 1.632l-.816 1.632c-.272.544-.816.816-1.36.816-.544 0-1.088-.272-1.36-.816z"/>
                        </svg>
                      </a>
                      <a 
                        href="{{TWITTER_URL}}" 
                        className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" 
                        aria-label="Twitter"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a 
                        href="{{LINKEDIN_URL}}" 
                        className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" 
                        aria-label="LinkedIn"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Our Service Area
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9037813862945!2d-95.36935188449443!3d29.760427081999005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca2fe32138a61be2!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Our Service Area Map"
                      className="rounded-b-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="bg-emergency text-emergency-foreground section-padding-sm">
        <div className="container-custom text-center">
          <h2 className="text-section-title mb-4">Emergency Tree Service?</h2>
          <p className="text-lg text-emergency-foreground/90 mb-6 max-w-2xl mx-auto">
            Storm damage, fallen trees, or dangerous situations? Our emergency response team is available 24/7.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="tel:{{PHONE}}">
              <Phone className="h-5 w-5" />
              Call Emergency Line: {"{{PHONE}}"}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;