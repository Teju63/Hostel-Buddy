
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoutineItemProps {
  time?: string;
  activity: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
}

const DailyRoutineCard = ({ time, activity, description, className, icon }: RoutineItemProps) => {
  return (
    <div className={cn(
      "flex gap-4 p-4 border rounded-lg bg-white hover:shadow-md transition-all",
      className
    )}>
      <div className="flex-shrink-0 p-3 health-gradient rounded-full h-fit">
        {icon ? icon : <Clock className="h-5 w-5 text-white" />}
      </div>
      <div>
        {time && <div className="font-medium text-lg">{time}</div>}
        <div className="font-semibold mb-1">{activity}</div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default DailyRoutineCard;
