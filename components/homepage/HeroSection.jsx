"use client";

import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import {
  Heart,
  MapPin,
  Star,
  Verified,
  Search,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const platformStats = [
  { label: "Happy Couples", value: "10,000+", icon: Heart },
  { label: "Verified Vendors", value: "2,500+", icon: Verified },
  { label: "Cities Covered", value: "50+", icon: MapPin },
  { label: "Average Rating", value: "4.8★", icon: Star },
];

const HeroSectionContent = () => {
  const [showQuickQuote, setShowQuickQuote] = useState(false);

  return (
    <>
      {" "}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10"></div>
      <div className="container mx-auto text-center relative z-10">
        <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200 px-4 py-2">
          ✨ Trusted by 10,000+ Happy Couples
        </Badge>
        <h2 className="text-5xl h-max-content md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Plan Your Perfect
          <span className="text-rose-500 block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
            Wedding Day
          </span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          From venue selection to vendor coordination, we connect you with
          verified professionals who make your special day unforgettable. Join
          thousands of couples who trusted us with their celebration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-lg px-8 py-4"
            asChild
          >
            <Link href="/booking" aria-label="Start Planning">
              Start Planning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button className="bg-rose-500 hover:bg-rose-600 px-8 py-3 h-auto">
            <Link href="/vendors" className="flex items-center justify-center">
              <Search className="w-4 h-4 mr-2" />
              Find Vendors
            </Link>
          </Button>
          <Button className="bg-rose-500 hover:bg-rose-600 px-8 py-3 h-auto">
            <Link
              href="/event-organizers"
              className="flex items-center justify-center"
            >
              <Search className="w-4 h-4 mr-2" />
              Find Event Organizer
            </Link>
          </Button>
          <Dialog open={showQuickQuote} onOpenChange={setShowQuickQuote}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="ghost"
                className="text-lg px-8 py-4 text-rose-600 hover:text-rose-700"
              >
                Get Quick Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Get Your Wedding Quote</DialogTitle>
                <DialogDescription>
                  Tell us about your dream wedding and get an instant estimate
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">
                        $50,000 - $100,000
                      </SelectItem>
                      <SelectItem value="100k+">$100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input id="guests" type="number" placeholder="150" />
                </div>
                <div>
                  <Label htmlFor="date">Wedding Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <Button className="w-full bg-rose-500 hover:bg-rose-600">
                  Get My Quote
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Platform Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {platformStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mx-auto mb-2">
                <stat.icon className="w-6 h-6 text-rose-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

function HeroSection() {
  return <HeroSectionContent />;
}

export default HeroSection;
