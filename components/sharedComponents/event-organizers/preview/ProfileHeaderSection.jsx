"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  MapPin,
  Verified,
  Clock,
  DollarSign,
  Users,
  Calendar,
  MessageSquare,
  Shield,
  Eye,
} from "lucide-react";

const ProfileHeaderSection = ({ eventOrganizer }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <Card className="mb-8 shadow-lg">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col items-center lg:items-start">
            <Avatar className="w-40 h-40 border-4 border-white shadow-xl mb-4">
              <AvatarImage
                src={eventOrganizer.profileImage || "/placeholder.svg"}
              />
              <AvatarFallback className="text-3xl bg-rose-100 text-rose-600">
                EE
              </AvatarFallback>
            </Avatar>
            <div className="flex gap-2 mb-4">
              {eventOrganizer.verified && (
                <Badge className="bg-blue-100 text-blue-800">
                  <Verified className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
              {eventOrganizer.backgroundChecked && (
                <Badge className="bg-green-100 text-green-800">
                  <Shield className="w-3 h-3 mr-1" />
                  Background Checked
                </Badge>
              )}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {eventOrganizer.businessName}
                </h1>
                <p className="text-xl text-gray-600 mb-3">
                  {eventOrganizer.tagline}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {eventOrganizer.address.city},{" "}
                    {eventOrganizer.address.state}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {eventOrganizer.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>Viewed 1.2k times this month</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {eventOrganizer.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="flex items-center justify-center lg:justify-end gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= Math.floor(eventOrganizer.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold">
                    {eventOrganizer.rating}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {eventOrganizer.reviewCount} reviews
                </p>
                <p className="text-sm text-green-600 font-medium">
                  {eventOrganizer.responseRate}% response rate
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-center">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-1">
                  <Clock className="w-4 h-4" />
                  Experience
                </div>
                <div className="font-bold text-lg">
                  {eventOrganizer.experience.yearsInBusiness} years
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-1">
                  <Users className="w-4 h-4" />
                  Events
                </div>
                <div className="font-bold text-lg">
                  {eventOrganizer.experience.eventsCompleted}+
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-1">
                  <DollarSign className="w-4 h-4" />
                  Starting
                </div>
                <div className="font-bold text-lg">
                  ${eventOrganizer.pricing.startingPrice.toLocaleString()}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-1">
                  <MessageSquare className="w-4 h-4" />
                  Response
                </div>
                <div className="font-bold text-lg">
                  {eventOrganizer.responseTime}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-rose-500 hover:bg-rose-600 flex-1"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Request Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Request Free Consultation</DialogTitle>
                    <DialogDescription>
                      Get in touch with {eventOrganizer.businessName} to discuss
                      your wedding plans
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="weddingDate">Wedding Date</Label>
                      <Input id="weddingDate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="guestCount">Estimated Guest Count</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select guest count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50">Under 50</SelectItem>
                          <SelectItem value="100">50-100</SelectItem>
                          <SelectItem value="150">100-150</SelectItem>
                          <SelectItem value="200">150-200</SelectItem>
                          <SelectItem value="250">200-250</SelectItem>
                          <SelectItem value="300">250+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your dream wedding..."
                        rows={3}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setShowContactForm(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button className="flex-1 bg-rose-500 hover:bg-rose-600">
                        Send Request
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                variant="outline"
                size="lg"
                className="flex-1 bg-transparent"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeaderSection;
