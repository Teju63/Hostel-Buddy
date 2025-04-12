
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HealthMetricCard from "@/components/HealthMetricCard";
import { 
  Heart, 
  Moon, 
  Utensils, 
  Dumbbell, 
  Brain, 
  Droplets,
  Activity,
  BarChart
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Health Dashboard</h1>
      <p className="text-muted-foreground mb-8">Track and manage your health metrics in one place</p>
      
      {/* Health Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <HealthMetricCard
          icon={Heart}
          title="Heart Rate"
          value="72 bpm"
          status="good"
          change="Normal resting rate"
        />
        <HealthMetricCard
          icon={Moon}
          title="Sleep"
          value="6.5 hrs"
          status="warning"
          change="Below recommended 8hrs"
        />
        <HealthMetricCard
          icon={Utensils}
          title="Nutrition"
          value="60%"
          status="warning"
          change="Missing key nutrients"
        />
        <HealthMetricCard
          icon={Droplets}
          title="Hydration"
          value="1.2L"
          status="alert"
          change="Below 2L daily target"
        />
      </div>
      
      {/* Daily Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Daily Activity
            </CardTitle>
            <CardDescription>Your movement and exercise today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Steps</span>
                  <span className="text-sm text-muted-foreground">4,287 / 10,000</span>
                </div>
                <Progress value={42.87} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Active Minutes</span>
                  <span className="text-sm text-muted-foreground">28 / 60</span>
                </div>
                <Progress value={46.67} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Strength</span>
                  </div>
                  <p className="text-2xl font-bold mt-2">0 min</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center">
                    <Activity className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Cardio</span>
                  </div>
                  <p className="text-2xl font-bold mt-2">15 min</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Mental Wellness
            </CardTitle>
            <CardDescription>Daily mood and stress levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="text-5xl mb-3">😐</div>
              <h3 className="font-medium">Neutral</h3>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Your mood appears stable today. Consider a quick meditation to boost your wellbeing.
              </p>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Stress Level</span>
                <span className="text-sm text-muted-foreground">Medium</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart className="h-5 w-5 text-primary" />
            Today's Recommendations
          </CardTitle>
          <CardDescription>Personalized suggestions based on your health data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <Droplets className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium">Increase water intake</h3>
                <p className="text-sm text-muted-foreground">You're below your hydration target. Try to drink at least 800ml more water today.</p>
              </div>
            </div>
            
            <div className="flex gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
              <Moon className="h-5 w-5 text-purple-600 mt-1" />
              <div>
                <h3 className="font-medium">Improve sleep quality</h3>
                <p className="text-sm text-muted-foreground">Try going to bed 30 minutes earlier and avoid screens before bedtime.</p>
              </div>
            </div>
            
            <div className="flex gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
              <Dumbbell className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <h3 className="font-medium">Quick dorm room workout</h3>
                <p className="text-sm text-muted-foreground">A 15-minute bodyweight routine can boost your energy and focus for studying.</p>
              </div>
            </div>
            
            <div className="flex gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
              <Utensils className="h-5 w-5 text-amber-600 mt-1" />
              <div>
                <h3 className="font-medium">Nutritional guidance</h3>
                <p className="text-sm text-muted-foreground">Try to include more protein and leafy greens in your next meal.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
