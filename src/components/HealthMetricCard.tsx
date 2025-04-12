
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HealthMetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  status: "good" | "warning" | "alert" | "neutral";
  change?: string;
  className?: string;
}

const HealthMetricCard = ({ 
  icon: Icon, 
  title, 
  value, 
  status, 
  change, 
  className 
}: HealthMetricCardProps) => {
  const statusStyles = {
    good: "bg-green-50 border-green-200 text-green-700",
    warning: "bg-amber-50 border-amber-200 text-amber-700",
    alert: "bg-red-50 border-red-200 text-red-700",
    neutral: "bg-blue-50 border-blue-200 text-blue-700"
  };

  const iconStyles = {
    good: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
    alert: "bg-red-100 text-red-700",
    neutral: "bg-blue-100 text-blue-700"
  };

  return (
    <div className={cn(
      "rounded-xl border p-4 transition-all", 
      statusStyles[status],
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium mb-1">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          {change && <p className="text-xs mt-1">{change}</p>}
        </div>
        <div className={cn("p-2 rounded-full", iconStyles[status])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default HealthMetricCard;
