
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { 
  Activity, 
  Brain, 
  Utensils, 
  Clock, 
  Dumbbell, 
  AlertCircle, 
  MessageSquare,
  ArrowDown,
  Heart,
  Calendar
} from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-pattern relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Personal <span className="text-primary">Health Guardian</span> at College
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              VitaliAegis provides personalized healthcare support designed specifically for hostel students.
              Monitor your health, get nutrition guidance, and access mental wellness resources - all in one place.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/dashboard">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/ai-chat">Talk to AI</Link>
              </Button>
            </div>
            <div className="mt-16 animate-bounce">
              <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Complete Health Support System</h2>
            <p className="text-muted-foreground">
              Designed to address the unique health challenges faced by hostel students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/health-monitoring">
              <FeatureCard
                icon={Activity}
                title="Health Monitoring"
                description="Track your physical activity, diet patterns, and sleep cycles with personalized recommendations."
              />
            </Link>
            <Link to="/nutrition-support">
              <FeatureCard
                icon={Utensils}
                title="Nutrition Support"
                description="Get AI-curated healthy meal plans and budget-friendly nutrition guidance for hostel living."
              />
            </Link>
            <Link to="/mental-health">
              <FeatureCard
                icon={Brain}
                title="Mental Wellness"
                description="Access daily mood check-ins, meditation tools, and a confidential AI emotional support system."
              />
            </Link>
            <Link to="/life-balance">
              <FeatureCard
                icon={Clock}
                title="Life Balance"
                description="Smart scheduling tools to manage study time, rest periods, and fitness activities."
              />
            </Link>
            <Link to="/fitness-assistant">
              <FeatureCard
                icon={Dumbbell}
                title="Fitness Assistant"
                description="Quick 10-20 minute hostel room workouts and daily stretching/yoga recommendations."
              />
            </Link>
            <Link to="/emergency">
              <FeatureCard
                icon={AlertCircle}
                title="Emergency Help"
                description="One-tap access to nearby hospitals and an AI-assisted symptom checker for urgent situations."
              />
            </Link>
            <Link to="/daily-routine" className="lg:col-span-3 md:max-w-md md:mx-auto">
              <FeatureCard
                icon={Calendar}
                title="Ideal Daily Routine"
                description="Follow our balanced schedule designed for optimal physical and mental wellbeing of hostel students."
              />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Chat Preview */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Your Personal Health AI Assistant</h2>
              <p className="text-muted-foreground mb-6">
                Talk to our AI health assistant about any physical or mental health concerns. 
                Get immediate guidance, personalized advice, and emotional support whenever you need it.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                  <span>Ask about nutrition, exercise, or sleep recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                  <span>Get guidance for managing academic stress</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                  <span>Receive mental health support and coping strategies</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/ai-chat">Try AI Chat Now</Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="bg-muted rounded-lg p-4 mb-4">
                <div className="flex gap-2 mb-3">
                  <div className="bg-red-400 w-3 h-3 rounded-full"></div>
                  <div className="bg-yellow-400 w-3 h-3 rounded-full"></div>
                  <div className="bg-green-400 w-3 h-3 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">Hello! I'm your health assistant. How can I help you today?</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 justify-end">
                    <div className="bg-accent/10 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">I've been having trouble sleeping since midterms started.</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white">
                      <span className="text-xs">You</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">I understand academic stress can disrupt sleep. Let me suggest some techniques: limit screen time before bed, try a 10-minute relaxation exercise, and keep a consistent sleep schedule even on weekends.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
            <p className="text-muted-foreground mb-8">
              Start your journey to better physical and mental wellbeing with VitaliAegis today.
            </p>
            <Button size="lg" asChild>
              <Link to="/dashboard">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
