
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, Brain, Activity, AlertTriangle, Utensils, Clock, Dumbbell, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <Link to="/" className="text-xl font-bold text-foreground">
            VitaliAegis
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/health-monitoring" className="text-sm font-medium hover:text-primary transition-colors">
            Health Monitoring
          </Link>
          <Link to="/mental-health" className="text-sm font-medium hover:text-primary transition-colors">
            Mental Health
          </Link>
          <Link to="/nutrition-support" className="text-sm font-medium hover:text-primary transition-colors">
            Nutrition
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button>Sign In</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <Activity className="h-4 w-4" />
              Dashboard
            </Link>
            <Link 
              to="/health-monitoring" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <Activity className="h-4 w-4" />
              Health Monitoring
            </Link>
            <Link 
              to="/mental-health" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <Brain className="h-4 w-4" />
              Mental Health
            </Link>
            <Link 
              to="/nutrition-support" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <Utensils className="h-4 w-4" />
              Nutrition
            </Link>
            <Link 
              to="/life-balance" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <Clock className="h-4 w-4" />
              Life Balance
            </Link>
            <Link 
              to="/fitness-assistant" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <Dumbbell className="h-4 w-4" />
              Fitness Assistant
            </Link>
            <Link 
              to="/daily-routine" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <Clock className="h-4 w-4" />
              Daily Routine
            </Link>
            <Link 
              to="/emergency" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <AlertTriangle className="h-4 w-4" />
              Emergency
            </Link>
            <Link 
              to="/ai-chat" 
              className="flex items-center gap-2 p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              <MessageSquare className="h-4 w-4" />
              AI Chat
            </Link>
            <Button className="w-full mt-2">Sign In</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
