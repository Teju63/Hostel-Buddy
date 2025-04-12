import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Ambulance,
  Phone,
  MapPin,
  AlertTriangle,
  ListChecks,
  Search,
  Info
} from "lucide-react";

const Emergency = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Emergency Support</h1>
      <p className="text-muted-foreground mb-8">
        Quick access to emergency services and important contacts
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Emergency Services */}
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              <Ambulance className="h-5 w-5 text-red-500" />
              Emergency Services
            </CardTitle>
            <CardDescription>Contact emergency medical assistance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-lg font-semibold">Ambulance</p>
              <p className="text-muted-foreground">Call for immediate medical assistance</p>
              <Button className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call Ambulance
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold">Fire Department</p>
              <p className="text-muted-foreground">Report a fire or other related emergencies</p>
              <Button className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call Fire Department
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold">Police</p>
              <p className="text-muted-foreground">Report a crime or security threat</p>
              <Button className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call Police
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Campus Security */}
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Campus Security
            </CardTitle>
            <CardDescription>Contact your campus security for immediate assistance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-lg font-semibold">Security Hotline</p>
              <p className="text-muted-foreground">Report any suspicious activity or security concerns</p>
              <Button className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call Security
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold">Emergency Contacts</p>
              <p className="text-muted-foreground">Access a list of important campus contacts</p>
              <Button className="w-full">
                <ListChecks className="h-4 w-4 mr-2" />
                View Contacts
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold">Report Incident</p>
              <p className="text-muted-foreground">Fill out an incident report form</p>
              <Button className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Report Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Nearby Hospitals */}
        <Card className="md:col-span-2">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-500" />
              Nearby Hospitals
            </CardTitle>
            <CardDescription>Find the closest hospitals and medical facilities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-lg font-semibold">City General Hospital</p>
                <p className="text-muted-foreground">5.2 miles away</p>
                <Button variant="secondary" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">University Medical Center</p>
                <p className="text-muted-foreground">7.8 miles away</p>
                <Button variant="secondary" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Community Health Clinic</p>
                <p className="text-muted-foreground">9.1 miles away</p>
                <Button variant="secondary" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Regional Trauma Center</p>
                <p className="text-muted-foreground">12.4 miles away</p>
                <Button variant="secondary" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Important Information
          </CardTitle>
          <CardDescription>
            Essential guidelines and resources for emergency situations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Emergency Procedures</h3>
            <p className="text-muted-foreground">
              Familiarize yourself with the campus emergency protocols and evacuation routes.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">First Aid Tips</h3>
            <p className="text-muted-foreground">
              Learn basic first aid techniques to assist yourself and others in minor emergencies.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Mental Health Crisis</h3>
            <p className="text-muted-foreground">
              Know the resources available for mental health emergencies and how to seek immediate support.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Emergency;
