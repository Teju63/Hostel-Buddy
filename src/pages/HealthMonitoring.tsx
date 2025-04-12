
import React from 'react';
import { Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HealthMonitoring = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Health Monitoring</h1>
      </div>
      <p className="text-lg text-muted-foreground mb-8">
        Track your physical activity, diet patterns, and sleep cycles with personalized recommendations.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Activity Tracker</CardTitle>
            <CardDescription>Monitor your daily movement and exercise</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Keep track of your steps, exercise duration, and calories burned. The system provides personalized
              recommendations based on your activity levels and goals.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Sleep Analysis</CardTitle>
            <CardDescription>Understand your sleep patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Record your sleep duration and quality to get insights on how to improve your rest. 
              Better sleep leads to better academic performance and overall health.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Diet Journal</CardTitle>
            <CardDescription>Log and analyze your meals</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Keep a record of your meals to identify nutritional gaps and areas for improvement.
              Get recommendations for balanced meals available in your hostel cafeteria.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Personalized Insights</CardTitle>
            <CardDescription>Get data-driven health recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Receive weekly insights about your health patterns and suggestions to optimize your
              physical wellbeing while managing your busy student schedule.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthMonitoring;
