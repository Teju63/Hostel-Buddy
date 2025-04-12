
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ChatMessage from "@/components/ChatMessage";
import { Send, Sparkles, Heart, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Mock initial messages for demonstration
const initialMessages = [
  {
    message: "Hi there! I'm your VitaliAegis health assistant. How can I help you today?",
    isUser: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 5) // 5 minutes ago
  }
];

const AIChat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      message: inputMessage,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      let aiResponse;
      
      // Simple pattern matching for demo purposes
      if (inputMessage.toLowerCase().includes("stress") || inputMessage.toLowerCase().includes("anxiety")) {
        aiResponse = {
          message: "I understand managing stress can be challenging. Here are some quick techniques you could try: deep breathing exercises, a short 10-minute walk, or journaling your thoughts. Would you like me to guide you through a quick relaxation exercise?",
          isUser: false,
          timestamp: new Date()
        };
      } else if (inputMessage.toLowerCase().includes("sleep") || inputMessage.toLowerCase().includes("tired")) {
        aiResponse = {
          message: "Many students struggle with sleep issues. Try establishing a consistent sleep schedule, avoiding screens 1 hour before bed, and creating a relaxing bedtime routine. Would you like some specific techniques for better sleep in a noisy dorm environment?",
          isUser: false,
          timestamp: new Date()
        };
      } else if (inputMessage.toLowerCase().includes("diet") || inputMessage.toLowerCase().includes("food") || inputMessage.toLowerCase().includes("eat")) {
        aiResponse = {
          message: "Eating well on campus can be challenging! Try to include proteins, fruits and vegetables with each meal. For dorm room snacks, consider nuts, dried fruits, and whole grain options. Would you like some specific meal ideas that are hostel-friendly?",
          isUser: false,
          timestamp: new Date()
        };
      } else {
        aiResponse = {
          message: "Thank you for sharing that with me. As your health companion, I'm here to support your physical and mental wellbeing. Could you tell me more about what you're experiencing so I can provide more specific guidance?",
          isUser: false,
          timestamp: new Date()
        };
      }
      
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedPrompts = [
    "I'm feeling stressed about exams",
    "I haven't been sleeping well",
    "What are some quick healthy meals?",
    "I'm feeling homesick"
  ];

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">AI Health Consultant</h1>
      <p className="text-muted-foreground mb-8">
        Talk to your personal AI health assistant about any concerns
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="border shadow-sm">
            <CardContent className="p-0">
              {/* Chat history */}
              <div className="h-[500px] p-4 overflow-y-auto border-b">
                {messages.map((msg, index) => (
                  <ChatMessage 
                    key={index}
                    message={msg.message}
                    isUser={msg.isUser}
                    timestamp={msg.timestamp}
                  />
                ))}
              </div>
              
              {/* Chat input */}
              <div className="p-4">
                <div className="flex gap-2">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message here..."
                    className="flex-1 border rounded-md px-3 py-2 min-h-12 resize-none"
                  />
                  <Button onClick={handleSendMessage} disabled={!inputMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">Suggested topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedPrompts.map((prompt, index) => (
                      <Button 
                        key={index} 
                        variant="outline" 
                        size="sm"
                        onClick={() => setInputMessage(prompt)}
                      >
                        {prompt}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">AI Features</h3>
                </div>
                <ul className="text-sm space-y-2">
                  <li className="flex gap-2 items-start">
                    <Heart className="h-4 w-4 text-primary mt-1" />
                    <span>Personalized health advice</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Heart className="h-4 w-4 text-primary mt-1" />
                    <span>Mental wellness support</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Heart className="h-4 w-4 text-primary mt-1" />
                    <span>Nutrition and fitness guidance</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Heart className="h-4 w-4 text-primary mt-1" />
                    <span>Study-life balance tips</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Important Note</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  This AI assistant provides general guidance only and is not a substitute for professional medical advice.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  For urgent health concerns, please contact emergency services or visit your campus health center.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
