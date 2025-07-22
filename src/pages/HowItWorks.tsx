import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Search, 
  CreditCard, 
  CheckCircle, 
  User, 
  Briefcase, 
  Send, 
  DollarSign,
  ArrowRight,
  Clock,
  Shield,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const HowItWorks = () => {
  const clientSteps = [
    {
      icon: FileText,
      number: "1",
      title: "Post Your Project",
      description: "Describe your design needs, budget, timeline, and requirements in detail",
      details: [
        "Upload reference materials and inspiration",
        "Set your budget and project timeline", 
        "Specify the type of designer you need",
        "Add any special requirements or preferences"
      ]
    },
    {
      icon: Search,
      number: "2", 
      title: "Browse & Hire Designers",
      description: "Review portfolios, ratings, and proposals from qualified designers",
      details: [
        "Browse designer profiles and portfolios",
        "Read reviews from previous clients",
        "Compare proposals and pricing",
        "Interview designers via our messaging system"
      ]
    },
    {
      icon: CreditCard,
      number: "3",
      title: "Pay Securely to Escrow",
      description: "Your payment is held safely by Creative Outlook Services until project completion",
      details: [
        "Funds are held in secure escrow",
        "Payment only released when you approve",
        "Multiple payment options available",
        "Full refund if project terms aren't met"
      ]
    },
    {
      icon: CheckCircle,
      number: "4",
      title: "Approve & Release Payment",
      description: "Review the final work and approve to instantly release payment to your designer",
      details: [
        "Review delivered work carefully",
        "Request revisions if needed (within agreement)",
        "Approve when satisfied with the result",
        "Designer receives 95% payout immediately"
      ]
    }
  ];

  const designerSteps = [
    {
      icon: User,
      number: "1",
      title: "Create Your Profile",
      description: "Showcase your skills, portfolio, and experience to attract the right clients",
      details: [
        "Upload your best portfolio pieces",
        "Write a compelling profile description",
        "Set your hourly rates and availability",
        "Complete verification process"
      ]
    },
    {
      icon: Briefcase,
      number: "2",
      title: "Find & Apply for Jobs",
      description: "Browse available projects and submit proposals that showcase your expertise",
      details: [
        "Browse projects in your specialty",
        "Submit customized proposals",
        "Communicate with potential clients",
        "Get selected based on your portfolio"
      ]
    },
    {
      icon: Send,
      number: "3",
      title: "Deliver Amazing Work",
      description: "Create and submit your design work according to the project requirements",
      details: [
        "Follow project brief and timeline",
        "Maintain regular communication",
        "Deliver high-quality work on time",
        "Make revisions as agreed upon"
      ]
    },
    {
      icon: DollarSign,
      number: "4",
      title: "Get Paid Instantly",
      description: "Receive 95% of the project payment immediately once client approves your work",
      details: [
        "Instant payment upon client approval",
        "Keep 95% of the project value",
        "Multiple withdrawal options",
        "Build your reputation with reviews"
      ]
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "5-Day Auto-Approval",
      description: "If no feedback is received within 5 days, work is automatically approved"
    },
    {
      icon: Shield,
      title: "Dispute Resolution",
      description: "Professional mediation available within 72 hours if issues arise"
    },
    {
      icon: MessageCircle,
      title: "Built-in Communication",
      description: "Secure messaging system for all project communications"
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
              How Creative Outlook Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our platform makes it simple and secure for clients to find amazing designers and for designers to find great projects
            </p>
          </div>
        </div>
      </section>

      {/* Process Tabs */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="clients" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="clients" className="text-lg">For Clients</TabsTrigger>
              <TabsTrigger value="designers" className="text-lg">For Designers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="clients" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  How Clients Use Our Platform
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get your design project completed by top professionals in just 4 simple steps
                </p>
              </div>
              
              <div className="space-y-12">
                {clientSteps.map((step, index) => (
                  <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-8">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-primary to-creative text-white rounded-full flex items-center justify-center font-bold text-xl">
                              {step.number}
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <step.icon className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                          <p className="text-muted-foreground mb-6">{step.description}</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                      <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-creative/20 rounded-full flex items-center justify-center">
                        <step.icon className="w-24 h-24 text-primary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="designers" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  How Designers Earn on Our Platform
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Start earning from your design skills with our simple 4-step process
                </p>
              </div>
              
              <div className="space-y-12">
                {designerSteps.map((step, index) => (
                  <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-8">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-creative to-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                              {step.number}
                            </div>
                            <div className="w-12 h-12 bg-creative/10 rounded-lg flex items-center justify-center">
                              <step.icon className="w-6 h-6 text-creative" />
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                          <p className="text-muted-foreground mb-6">{step.description}</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                    <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                      <div className="w-64 h-64 bg-gradient-to-br from-creative/20 to-primary/20 rounded-full flex items-center justify-center">
                        <step.icon className="w-24 h-24 text-creative" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built-in protections and features that make working together seamless
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-creative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of clients and designers who trust Creative Outlook Services for their projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8" asChild>
              <Link to="/signup">
                Start as Designer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/login">
                Post a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;