import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DailyRoutineCard from "@/components/DailyRoutineCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlarmClock, 
  Sun, 
  Coffee, 
  Dumbbell, 
  Book, 
  Utensils, 
  Moon, 
  Brain 
} from "lucide-react";

const DailyRoutine = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Ideal Daily Routine</h1>
      <p className="text-muted-foreground mb-8">
        A balanced schedule designed for physical and mental wellbeing of hostel students
      </p>

      <Tabs defaultValue="weekday" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="weekday">Weekday Routine</TabsTrigger>
          <TabsTrigger value="weekend">Weekend Routine</TabsTrigger>
        </TabsList>
        
        <TabsContent value="weekday" className="pt-4">
          <div className="grid grid-cols-1 gap-4">
            <DailyRoutineCard 
              time="6:00 - 6:30 AM" 
              activity="Morning Mindfulness" 
              description="Start your day with a 10-minute meditation and 5 minutes of stretching to awaken your body and mind."
            />
            
            <DailyRoutineCard 
              time="6:30 - 7:30 AM" 
              activity="Personal Hygiene & Light Exercise" 
              description="Freshen up, followed by a 20-minute bodyweight workout or yoga session in your room."
              className="border-primary/20"
            />
            
            <DailyRoutineCard 
              time="7:30 - 8:15 AM" 
              activity="Nutritious Breakfast" 
              description="Focus on protein-rich foods and complex carbohydrates. Try oats with fruits and nuts or eggs with whole grain toast."
            />
            
            <DailyRoutineCard 
              time="8:30 - 12:30 PM" 
              activity="Academic Focus Period" 
              description="Attend classes or study with the Pomodoro technique: 50 minutes of focus followed by a 10-minute break."
              className="border-primary/20"
            />
            
            <DailyRoutineCard 
              time="12:30 - 1:30 PM" 
              activity="Balanced Lunch & Social Break" 
              description="Eat a balanced meal with proteins, vegetables, and grains. Use this time to socialize with friends."
            />
            
            <DailyRoutineCard 
              time="1:30 - 5:30 PM" 
              activity="Second Academic Block" 
              description="Continue with classes or study sessions, maintaining the Pomodoro technique for optimal focus."
              className="border-primary/20"
            />
            
            <DailyRoutineCard 
              time="5:30 - 6:30 PM" 
              activity="Physical Activity & Recreation" 
              description="Engage in sports, gym workout, or a brisk walk. Physical activity helps reduce stress and improves mood."
            />
            
            <DailyRoutineCard 
              time="6:30 - 7:30 PM" 
              activity="Dinner & Downtime" 
              description="Have a light nutritious dinner. Avoid heavy meals close to bedtime for better sleep quality."
              className="border-primary/20"
            />
            
            <DailyRoutineCard 
              time="7:30 - 9:30 PM" 
              activity="Study Session or Personal Projects" 
              description="Review the day's learning or work on personal development projects and assignments."
            />
            
            <DailyRoutineCard 
              time="9:30 - 10:30 PM" 
              activity="Relaxation & Wind Down" 
              description="Digital detox - avoid screens. Read a book, journal about your day, or engage in light conversation with roommates."
              className="border-primary/20"
            />
            
            <DailyRoutineCard 
              time="10:30 - 11:00 PM" 
              activity="Evening Reflection & Planning" 
              description="5-minute meditation, plan the next day, set intentions, and practice gratitude journaling."
            />
            
            <DailyRoutineCard 
              time="11:00 PM" 
              activity="Lights Out" 
              description="Ensure 7-8 hours of quality sleep to allow your body and mind to recover and prepare for the next day."
              className="border-secondary/20"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="weekend" className="pt-4">
          <div className="grid grid-cols-1 gap-4">
            <DailyRoutineCard 
              time="7:00 - 8:00 AM" 
              activity="Extended Sleep & Gentle Wakeup" 
              description="Allow yourself an extra hour of sleep followed by mindful stretching to start your weekend refreshed."
            />
            
            <DailyRoutineCard 
              time="8:00 - 9:00 AM" 
              activity="Leisurely Breakfast" 
              description="Take time to prepare and enjoy a nutritious breakfast without rushing."
              className="border-primary/20"
            />
            
            <DailyRoutineCard 
              time="9:00 - 10:30 AM" 
              activity="Deep Cleaning & Organization" 
              description="Spend time cleaning your living space, doing laundry, and organizing for the week ahead."
            />
            
            <DailyRoutineCard 
              time="10:30 AM - 12:30 PM" 
              activity="Focused Study Session" 
              description="Review challenging material or get ahead on assignments while your mind is fresh."
              className="border-primary/20"
            />
            
            <DailyRoutineCard 
              time="12:30 - 1:30 PM" 
              activity="Lunch & Social Connection" 
              description="Have lunch with friends or call family members to maintain important social connections."
            />
            
            <DailyRoutineCard 
              time="1:30 - 3:30 PM" 
              activity="Outdoor Time & Physical Activity" 
              description="Spend time outdoors in nature, play sports, or engage in longer workout sessions."
              className="border-primary/20"
            />
            
            <DailyRoutineCard 
              time="3:30 - 5:30 PM" 
              activity="Personal Development or Hobby Time" 
              description="Work on skills outside your academic focus, pursue creative hobbies, or learn something new."
            />
            
            <DailyRoutineCard 
              time="5:30 - 7:30 PM" 
              activity="Social Activities or Rest" 
              description="Spend time with friends, join campus events, or take some quiet time for yourself if needed."
              className="border-primary/20"
            />
            
            <DailyRoutineCard 
              time="7:30 - 8:30 PM" 
              activity="Dinner" 
              description="Enjoy a balanced meal, preferably with friends to nurture social connections."
            />
            
            <DailyRoutineCard 
              time="8:30 - 10:00 PM" 
              activity="Relaxation & Entertainment" 
              description="Watch a movie, play games with friends, or engage in other relaxing activities."
              className="border-primary/20"
            />
            
            <DailyRoutineCard 
              time="10:00 - 11:00 PM" 
              activity="Weekly Planning & Reflection" 
              description="Review the past week, plan for the upcoming week, and set goals and intentions."
            />
            
            <DailyRoutineCard 
              time="11:00 PM" 
              activity="Sleep Preparation" 
              description="Practice good sleep hygiene to ensure quality rest that will set you up for success in the upcoming week."
              className="border-secondary/20"
            />
          </div>
        </TabsContent>
      </Tabs>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Health Benefits of Following a Routine
          </CardTitle>
          <CardDescription>
            How maintaining a consistent daily schedule improves physical and mental wellbeing
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlarmClock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Improved Sleep Quality</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Consistent sleep-wake cycles regulate your body's internal clock, leading to better sleep quality and improved cognitive function.
            </p>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Book className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Enhanced Academic Performance</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Structured study times with breaks optimize learning efficiency and information retention, improving your academic outcomes.
            </p>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Dumbbell className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Better Physical Health</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Regular exercise and balanced meals at consistent times improve metabolism, energy levels, and overall physical wellbeing.
            </p>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Reduced Stress and Anxiety</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Predictable routines reduce uncertainty and decision fatigue, leading to lower stress levels and improved mental health.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-primary" />
            Adapting Your Routine
          </CardTitle>
          <CardDescription>
            Tips for customizing and maintaining your ideal daily schedule
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              While following a structured routine has numerous benefits, it's important to adapt it to your unique needs and circumstances. Here are some tips for creating a sustainable routine:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Start Small</h3>
                <p className="text-sm text-muted-foreground">
                  Begin by implementing one or two components of the ideal routine rather than trying to change everything at once. Gradually build up to the full schedule.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Be Flexible</h3>
                <p className="text-sm text-muted-foreground">
                  Allow for flexibility within your routine to accommodate unexpected events or changes in your academic schedule. The goal is progress, not perfection.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Track Your Energy</h3>
                <p className="text-sm text-muted-foreground">
                  Notice when you have the most energy and schedule your most demanding tasks during these peak periods. Adjust your routine to align with your natural rhythms.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Regular Review</h3>
                <p className="text-sm text-muted-foreground">
                  Set aside time each week to review and adjust your routine based on what's working and what isn't. Your needs may change throughout the semester.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyRoutine;
