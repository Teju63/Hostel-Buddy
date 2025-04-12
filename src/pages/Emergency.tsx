
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Phone, 
  Heart, 
  FirstAid, 
  MapPin, 
  ArrowRight,
  Clock,
  Send
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Emergency = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Emergency Assistance</h1>
      <p className="text-muted-foreground mb-8">
        Quick access to emergency resources and medical assistance
      </p>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
        <div className="flex gap-3">
          <AlertTriangle className="h-6 w-6 text-red-600" />
          <div>
            <h3 className="font-medium text-red-900">Emergency Help</h3>
            <p className="text-sm text-red-700 mb-4">
              If you're experiencing a serious medical emergency, please call emergency services immediately.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="destructive">
                <Phone className="h-4 w-4 mr-2" />
                Call Emergency (911)
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
                <Phone className="h-4 w-4 mr-2" />
                Campus Security
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
                <Phone className="h-4 w-4 mr-2" />
                Crisis Helpline
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="nearby">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="nearby">Nearby Facilities</TabsTrigger>
          <TabsTrigger value="symptom">Symptom Checker</TabsTrigger>
          <TabsTrigger value="first-aid">First Aid Guide</TabsTrigger>
        </TabsList>
        
        <TabsContent value="nearby" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Nearby Medical Facilities
                </CardTitle>
                <CardDescription>Hospitals and clinics close to your campus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium">University Health Center</h3>
                      <span className="text-sm text-muted-foreground">0.3 mi</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">123 Campus Drive</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded text-xs">
                        <Clock className="h-3 w-3" />
                        <span>Open Now</span>
                      </div>
                      <Button size="sm">
                        Directions
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium">City General Hospital</h3>
                      <span className="text-sm text-muted-foreground">1.8 mi</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">456 Medical Parkway</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded text-xs">
                        <Clock className="h-3 w-3" />
                        <span>24/7 Emergency</span>
                      </div>
                      <Button size="sm">
                        Directions
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium">QuickCare Clinic</h3>
                      <span className="text-sm text-muted-foreground">0.7 mi</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">789 College Avenue</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded text-xs">
                        <Clock className="h-3 w-3" />
                        <span>Closes 8pm</span>
                      </div>
                      <Button size="sm">
                        Directions
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Emergency Contacts
                </CardTitle>
                <CardDescription>Important numbers and your personal contacts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-3">Emergency Services</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 border rounded-md">
                        <span>Emergency (Police, Fire, Ambulance)</span>
                        <Button size="sm" variant="outline">
                          <Phone className="h-3 w-3 mr-1" />
                          911
                        </Button>
                      </div>
                      <div className="flex justify-between p-2 border rounded-md">
                        <span>Campus Security</span>
                        <Button size="sm" variant="outline">
                          <Phone className="h-3 w-3 mr-1" />
                          555-123-4567
                        </Button>
                      </div>
                      <div className="flex justify-between p-2 border rounded-md">
                        <span>Poison Control</span>
                        <Button size="sm" variant="outline">
                          <Phone className="h-3 w-3 mr-1" />
                          1-800-222-1222
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-3">Personal Emergency Contacts</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Add contacts that should be notified in case of emergency
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 border rounded-md bg-muted/50">
                        <div>
                          <span className="block">Mom</span>
                          <span className="text-xs text-muted-foreground">Primary Contact</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                      </div>
                      <div className="flex justify-between p-2 border rounded-md">
                        <div>
                          <span className="block">Roommate</span>
                          <span className="text-xs text-muted-foreground">Secondary Contact</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-3">
                      + Add Emergency Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="symptom" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                AI Symptom Checker
              </CardTitle>
              <CardDescription>
                Describe your symptoms to get preliminary guidance. 
                This is not a substitute for professional medical advice.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full health-gradient flex items-center justify-center text-white">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">Hello! I can help assess your symptoms. Please describe what you're experiencing.</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-[250px] flex items-center justify-center border rounded-md bg-muted/50">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Enter your symptoms to start the assessment</p>
                    <Button>Start Symptom Check</Button>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    className="flex-1 border rounded-md px-3 py-2"
                    placeholder="Describe your symptoms..."
                  />
                  <Button>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <p className="text-sm text-amber-800">
                      This AI symptom checker provides general guidance only. Always seek professional medical help for serious concerns.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="first-aid" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FirstAid className="h-5 w-5 text-primary" />
                First Aid Reference Guide
              </CardTitle>
              <CardDescription>
                Quick reference for common emergency situations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:bg-red-50 transition-colors">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    CPR Instructions
                  </h3>
                  <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
                    <li>Check responsiveness and call for emergency help</li>
                    <li>Position person on back on firm surface</li>
                    <li>Give 30 chest compressions (100-120/min)</li>
                    <li>Give 2 rescue breaths</li>
                    <li>Continue cycles of 30:2 until help arrives</li>
                  </ul>
                  <Button variant="outline" className="mt-3 w-full">View Detailed Guide</Button>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-red-50 transition-colors">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    Severe Bleeding
                  </h3>
                  <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
                    <li>Apply direct pressure with clean cloth</li>
                    <li>If possible, raise the injured area above heart</li>
                    <li>Add more cloth if blood soaks through</li>
                    <li>Do not remove the cloth if it sticks to the wound</li>
                    <li>Seek medical attention immediately</li>
                  </ul>
                  <Button variant="outline" className="mt-3 w-full">View Detailed Guide</Button>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-red-50 transition-colors">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    Choking
                  </h3>
                  <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
                    <li>Stand behind the person and wrap your arms around their waist</li>
                    <li>Make a fist with one hand and place it above the navel</li>
                    <li>Grab your fist with your other hand</li>
                    <li>Do quick upward thrusts until object is expelled</li>
                    <li>If person becomes unconscious, begin CPR</li>
                  </ul>
                  <Button variant="outline" className="mt-3 w-full">View Detailed Guide</Button>
                </div>
                
                <div className="border rounded-lg p-4 hover:bg-red-50 transition-colors">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    Burns
                  </h3>
                  <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
                    <li>Cool the burn with cool (not cold) water for 10-15 minutes</li>
                    <li>Do not apply ice directly to the burn</li>
                    <li>Cover with sterile, non-adhesive bandage</li>
                    <li>Do not apply ointments for serious burns</li>
                    <li>Seek medical attention for anything beyond a minor burn</li>
                  </ul>
                  <Button variant="outline" className="mt-3 w-full">View Detailed Guide</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Emergency;
