import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  CreditCard, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign,
  Lock,
  FileText,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const PaymentPolicy = () => {
  const paymentFeatures = [
    {
      icon: Shield,
      title: "Secure Escrow System",
      description: "Your payment is held safely until project completion",
      details: [
        "Funds are protected by bank-level security",
        "Payment only released when work is approved",
        "Full refund protection for undelivered work",
        "Industry-standard encryption protocols"
      ]
    },
    {
      icon: DollarSign,
      title: "5% Platform Commission",
      description: "Transparent pricing with no hidden fees",
      details: [
        "Creative Outlook Services keeps 5% of each transaction",
        "Designers receive 95% of the project value",
        "No additional processing fees",
        "Volume discounts available for enterprise clients"
      ]
    },
    {
      icon: Clock,
      title: "Instant Payouts",
      description: "Designers get paid immediately upon approval",
      details: [
        "Payment released within minutes of approval",
        "Multiple withdrawal methods available",
        "No waiting periods or holds",
        "Real-time payment notifications"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Client Pays Upfront",
      description: "Client deposits full project amount into secure escrow",
      icon: CreditCard
    },
    {
      step: "2",
      title: "Designer Delivers Work",
      description: "Designer completes and submits the project deliverables",
      icon: FileText
    },
    {
      step: "3",
      title: "Client Reviews & Approves", 
      description: "Client has 5 days to review and either approve or request revisions",
      icon: CheckCircle
    },
    {
      step: "4",
      title: "Payment Released",
      description: "95% of payment instantly goes to designer, 5% to platform",
      icon: DollarSign
    }
  ];

  const disputeProcess = [
    {
      title: "Report an Issue",
      description: "Either party can open a dispute within 72 hours of delivery",
      timeframe: "Within 72 hours"
    },
    {
      title: "Mediation Process",
      description: "Our support team reviews all evidence and communications",
      timeframe: "1-3 business days"
    },
    {
      title: "Resolution",
      description: "Fair resolution based on original project requirements",
      timeframe: "Within 5 business days"
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
              Payment Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Understanding our secure payment system, escrow protection, and commission structure
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/signup">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Secure Payment Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our payment system is designed to protect both clients and designers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {paymentFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-creative rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How Payments Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple 4-step process that protects everyone involved
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-creative text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commission & Fees */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-success to-primary rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Commission Structure</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Designer Keeps</span>
                    <span className="text-2xl font-bold text-success">95%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Platform Fee</span>
                    <span className="text-2xl font-bold text-primary">5%</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">Hidden Fees</span>
                    <span className="text-2xl font-bold text-destructive">0%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Our transparent pricing means no surprises. What you see is what you pay.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-creative rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Auto-Approval Policy</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">5-Day Review Period</h3>
                      <p className="text-muted-foreground text-sm">Clients have 5 days to review and request revisions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Automatic Approval</h3>
                      <p className="text-muted-foreground text-sm">If no action is taken, work is automatically approved</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Instant Payment</h3>
                      <p className="text-muted-foreground text-sm">Designer receives payment immediately after approval</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Dispute Resolution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fair and fast resolution when issues arise
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {disputeProcess.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-destructive to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                    <div className="inline-block bg-destructive/10 text-destructive px-3 py-1 rounded-full text-xs font-medium">
                      {step.timeframe}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-12 border-destructive/20">
              <CardContent className="p-8 text-center">
                <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Important Note</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Disputes must be opened within 72 hours of work delivery. Our mediation team reviews all communications, 
                  project requirements, and deliverables to ensure fair resolution for all parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Accepted Payment Methods
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple secure payment options for your convenience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Credit Cards", description: "Visa, MasterCard, American Express" },
              { name: "PayPal", description: "Secure PayPal payments" },
              { name: "Bank Transfer", description: "Direct bank transfers" },
              { name: "Digital Wallets", description: "Apple Pay, Google Pay" }
            ].map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{method.name}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
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
            Questions About Our Payment Policy?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you understand our secure payment system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/how-it-works">
                Learn How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentPolicy;