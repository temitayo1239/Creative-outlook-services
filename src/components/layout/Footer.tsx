import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-creative rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Creative Outlook</div>
                <div className="text-xs text-muted-foreground -mt-1">Centre of DesignHub</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Connecting top designers with clients worldwide through a secure freelance platform built for creatives.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all">
                <Linkedin className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/payment-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Payment Policy</Link></li>
            </ul>
          </div>

          {/* Design Categories */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Design Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Graphic Design</li>
              <li className="text-sm text-muted-foreground">Web & UI/UX Design</li>
              <li className="text-sm text-muted-foreground">App Development</li>
              <li className="text-sm text-muted-foreground">Animation & Motion</li>
              <li className="text-sm text-muted-foreground">Interior Design</li>
              <li className="text-sm text-muted-foreground">Architecture</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Creativeoutlookservices@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+234 808 582 4590</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">TBD<br />TBD</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Creative Outlook Services. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;