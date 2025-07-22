import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Monitor, 
  Smartphone, 
  Gamepad2, 
  Video, 
  Home, 
  Package, 
  Building, 
  TreePine, 
  BarChart3,
  MousePointer,
  Volume2,
  Headset,
  Printer,
  TrendingUp,
  Zap,
  Wrench,
  Paintbrush2,
  Hammer,
  ArrowRight,
  Shield,
  Globe,
  Clock,
  Star,
  CheckCircle,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import heroImage from "@/assets/hero-creative-marketplace.jpg";

const Homepage = () => {
  const categories = [
    { name: "Graphic Design", icon: Palette, color: "bg-pink-100 text-pink-600" },
    { name: "Web Design", icon: Monitor, color: "bg-blue-100 text-blue-600" },
    { name: "UX/UI Design", icon: MousePointer, color: "bg-purple-100 text-purple-600" },
    { name: "App Development", icon: Smartphone, color: "bg-green-100 text-green-600" },
    { name: "Game Design", icon: Gamepad2, color: "bg-orange-100 text-orange-600" },
    { name: "Animation", icon: Video, color: "bg-red-100 text-red-600" },
    { name: "Interior Design", icon: Home, color: "bg-yellow-100 text-yellow-600" },
    { name: "Packaging Design", icon: Package, color: "bg-indigo-100 text-indigo-600" },
    { name: "Architecture", icon: Building, color: "bg-gray-100 text-gray-600" },
    { name: "Landscape Design", icon: TreePine, color: "bg-emerald-100 text-emerald-600" },
    { name: "Information Design", icon: BarChart3, color: "bg-cyan-100 text-cyan-600" },
    { name: "Sound Design", icon: Volume2, color: "bg-teal-100 text-teal-600" }
  ];

  const features = [
    {
      icon: Paintbrush2,
      title: "Only Designers",
      description: "Exclusively for creative professionals across all design disciplines"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Safe escrow system with 5% commission and instant payouts"
    },
    {
      icon: Globe,
      title: "Global Talent",
      description: "Connect with top designers worldwide for any creative project"
    }
  ];

  const howItWorksSteps = [
    {
      step: "1",
      title: "Post Your Project",
      description: "Describe your design needs and budget",
      userType: "client"
    },
    {
      step: "2", 
      title: "Get Matched",
      description: "Browse and hire perfect designers",
      userType: "client"
    },
    {
      step: "3",
      title: "Pay Safely",
      description: "Your payment is held in secure escrow",
      userType: "client"
    },
    {
      step: "4",
      title: "Receive Work",
      description: "Get your finished design and approve",
      userType: "client"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc",
      content: "Creative Outlook Services helped us find an amazing UI designer who transformed our app interface. The process was smooth and secure.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Graphic Designer",
      company: "Freelancer",
      content: "As a designer, I love the instant payment system. Once clients approve my work, I get paid immediately with just a 5% fee.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder", 
      company: "GrowthLab",
      content: "The quality of designers on this platform is outstanding. We found our brand designer here and couldn't be happier.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-creative/95"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Welcome to Creative Outlook Services
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              The centre of DesignHub. Connect with top designers across all fields and bring your creative vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="px-8">
                <Search className="w-5 h-5 mr-2" />
                Browse Designers
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <ArrowRight className="w-5 h-5 mr-2" />
                Join as a Designer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories Grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Top Design Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find expert designers in every creative field imaginable
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Creative Outlook Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The premier marketplace designed exclusively for creative professionals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-creative rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started is easy for both clients and designers
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Clients */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">For Clients</h3>
              <div className="space-y-6">
                {howItWorksSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-creative text-white rounded-full flex items-center justify-center font-semibold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Designers */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">For Designers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-creative to-primary text-white rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Create Profile</h4>
                    <p className="text-muted-foreground">Showcase your portfolio and skills</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-creative to-primary text-white rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Receive Jobs</h4>
                    <p className="text-muted-foreground">Get matched with perfect projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-creative to-primary text-white rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Submit Work</h4>
                    <p className="text-muted-foreground">Deliver amazing designs on time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-creative to-primary text-white rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Get Paid Instantly</h4>
                    <p className="text-muted-foreground">95% payout once approved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/how-it-works">
                Learn More About Our Process
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of clients and designers worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-creative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Creative Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients and designers on our secure platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              Browse Designers
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              Join as Designer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;