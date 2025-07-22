import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Users, 
  Shield, 
  Globe, 
  Award,
  ArrowRight,
  CheckCircle,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const About = () => {
  const stats = [
    { number: "10,000+", label: "Active Designers" },
    { number: "50,000+", label: "Projects Completed" },
    { number: "150+", label: "Countries" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Designer-First",
      description: "We prioritize the success and growth of creative professionals"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Secure escrow system protecting both clients and designers"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connecting talent across borders for unlimited possibilities"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Maintaining high standards through careful vetting and reviews"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              About Creative Outlook Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're building the world's largest design-only freelance marketplace where every designer can thrive and every client finds exceptional creative solutions.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/signup">
                Join Our Community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-creative rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower and connect all types of designers with clients through a secure freelance platform built exclusively for creatives. We believe every designer deserves a platform that understands their unique needs and celebrates their creativity.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-creative to-primary rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the world's largest design-only freelance marketplace where every designer can earn from their skills and every business can find top-tier design solutions. We're creating the future of creative work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Creative Professionals Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our community continues to grow as more designers and clients discover the power of our platform
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Creative Outlook Services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-creative rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Designers Benefit */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                How Designers Benefit
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Instant Payments</h3>
                    <p className="text-muted-foreground">Get paid immediately when clients approve your work - no waiting periods</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fair Commission</h3>
                    <p className="text-muted-foreground">Keep 95% of your earnings with our transparent 5% platform fee</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Global Reach</h3>
                    <p className="text-muted-foreground">Access clients from around the world and expand your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Secure Environment</h3>
                    <p className="text-muted-foreground">Protected by our escrow system and dispute resolution process</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                How Clients Find Success
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Top-Tier Talent</h3>
                    <p className="text-muted-foreground">Access to vetted designers across all creative disciplines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Secure Payments</h3>
                    <p className="text-muted-foreground">Your money is protected in escrow until you approve the final work</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quality Assurance</h3>
                    <p className="text-muted-foreground">Every designer is verified and rated by previous clients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dedicated Support</h3>
                    <p className="text-muted-foreground">24/7 customer support and dispute resolution within 72 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-creative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join Our Creative Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a designer looking for opportunities or a client seeking exceptional creative solutions, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8" asChild>
              <Link to="/signup">
                Join as Designer
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/login">
                Find Designers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;