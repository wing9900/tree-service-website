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
    <Layout>
      {/* Hero Section with Background Image and Overlaid Form */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${contactHeroImage})` }}
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
                Contact H&H Tree Service -<br />
                <span className="text-primary">Your Tree Care Experts</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Contact us for expert tree care and landscaping services tailored to meet your property's needs.
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
                      className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-colors duration-200" 
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
                      15906 Pasadero Dr. Houston TX, 77083
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
                    <a href="mailto:hhtsl.tx@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                      hhtsl.tx@gmail.com
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
                    <a href="tel:(832) 606-3666" className="text-gray-600 hover:text-primary transition-colors font-medium">
                      (832) 606-3666
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
                    <p className="text-gray-600">Mon - Sun : 7 AM to 8 PM</p>
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
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM15.156 12.504c0 1.747-1.413 3.16-3.16 3.16s-3.16-1.413-3.16-3.16 1.413-3.16 3.16-3.16 3.16 1.413 3.16 3.16zM18.407 8.19c-.413 0-.747-.334-.747-.747s.334-.747.747-.747.747.334.747.747-.334.747-.747.747zM12.017 6.423c-3.259 0-5.897 2.638-5.897 5.897s2.638 5.897 5.897 5.897 5.897-2.638 5.897-5.897-2.638-5.897-5.897-5.897zM20.956 5.592c-.947-.947-2.064-1.421-3.338-1.421H6.463c-1.274 0-2.391.474-3.338 1.421-.947.947-1.421 2.064-1.421 3.338v11.155c0 1.274.474 2.391 1.421 3.338.947.947 2.064 1.421 3.338 1.421h11.155c1.274 0 2.391-.474 3.338-1.421.947-.947 1.421-2.064 1.421-3.338V8.93c0-1.274-.474-2.391-1.421-3.338z"/>
                    </svg>
                  </a>
                  <a 
                    href="{{TWITTER_URL}}" 
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors" 
                    aria-label="Yelp"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297l-.272-.272-.408.816c-.272.544-.816.816-1.36.816-.544 0-1.088-.272-1.36-.816L.907 14.419c-.272-.544-.272-1.088 0-1.632l.816-1.632c.272-.544.816-.816 1.36-.816.544 0 1.088.272 1.36.816l.408.816.272-.272c.878-.807 2.029-1.297 3.326-1.297 2.594 0 4.623 2.029 4.623 4.623s-2.029 4.623-4.623 4.623zm7.347-1.297l-.408-.816-.272.272c-.878.807-2.029 1.297-3.326 1.297-2.594 0-4.623-2.029-4.623-4.623s2.029-4.623 4.623-4.623c1.297 0 2.448.49 3.326 1.297l.272.272.408-.816c.272-.544.816-.816 1.36-.816.544 0 1.088.272 1.36.816l.816 1.632c.272.544.272 1.088 0 1.632l-.816 1.632c-.272.544-.816.816-1.36.816-.544 0-1.088-.272-1.36-.816z"/>
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