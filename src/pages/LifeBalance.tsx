
import React from 'react';
import { Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LifeBalance = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Life Balance</h1>
      </div>
      <p className="text-lg text-muted-foreground mb-8">
        Smart scheduling tools to manage study time, rest periods, and fitness activities.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Time Management</CardTitle>
            <CardDescription>Optimize your daily schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Learn effective time management techniques specifically designed for college students.
              Balance academic responsibilities with social life, health, and personal time.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Study-Rest Balance</CardTitle>
            <CardDescription>Maximize productivity with optimal breaks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Discover the ideal balance between focused study sessions and restorative breaks.
              Implement techniques like the Pomodoro method adapted to your personal learning style.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Stress Management</CardTitle>
            <CardDescription>Tools to reduce academic pressure</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Learn practical stress management techniques that can be applied during high-pressure
              academic periods like exams, presentations, and project deadlines.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Holistic Schedule</CardTitle>
            <CardDescription>Integrate all aspects of student life</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Create a balanced weekly schedule that includes academics, exercise, socialization,
              personal development, and adequate sleep for optimal physical and mental health.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LifeBalance;
