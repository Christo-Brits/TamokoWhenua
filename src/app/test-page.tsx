'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Check, Clock, Mail, MapPin, Phone, Users, Leaf, BookOpen, Hammer, Lightbulb, Home, Info, Map, User } from "lucide-react";

export default function TestPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Component Test Page</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Test Card Component */}
        <Card>
          <CardHeader>
            <CardTitle>Test Card</CardTitle>
            <CardDescription>Testing card component with icons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>Card content with icon</span>
            </div>
            <p>This is a test of the card component with various icons.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Test Button <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Icons Test */}
        <Card>
          <CardHeader>
            <CardTitle>Icons Test</CardTitle>
            <CardDescription>Testing Lucide Icons</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-2">
              <Clock className="h-6 w-6 mb-1" />
              <span className="text-xs">Clock</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <Mail className="h-6 w-6 mb-1" />
              <span className="text-xs">Mail</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <MapPin className="h-6 w-6 mb-1" />
              <span className="text-xs">MapPin</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <Phone className="h-6 w-6 mb-1" />
              <span className="text-xs">Phone</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <Users className="h-6 w-6 mb-1" />
              <span className="text-xs">Users</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <Leaf className="h-6 w-6 mb-1" />
              <span className="text-xs">Leaf</span>
            </div>
          </CardContent>
        </Card>

        {/* Button Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>Testing Button Component</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
