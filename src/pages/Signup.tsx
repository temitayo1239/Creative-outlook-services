import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Heart, Mail, Lock, User, Briefcase, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = () => {
    console.log("Submitting form with email:", email, "and password:", password);
    // Here you would typically handle the form submission, e.g., send data to your backend
    localStorage.setItem("loginData", JSON.stringify({ email, password, userType, location, fullname, company }));
    toast({
      title: "Login Successful",
      description: `Welcome back, ${user.fullname || "User"}!`,
      variant: "default",
    });
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
    // alert("Data saved successfully to localStorage!");
  }

  const designCategories = [
    "Graphic Design",
    "Web Design", 
    "UX/UI Design",
    "App Development",
    "Game Design",
    "Animation",
    "Interior Design",
    "Packaging Design",
    "Architectural Design",
    "Landscape Design",
    "Information Design",
    "Sound Design",
    "VR Design",
    "Printing",
    "Marketing Design",
    "Electrical Design",
    "Structural Design",
    "Fine Arts",
    "Sculpture"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-creative rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">Creative Outlook</div>
                <div className="text-xs text-muted-foreground -mt-1">Centre of DesignHub</div>
              </div>
            </Link>
            <h2 className="text-3xl font-bold text-foreground">Join Our Community</h2>
            <p className="mt-2 text-muted-foreground">
              Create your account to get started
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
              <CardDescription className="text-center">
                Choose your account type and create your profile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* User Type Selection */}
              <Tabs value={userType} onValueChange={setUserType} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="client" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Client</span>
                  </TabsTrigger>
                  <TabsTrigger value="designer" className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Designer</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="client" className="space-y-4 mt-6">
                  <div className="text-center text-sm text-muted-foreground mb-4">
                    Sign up to post projects and hire designers
                  </div>
                  
                  <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="client-full-name">Full Name</Label>
                        <Input
                          id="client-full-name"
                          placeholder="John Doe"
                          type="text"
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="client-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="client-email"
                          placeholder="john@example.com"
                          type="email"
                          className="pl-10"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="client-company">Company (Optional)</Label>
                      <Input
                        id="client-company"
                        placeholder="Your company name"
                        type="text"
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="client-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="client-password"
                          placeholder="Create a strong password"
                          type={showPassword ? "text" : "password"}
                          className="pl-10 pr-10"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="terms-client"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        required
                      />
                      <Label htmlFor="terms-client" className="text-sm">
                        I agree to the{" "}
                        <Link to="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    
                    <Button className="w-full" variant="default" size="lg" type="submit" onClick={handleSubmit}>
                      Create Client Account
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="designer" className="space-y-4 mt-6">
                  <div className="text-center text-sm text-muted-foreground mb-4">
                    Sign up to start earning from your design skills
                  </div>
                  
                  <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="designer-first-name">First Name</Label>
                        <Input
                          id="designer-full-name"
                          placeholder="Jane Smith"
                          type="text"
                        />
                      </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="designer-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="designer-email"
                          placeholder="jane@example.com"
                          type="email"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="designer-specialization">Design Specialization</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your main specialization" />
                        </SelectTrigger>
                        <SelectContent>
                          {designCategories.map((category) => (
                            <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="designer-location">Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="designer-location"
                          placeholder="City, Country"
                          type="text"
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="designer-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="designer-password"
                          placeholder="Create a strong password"
                          type={showPassword ? "text" : "password"}
                          className="pl-10 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        id="terms-designer"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-creative focus:ring-creative border-gray-300 rounded"
                        required
                      />
                      <Label htmlFor="terms-designer" className="text-sm">
                        I agree to the{" "}
                        <Link to="/terms" className="text-creative hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-creative hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    
                    <Button className="w-full" variant="creative" size="lg">
                      Create Designer Account
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button variant="outline" className="w-full">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="text-primary hover:underline font-medium">
              Sign in here
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Signup;