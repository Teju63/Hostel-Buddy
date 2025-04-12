
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">VitaliAegis</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              Your AI-powered healthcare companion designed specifically for hostel students.
              Get personalized health recommendations, real-time wellness monitoring, and emotional support.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/mental-health" className="text-muted-foreground hover:text-primary transition-colors">
                  Mental Health
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-muted-foreground hover:text-primary transition-colors">
                  Emergency
                </Link>
              </li>
              <li>
                <Link to="/ai-chat" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Chat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/health-monitoring" className="text-muted-foreground hover:text-primary transition-colors">
                  Health Monitoring
                </Link>
              </li>
              <li>
                <Link to="/nutrition-support" className="text-muted-foreground hover:text-primary transition-colors">
                  Nutrition Support
                </Link>
              </li>
              <li>
                <Link to="/life-balance" className="text-muted-foreground hover:text-primary transition-colors">
                  Life Balance
                </Link>
              </li>
              <li>
                <Link to="/fitness-assistant" className="text-muted-foreground hover:text-primary transition-colors">
                  Fitness Assistance
                </Link>
              </li>
              <li>
                <Link to="/daily-routine" className="text-muted-foreground hover:text-primary transition-colors">
                  Daily Routine
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VitaliAegis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
