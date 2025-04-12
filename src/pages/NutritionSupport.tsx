
import React from 'react';
import { Utensils } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NutritionSupport = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-3 mb-6">
        <Utensils className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Nutrition Support</h1>
      </div>
      <p className="text-lg text-muted-foreground mb-8">
        Get AI-curated healthy meal plans and budget-friendly nutrition guidance for hostel living.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Meal Planning</CardTitle>
            <CardDescription>Balanced diet plans for hostel students</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Access weekly meal plans designed for nutritional balance while working with limited hostel 
              food options. Learn how to make smart choices from what's available.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Budget Nutrition</CardTitle>
            <CardDescription>Eating healthy on a student budget</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Find affordable ways to supplement your diet with nutritious options.
              Get tips on inexpensive healthy snacks and meals you can prepare in your hostel room.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Dietary Restrictions</CardTitle>
            <CardDescription>Support for special dietary needs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Get personalized guidance if you have specific dietary restrictions or allergies.
              Learn how to maintain your nutrition requirements within hostel dining limitations.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Nutrition Education</CardTitle>
            <CardDescription>Learn about food and its impact</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Access resources about basic nutrition science to understand how different foods
              affect your energy levels, focus, and overall health as a student.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NutritionSupport;
