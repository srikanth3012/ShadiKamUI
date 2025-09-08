import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Heart, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];
const WeddingDetails = ({
  bookingData,
  setBookingData,
  estimatedCost,
  addOnServices,
  canProceedFromStep,
  handleAddOnToggle,
  prevStep,
  nextStep,
}) => {
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <CardTitle className="text-2xl">Wedding Details</CardTitle>
                <CardDescription>
                  Tell us more about your special day
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-base font-medium mb-4 block">
                  Select Event Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal h-12",
                        !bookingData.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {bookingData.date
                        ? format(bookingData.date, "PPP")
                        : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={bookingData.date}
                      onSelect={(date) =>
                        setBookingData((prev) => ({ ...prev, date }))
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">
                  Select Time
                </Label>
                <Select
                  value={bookingData.time}
                  onValueChange={(time) =>
                    setBookingData((prev) => ({ ...prev, time }))
                  }
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Expected Guest Count
                </Label>
                <Select
                  value={bookingData.guestCount}
                  onValueChange={(guestCount) =>
                    setBookingData((prev) => ({ ...prev, guestCount }))
                  }
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select guest count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50-100 guests</SelectItem>
                    <SelectItem value="100-200">100-200 guests</SelectItem>
                    <SelectItem value="200-300">200-300 guests</SelectItem>
                    <SelectItem value="300-500">300-500 guests</SelectItem>
                    <SelectItem value="500+">500+ guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  Budget Range
                </Label>
                <Select
                  value={bookingData.budget}
                  onValueChange={(budget) =>
                    setBookingData((prev) => ({ ...prev, budget }))
                  }
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10000-25000">
                      $10,000 - $25,000
                    </SelectItem>
                    <SelectItem value="25000-50000">
                      $25,000 - $50,000
                    </SelectItem>
                    <SelectItem value="50000-100000">
                      $50,000 - $100,000
                    </SelectItem>
                    <SelectItem value="100000+">$100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Wedding Style
                </Label>
                <Select
                  value={bookingData.weddingStyle}
                  onValueChange={(weddingStyle) =>
                    setBookingData((prev) => ({
                      ...prev,
                      weddingStyle,
                    }))
                  }
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select wedding style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="traditional">Traditional</SelectItem>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="rustic">Rustic</SelectItem>
                    <SelectItem value="beach">Beach</SelectItem>
                    <SelectItem value="garden">Garden</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  Planning Timeline
                </Label>
                <Select
                  value={bookingData.timeline}
                  onValueChange={(timeline) =>
                    setBookingData((prev) => ({ ...prev, timeline }))
                  }
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="When is your wedding?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-6months">3-6 months</SelectItem>
                    <SelectItem value="6-12months">6-12 months</SelectItem>
                    <SelectItem value="12-18months">12-18 months</SelectItem>
                    <SelectItem value="18months+">18+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-base font-medium mb-3 block">
                Venue Preference
              </Label>
              <Input
                placeholder="e.g., Outdoor garden, Beach resort, Historic venue..."
                value={bookingData.venue}
                onChange={(e) =>
                  setBookingData((prev) => ({
                    ...prev,
                    venue: e.target.value,
                  }))
                }
                className="h-12"
              />
            </div>

            {/* Add-on Services */}
            <div>
              <Label className="text-base font-medium mb-4 block">
                Additional Services
              </Label>
              <div className="grid md:grid-cols-2 gap-4">
                {addOnServices.map((addOn) => (
                  <div
                    key={addOn.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      bookingData.addOns.includes(addOn.id)
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleAddOnToggle(addOn.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{addOn.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {addOn.description}
                        </p>
                        <p className="text-sm font-medium text-rose-600">
                          {addOn.price}
                        </p>
                      </div>
                      <Checkbox
                        checked={bookingData.addOns.includes(addOn.id)}
                        onChange={() => handleAddOnToggle(addOn.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-medium mb-3 block">
                Special Requests or Notes
              </Label>
              <Textarea
                placeholder="Any specific requirements, dietary restrictions, cultural preferences, or special requests..."
                value={bookingData.specialRequests}
                onChange={(e) =>
                  setBookingData((prev) => ({
                    ...prev,
                    specialRequests: e.target.value,
                  }))
                }
                className="min-h-[100px]"
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button
                onClick={nextStep}
                disabled={!canProceedFromStep(3)}
                className="bg-rose-500 hover:bg-rose-600 px-8"
              >
                Continue to Contact Info
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Estimated Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-3xl font-bold text-rose-600">
                ${estimatedCost.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Starting estimate</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3"
                onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
              >
                {showPriceBreakdown ? "Hide" : "Show"} Breakdown
              </Button>
            </div>
            {showPriceBreakdown && (
              <div className="mt-4 space-y-2 text-sm">
                {bookingData.services.map((serviceId) => {
                  const service = services.find((s) => s.id === serviceId);
                  if (!service) return null;
                  const price = Number.parseInt(
                    service.price.replace(/[^0-9]/g, "")
                  );
                  return (
                    <div key={serviceId} className="flex justify-between">
                      <span>{service.name}</span>
                      <span>${price.toLocaleString()}</span>
                    </div>
                  );
                })}
                {bookingData.addOns.map((addOnId) => {
                  const addOn = addOnServices.find((a) => a.id === addOnId);
                  if (!addOn) return null;
                  const price = Number.parseInt(
                    addOn.price.replace(/[^0-9]/g, "")
                  );
                  return (
                    <div key={addOnId} className="flex justify-between">
                      <span>{addOn.name}</span>
                      <span>${price.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Selected Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {bookingData.guestCount && (
              <div>
                <p className="font-medium">Guest Count:</p>
                <p className="text-gray-600">{bookingData.guestCount}</p>
              </div>
            )}
            {bookingData.budget && (
              <div>
                <p className="font-medium">Budget:</p>
                <p className="text-gray-600">${bookingData.budget}</p>
              </div>
            )}
            {bookingData.weddingStyle && (
              <div>
                <p className="font-medium">Style:</p>
                <p className="text-gray-600">{bookingData.weddingStyle}</p>
              </div>
            )}
            {bookingData.addOns.length > 0 && (
              <div>
                <p className="font-medium">Add-ons:</p>
                <p className="text-gray-600">
                  {bookingData.addOns.length} selected
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeddingDetails;
