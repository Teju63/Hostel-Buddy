
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Heart } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  const formattedTime = timestamp.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className={cn(
      "flex w-full gap-2 items-start mb-4",
      isUser ? "flex-row-reverse" : ""
    )}>
      <Avatar className={cn(
        "w-8 h-8 flex items-center justify-center text-white",
        isUser ? "bg-accent" : "health-gradient"
      )}>
        {isUser ? (
          <span className="text-xs font-semibold">You</span>
        ) : (
          <Heart className="h-4 w-4" />
        )}
      </Avatar>
      
      <div className={cn(
        "max-w-[80%] rounded-xl p-3",
        isUser ? "bg-accent/10 text-foreground" : "health-gradient text-white"
      )}>
        <p className="text-sm">{message}</p>
        <div className={cn(
          "text-[10px] mt-1 text-right",
          isUser ? "text-muted-foreground" : "text-white/80"
        )}>
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
