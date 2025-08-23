import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  Shield,
  Award,
  Send,
  User,
  Home
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactHeroImage from "@/assets/contact-hero-landscape.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "", 
    email: "",
    phone: "",
    address: "",
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
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        message: ""
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout hideCTA={true}>
      {/* Hero Section with Background Image and Overlaid Form */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${contactHeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content Container */}
        <div className="relative z-10 container-custom py-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Title */}
            <div className="text-center mb-12">
              <p className="text-primary text-lg font-semibold mb-4 tracking-wide">Contact Us</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Contact {"{{COMPANY_NAME}}"} -<br />
                <span className="text-emergency">Your Tree Care Experts</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Whether you need safe tree removal, professional pruning, or stump grinding, we're here to help. Call us today or fill out the form below to schedule your free consultation—our friendly crew is ready to keep your trees healthy and your property looking its best.
              </p>
            </div>

            {/* Contact Form - Centered */}
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                          First (Required)
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          required
                          className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="First Name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName" className="text-gray-700 font-medium mb-2 block">
                          Last (Required)
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          required
                          className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                          Email (Required)
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                          Phone (Required)
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                          className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-gray-700 font-medium mb-2 block">
                        Address (Required)
                      </Label>
                      <Input
                        id="address"
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        required
                        className="h-12 bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="123 Main St, City, State ZIP"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                        How Can We Help You?
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="min-h-[120px] bg-gray-100 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                        placeholder="Please describe your tree service needs, any specific concerns, or questions you have..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="accent"
                      size="xl" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Submit"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Information - Left Side (2 columns) */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              </div>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {"{{ADDRESS_LINE}}, {{CITY}}, {{STATE}} {{ZIP}}"}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:{{EMAIL}}" className="text-gray-600 hover:text-primary transition-colors">
                      {"{{EMAIL}}"}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call</h3>
                    <a href="tel:{{PHONE}}" className="text-gray-600 hover:text-primary transition-colors font-medium">
                      {"{{PHONE}}"}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hour of Operation</h3>
                    <p className="text-gray-600">{"{{HOURS}}"}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="{{FACEBOOK_URL}}" 
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors" 
                    aria-label="Facebook"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="{{INSTAGRAM_URL}}" 
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors" 
                    aria-label="Instagram"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="{{TWITTER_URL}}" 
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors" 
                    aria-label="Twitter"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="{{YELP_URL}}" 
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors" 
                    aria-label="Yelp"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.99-5.366 11.99-11.99C24.007 5.367 18.641.001 12.017.001zM8.449 19.64c-.172 0-.366-.006-.506-.034-.657-.134-.657-.134-.657-.502 0-.179.179-.387.208-.477.208-.716.208-.716 1.075-.716.716 0 .895.268.895.6 0 .417-.298.895-.895 1.075-.208.06-.597.06-.716.06l-.179-.006zm2.391-1.792c-.537 0-1.254-.387-1.254-1.344 0-.656.388-1.165 1.076-1.165.656 0 1.075.388 1.075 1.075 0 1.045-.656 1.434-1.075 1.434h-.178zm2.957-3.748c-.746 0-1.881-.567-1.881-1.702 0-.865.656-1.403 1.403-1.403.745 0 1.522.358 1.522 1.403 0 1.135-1.045 1.702-1.045 1.702z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps - Right Side (3 columns) */}
            <div className="lg:col-span-3">
              <div className="h-full min-h-[600px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9037813862945!2d-95.36935188449443!3d29.760427081999005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca2fe32138a61be2!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '600px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Service Area Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;