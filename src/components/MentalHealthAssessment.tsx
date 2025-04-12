
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Brain, MessageSquare, HeartHandshake } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MentalHealthQuestion {
  id: string;
  question: string;
  description?: string;
}

const questions: MentalHealthQuestion[] = [
  {
    id: 'mood',
    question: 'How would you describe your mood today?',
    description: 'Consider your overall emotional state throughout the day'
  },
  {
    id: 'sleep',
    question: 'How well have you been sleeping recently?',
    description: 'Think about your sleep quality and duration over the past week'
  },
  {
    id: 'anxiety',
    question: 'How often have you felt anxious or overwhelmed?',
    description: 'Consider situations where you felt unable to cope with stress'
  },
  {
    id: 'concentration',
    question: 'How is your ability to concentrate on tasks?',
    description: 'Think about your focus during study sessions and daily activities'
  },
  {
    id: 'energy',
    question: 'How would you rate your energy levels?',
    description: 'Consider your physical and mental energy throughout the day'
  }
];

const options = [
  { value: '1', label: 'Poor' },
  { value: '2', label: 'Fair' },
  { value: '3', label: 'Average' },
  { value: '4', label: 'Good' },
  { value: '5', label: 'Excellent' }
];

interface FormValues {
  [key: string]: string;
}

const MentalHealthAssessment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    defaultValues: questions.reduce((acc, q) => ({ ...acc, [q.id]: "" }), {}),
  });

  const onSubmit = (data: FormValues) => {
    // Calculate the mental health score (simplified version)
    const totalScore = Object.values(data).reduce((sum, value) => sum + parseInt(value || '0'), 0);
    const maxPossibleScore = questions.length * 5;
    const normalizedScore = Math.round((totalScore / maxPossibleScore) * 100);
    
    setScore(normalizedScore);
    setIsSubmitted(true);
    
    // In a real app, this would be sent to Supabase or another backend
    toast({
      title: "Assessment Submitted",
      description: "Your mental health assessment has been recorded.",
    });
    
    console.log("Mental Health Assessment Data:", {
      answers: data,
      score: normalizedScore,
      timestamp: new Date().toISOString(),
    });
    
    // This would be where we'd save to Supabase
    // saveAssessmentToDatabase(data, normalizedScore);
  };
  
  const resetForm = () => {
    form.reset();
    setIsSubmitted(false);
  };
  
  const getMentalHealthStatus = (score: number) => {
    if (score >= 80) return { status: "Excellent", icon: <HeartHandshake className="h-6 w-6 text-green-500" /> };
    if (score >= 60) return { status: "Good", icon: <MessageSquare className="h-6 w-6 text-blue-500" /> };
    if (score >= 40) return { status: "Average", icon: <Brain className="h-6 w-6 text-amber-500" /> };
    return { status: "Needs Attention", icon: <Brain className="h-6 w-6 text-red-500" /> };
  };

  const mentalStatus = getMentalHealthStatus(score);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          Mental Health Assessment
        </CardTitle>
        <CardDescription>
          Answer honestly to help us understand your current mental wellbeing
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isSubmitted ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {questions.map((q) => (
                <FormField
                  key={q.id}
                  control={form.control}
                  name={q.id}
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>{q.question}</FormLabel>
                      {q.description && (
                        <FormDescription>{q.description}</FormDescription>
                      )}
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col sm:flex-row gap-2 sm:gap-4"
                        >
                          {options.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <RadioGroupItem value={option.value} id={`${q.id}-${option.value}`} />
                              <Label htmlFor={`${q.id}-${option.value}`}>{option.label}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button type="submit" className="w-full">Submit Assessment</Button>
            </form>
          </Form>
        ) : (
          <div className="space-y-6">
            <div className="text-center p-6 bg-muted rounded-lg">
              <div className="mb-4 flex justify-center">{mentalStatus.icon}</div>
              <h3 className="text-xl font-bold mb-2">Your Mental Health Status: {mentalStatus.status}</h3>
              <p className="text-2xl font-bold text-primary">{score}%</p>
              <p className="text-sm text-muted-foreground mt-2">
                {score >= 80 && "You're doing great! Keep up the healthy habits."}
                {score >= 60 && score < 80 && "You're doing well overall. Consider small improvements to enhance your wellbeing."}
                {score >= 40 && score < 60 && "You're managing, but there's room for improvement. Try incorporating stress-reduction techniques."}
                {score < 40 && "Your mental health needs more attention. Consider speaking with a counselor or healthcare provider."}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Resources based on your assessment:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="flex justify-start gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chat with AI Support
                </Button>
                <Button variant="outline" className="flex justify-start gap-2">
                  <HeartHandshake className="h-4 w-4" />
                  Connect with Counselor
                </Button>
              </div>
            </div>
            
            <Button onClick={resetForm} variant="secondary" className="w-full">Take Assessment Again</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MentalHealthAssessment;
