import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  Users,
  DollarSign,
  Shield,
  Star,
  MapPin,
  CalendarIcon,
} from "lucide-react";

import { format } from "date-fns";
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

const VendorScheduleSelection = ({
  vendors,
  bookingData,
  setBookingData,
  prevStep,
  nextStep,
  canProceedFromStep,
  selectedVendorDetails,
}) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  Choose Vendor & Schedule
                </CardTitle>
                <CardDescription>
                  Select your preferred vendor and consultation time
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Vendor Selection */}
            <div>
              <Label className="text-base font-medium mb-4 block">
                Select Your Preferred Vendor
              </Label>
              <div className="grid gap-4">
                {vendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      bookingData.vendor === vendor.id
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() =>
                      setBookingData((prev) => ({
                        ...prev,
                        vendor: vendor.id,
                      }))
                    }
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <img
                          src={vendor.image || "/placeholder.svg"}
                          alt={vendor.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">
                              {vendor.name}
                            </h3>
                            {vendor.verified && (
                              <Badge className="bg-green-100 text-green-700 text-xs">
                                <Shield className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-2">
                            {vendor.category}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">
                                {vendor.rating}
                              </span>
                              <span>({vendor.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {vendor.location}
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-green-600 font-medium">
                              Responds in {vendor.responseTime}
                            </span>
                            <span className="text-gray-600">
                              {vendor.priceRange}
                            </span>
                          </div>
                          <div className="flex gap-2 mt-2">
                            {vendor.specialties.map((specialty, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Checkbox
                        checked={bookingData.vendor === vendor.id}
                        onChange={() =>
                          setBookingData((prev) => ({
                            ...prev,
                            vendor: vendor.id,
                          }))
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-base font-medium mb-4 block">
                  Select Consultation Date
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

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button
                onClick={nextStep}
                disabled={!canProceedFromStep(2)}
                className="bg-rose-500 hover:bg-rose-600 px-8"
              >
                Continue to Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {selectedVendorDetails && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Selected Vendor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={selectedVendorDetails.image || "/placeholder.svg"}
                  alt={selectedVendorDetails.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium">{selectedVendorDetails.name}</p>
                  <p className="text-sm text-gray-600">
                    {selectedVendorDetails.category}
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>
                    {selectedVendorDetails.rating} (
                    {selectedVendorDetails.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>Responds in {selectedVendorDetails.responseTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-gray-500" />
                  <span>{selectedVendorDetails.priceRange}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Booking Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium">Services:</p>
                <p className="text-gray-600">
                  {bookingData.services.length} selected
                </p>
              </div>
              {bookingData.date && (
                <div>
                  <p className="font-medium">Date:</p>
                  <p className="text-gray-600">
                    {format(bookingData.date, "PPP")}
                  </p>
                </div>
              )}
              {bookingData.time && (
                <div>
                  <p className="font-medium">Time:</p>
                  <p className="text-gray-600">{bookingData.time}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendorScheduleSelection;
