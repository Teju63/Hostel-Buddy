
import React from 'react';
import { Dumbbell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FitnessAssistant = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-3 mb-6">
        <Dumbbell className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Fitness Assistant</h1>
      </div>
      <p className="text-lg text-muted-foreground mb-8">
        Quick 10-20 minute hostel room workouts and daily stretching/yoga recommendations.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dorm Room Workouts</CardTitle>
            <CardDescription>Exercise in limited space</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Access a library of effective workouts designed specifically for small spaces with minimal
              or no equipment. Stay fit even during busy academic periods or bad weather.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Study Break Stretches</CardTitle>
            <CardDescription>Quick movements for long study sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Prevent stiffness and improve focus with short stretching routines designed for 
              study breaks. Combat the negative effects of prolonged sitting.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Stress-Relief Yoga</CardTitle>
            <CardDescription>Simple yoga for mental clarity</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Learn basic yoga poses and breathing techniques that can help reduce stress,
              improve focus, and promote better sleep - all crucial for academic success.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Fitness Goals</CardTitle>
            <CardDescription>Track your progress</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Set realistic fitness goals that complement your academic schedule. Monitor your
              progress and adjust your routines as your fitness level improves.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FitnessAssistant;
