import { useState, useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  CreditCard, 
  TrendingUp, 
  MessageSquare, 
  Star, 
  User, 
  Mail, 
  Building,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Banknote,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Bell,
  Settings,
  BarChart3,
  Users,
  FileText,
  Award,
  Zap,
  Target,
  Eye,
  Download,
  Share2,
  Edit
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [user, setUser] = useState({
    name: "",
    role: "",
    email: "",
    company: "",
    balance: 0
  });
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("loginData");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser({
          name: parsedUser.fullname || "User",
          role: parsedUser.userType === "designer" ? "Designer" : "Client",
          email: parsedUser.email || "",
          company: parsedUser.company || "",
          balance: 2340 // Mock balance, in real app this would come from backend
        });
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (amount > 0) {
      setUser(prev => ({ ...prev, balance: prev.balance + amount }));
      setDepositAmount("");
      setShowDepositForm(false);
      toast({
        title: "Deposit Successful",
        description: `$${amount} has been added to your balance.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to deposit.",
        variant: "destructive",
      });
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (amount > 0 && amount <= user.balance) {
      setUser(prev => ({ ...prev, balance: prev.balance - amount }));
      setWithdrawAmount("");
      setShowWithdrawForm(false);
      toast({
        title: "Withdrawal Successful",
        description: `$${amount} has been withdrawn from your balance.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Invalid Amount",
        description: amount > user.balance ? "Insufficient balance." : "Please enter a valid amount to withdraw.",
        variant: "destructive",
      });
    }
  };

  const stats = [
    { 
      label: "Total Balance", 
      value: `$${user.balance.toLocaleString()}`, 
      icon: Wallet,
      color: "text-green-600",
      bgColor: "bg-green-50",
      change: "+12.5%",
      changeType: "positive"
    },
    { 
      label: "Active Projects", 
      value: "8", 
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      change: "+2",
      changeType: "positive"
    },
    { 
      label: "Messages", 
      value: "23", 
      icon: MessageSquare,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      change: "+5",
      changeType: "positive"
    },
    { 
      label: "Rating", 
      value: "4.8", 
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      change: "+0.2",
      changeType: "positive"
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: "Brand Identity Design",
      client: "TechFlow Inc",
      status: "In Progress",
      progress: 75,
      deadline: "2024-02-15",
      budget: "$2,500"
    },
    {
      id: 2,
      title: "Website Redesign",
      client: "GrowthLab",
      status: "Completed",
      progress: 100,
      deadline: "2024-02-10",
      budget: "$3,200"
    },
    {
      id: 3,
      title: "Mobile App UI",
      client: "StartupXYZ",
      status: "Review",
      progress: 90,
      deadline: "2024-02-20",
      budget: "$4,100"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Payment Received",
      message: "You received $2,500 for Brand Identity Design",
      time: "2 hours ago",
      icon: CheckCircle
    },
    {
      id: 2,
      type: "warning",
      title: "Project Deadline",
      message: "Mobile App UI project is due in 3 days",
      time: "4 hours ago",
      icon: AlertCircle
    },
    {
      id: 3,
      type: "info",
      title: "New Message",
      message: "Client TechFlow Inc sent you a message",
      time: "6 hours ago",
      icon: MessageSquare
    }
  ];

  const earningsData = [
    { month: "Jan", earnings: 3200 },
    { month: "Feb", earnings: 4100 },
    { month: "Mar", earnings: 3800 },
    { month: "Apr", earnings: 5200 },
    { month: "May", earnings: 4800 },
    { month: "Jun", earnings: 6100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, {user.name}!</h1>
              <p className="text-gray-600">Here's what's happening with your account today.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <Badge variant={stat.changeType === "positive" ? "default" : "secondary"} className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Financial & Projects */}
          <div className="lg:col-span-2 space-y-8">
            {/* Financial Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <ArrowDownRight className="w-5 h-5 text-green-600" />
                    <span>Deposit Funds</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!showDepositForm ? (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-green-600" />
                      </div>
                      <p className="text-gray-600 mb-4">Add funds to your account securely</p>
                      <Button onClick={() => setShowDepositForm(true)} className="w-full">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Deposit Money
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="deposit-amount" className="text-sm font-medium">Amount ($)</Label>
                        <Input
                          id="deposit-amount"
                          type="number"
                          placeholder="Enter amount"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button onClick={handleDeposit} className="flex-1">
                          Confirm Deposit
                        </Button>
                        <Button variant="outline" onClick={() => setShowDepositForm(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <ArrowUpRight className="w-5 h-5 text-red-600" />
                    <span>Withdraw Funds</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!showWithdrawForm ? (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Banknote className="w-8 h-8 text-red-600" />
                      </div>
                      <p className="text-gray-600 mb-4">Withdraw funds to your bank account</p>
                      <Button onClick={() => setShowWithdrawForm(true)} className="w-full">
                        <Banknote className="w-4 h-4 mr-2" />
                        Withdraw Money
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="withdraw-amount" className="text-sm font-medium">Amount ($)</Label>
                        <Input
                          id="withdraw-amount"
                          type="number"
                          placeholder="Enter amount"
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button onClick={handleWithdraw} className="flex-1">
                          Confirm Withdrawal
                        </Button>
                        <Button variant="outline" onClick={() => setShowWithdrawForm(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Projects Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Recent Projects</CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{project.title}</div>
                          <div className="text-sm text-gray-600">{project.client}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{project.budget}</div>
                          <div className="text-sm text-gray-600">Budget</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{project.progress}%</div>
                          <div className="text-sm text-gray-600">Progress</div>
                        </div>
                        <Badge variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Profile & Notifications */}
          <div className="space-y-8">
            {/* User Profile */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Profile Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-creative flex items-center justify-center text-white text-2xl font-bold">
                    {user.name[0] || "U"}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{user.name}</div>
                    <Badge variant="secondary" className="mt-1">{user.role}</Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{user.email}</span>
                  </div>
                  {user.company && (
                    <div className="flex items-center space-x-3 text-sm">
                      <Building className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{user.company}</span>
                    </div>
                  )}
                </div>
                <Button variant="outline" className="w-full">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        notification.type === "success" ? "bg-green-100" : 
                        notification.type === "warning" ? "bg-yellow-100" : "bg-blue-100"
                      }`}>
                        <notification.icon className={`w-4 h-4 ${
                          notification.type === "success" ? "text-green-600" : 
                          notification.type === "warning" ? "text-yellow-600" : "text-blue-600"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{notification.title}</div>
                        <div className="text-sm text-gray-600">{notification.message}</div>
                        <div className="text-xs text-gray-500 mt-1">{notification.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Browse Projects
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  View Messages
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  Portfolio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard; 