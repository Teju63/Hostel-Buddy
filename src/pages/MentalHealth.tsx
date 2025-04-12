
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Calendar,
  Clock,
  ListChecks,
  HeartHandshake,
  BookOpen,
  Music,
  MessageSquare
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MentalHealth = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Mental Health Support</h1>
      <p className="text-muted-foreground mb-8">
        Tools and resources to support your mental wellbeing during college
      </p>

      <Tabs defaultValue="resources" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="mood-tracker">Mood Tracker</TabsTrigger>
          <TabsTrigger value="journal">Journal</TabsTrigger>
        </TabsList>
        
        <TabsContent value="resources" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Quick Relief Techniques
                </CardTitle>
                <CardDescription>
                  When you need to calm down quickly during exam stress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-lg hover:bg-primary/5 cursor-pointer transition-colors">
                    <h3 className="font-medium mb-1">5-4-3-2-1 Grounding Exercise</h3>
                    <p className="text-sm text-muted-foreground">
                      A quick mindfulness technique to reduce anxiety in under 5 minutes
                    </p>
                    <div className="mt-2">
                      <Button size="sm" variant="outline">Start Now</Button>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg hover:bg-primary/5 cursor-pointer transition-colors">
                    <h3 className="font-medium mb-1">Box Breathing</h3>
                    <p className="text-sm text-muted-foreground">
                      A simple breathing pattern to restore calm and focus
                    </p>
                    <div className="mt-2">
                      <Button size="sm" variant="outline">Start Now</Button>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg hover:bg-primary/5 cursor-pointer transition-colors">
                    <h3 className="font-medium mb-1">Progressive Muscle Relaxation</h3>
                    <p className="text-sm text-muted-foreground">
                      Release physical tension with this guided body scan
                    </p>
                    <div className="mt-2">
                      <Button size="sm" variant="outline">Start Now</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-primary" />
                  Talk to Someone
                </CardTitle>
                <CardDescription>
                  Connect with support when you need it most
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-lg hover:bg-primary/5 cursor-pointer transition-colors">
                    <h3 className="font-medium mb-1">AI Emotional Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Chat confidentially with our AI about how you're feeling
                    </p>
                    <div className="mt-2">
                      <Button size="sm" variant="outline">Start Chat</Button>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg hover:bg-primary/5 cursor-pointer transition-colors">
                    <h3 className="font-medium mb-1">Peer Support Group</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect anonymously with other students facing similar challenges
                    </p>
                    <div className="mt-2">
                      <Button size="sm" variant="outline">Join Group</Button>
                    </div>
                  </div>
                  
                  <div className="p-3 border-2 border-primary/30 rounded-lg bg-primary/5">
                    <h3 className="font-medium mb-1">Campus Counseling</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with professional mental health services at your college
                    </p>
                    <div className="mt-2">
                      <Button size="sm">Contact Now</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Music className="h-5 w-5 text-primary" />
                  Guided Meditations
                </CardTitle>
                <CardDescription>
                  Audio sessions designed for common student challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-muted p-4 rounded-lg flex flex-col">
                    <h3 className="font-medium mb-1">Exam Anxiety Relief</h3>
                    <p className="text-sm text-muted-foreground flex-grow">10 minutes of guided relaxation before tests</p>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      <Clock className="h-4 w-4 mr-1" /> 10 min
                    </Button>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg flex flex-col">
                    <h3 className="font-medium mb-1">Better Sleep</h3>
                    <p className="text-sm text-muted-foreground flex-grow">Fall asleep faster in your noisy dorm</p>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      <Clock className="h-4 w-4 mr-1" /> 15 min
                    </Button>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg flex flex-col">
                    <h3 className="font-medium mb-1">Homesickness</h3>
                    <p className="text-sm text-muted-foreground flex-grow">Comfort for when you miss home</p>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      <Clock className="h-4 w-4 mr-1" /> 12 min
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="mood-tracker" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Mood History
                </CardTitle>
                <CardDescription>Your emotional patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border rounded-md">
                  <p className="text-muted-foreground italic">Mood tracking chart will appear here</p>
                </div>
                <div className="grid grid-cols-5 gap-2 mt-4">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">😢</div>
                    <span className="text-xs text-muted-foreground">Very Low</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">😟</div>
                    <span className="text-xs text-muted-foreground">Low</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">😐</div>
                    <span className="text-xs text-muted-foreground">Neutral</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">🙂</div>
                    <span className="text-xs text-muted-foreground">Good</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl">😁</div>
                    <span className="text-xs text-muted-foreground">Great</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Today's Check-in
                </CardTitle>
                <CardDescription>How are you feeling right now?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-5 gap-2">
                    <button className="p-2 rounded-md hover:bg-muted transition-colors">
                      <span className="text-3xl block mb-1">😢</span>
                    </button>
                    <button className="p-2 rounded-md hover:bg-muted transition-colors">
                      <span className="text-3xl block mb-1">😟</span>
                    </button>
                    <button className="p-2 rounded-md hover:bg-muted transition-colors">
                      <span className="text-3xl block mb-1">😐</span>
                    </button>
                    <button className="p-2 rounded-md hover:bg-muted transition-colors border-2 border-primary/30 bg-primary/5">
                      <span className="text-3xl block mb-1">🙂</span>
                    </button>
                    <button className="p-2 rounded-md hover:bg-muted transition-colors">
                      <span className="text-3xl block mb-1">😁</span>
                    </button>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Stress Level</label>
                    <Progress value={42} className="h-2" />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-muted-foreground">Low</span>
                      <span className="text-xs text-muted-foreground">High</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Energy Level</label>
                    <Progress value={65} className="h-2" />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-muted-foreground">Low</span>
                      <span className="text-xs text-muted-foreground">High</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">Save Check-in</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="journal" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Reflection Journal
              </CardTitle>
              <CardDescription>Express your thoughts and track your mental health journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">New Entry</h3>
                  <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</span>
                </div>
                
                <textarea 
                  className="w-full h-32 p-3 border rounded-md" 
                  placeholder="How are you feeling today? What's on your mind?"
                ></textarea>
                
                <div className="flex justify-between">
                  <Button variant="outline">
                    <ListChecks className="h-4 w-4 mr-2" />
                    Add Prompts
                  </Button>
                  <Button>
                    Save Entry
                  </Button>
                </div>
                
                <div className="pt-6 border-t mt-6">
                  <h3 className="font-medium mb-3">Previous Entries</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Midterm Stress</span>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Feeling overwhelmed with the upcoming calculus exam. I need to create a better study plan...
                      </p>
                    </div>
                    
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Weekend Plans</span>
                        <span className="text-xs text-muted-foreground">5 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Looking forward to the campus event this weekend. It will be nice to take a break from studying...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MentalHealth;
