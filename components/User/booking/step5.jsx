import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check, Star } from "lucide-react";
import { format } from "date-fns";

const ReviewandConfirmation = ({
  services,
  bookingData,
  estimatedCost,
  prevStep,
  handleSubmit,
  selectedVendorDetails,
}) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <CardTitle className="text-2xl">Review Your Booking</CardTitle>
                <CardDescription>
                  Please review all details before submitting your request
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Services Summary */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Selected Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {bookingData.services.map((serviceId) => {
                  const service = services.find((s) => s.id === serviceId);
                  return service ? (
                    <div key={serviceId} className="border rounded-lg p-4">
                      <h4 className="font-medium">{service.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {service.description}
                      </p>
                      <p className="text-sm font-medium text-rose-600 mt-2">
                        {service.price}
                      </p>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            {/* Vendor & Schedule */}
            {selectedVendorDetails && (
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  Vendor & Schedule
                </h3>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={selectedVendorDetails.image || "/placeholder.svg"}
                      alt={selectedVendorDetails.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-lg">
                        {selectedVendorDetails.name}
                      </h4>
                      <p className="text-gray-600">
                        {selectedVendorDetails.category}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">
                          {selectedVendorDetails.rating} (
                          {selectedVendorDetails.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Consultation Date:</p>
                      <p className="text-gray-600">
                        {bookingData.date
                          ? format(bookingData.date, "PPP")
                          : "Not selected"}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Time:</p>
                      <p className="text-gray-600">
                        {bookingData.time || "Not selected"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Wedding Details */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Wedding Details</h3>
              <div className="border rounded-lg p-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Guest Count:</p>
                    <p className="text-gray-600">
                      {bookingData.guestCount || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Budget Range:</p>
                    <p className="text-gray-600">
                      ${bookingData.budget || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Wedding Style:</p>
                    <p className="text-gray-600">
                      {bookingData.weddingStyle || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Timeline:</p>
                    <p className="text-gray-600">
                      {bookingData.timeline || "Not specified"}
                    </p>
                  </div>
                </div>
                {bookingData.venue && (
                  <div className="mt-4">
                    <p className="font-medium text-sm">Venue Preference:</p>
                    <p className="text-gray-600 text-sm">{bookingData.venue}</p>
                  </div>
                )}
                {bookingData.specialRequests && (
                  <div className="mt-4">
                    <p className="font-medium text-sm">Special Requests:</p>
                    <p className="text-gray-600 text-sm">
                      {bookingData.specialRequests}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Contact Information
              </h3>
              <div className="border rounded-lg p-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Bride's Name:</p>
                    <p className="text-gray-600">
                      {bookingData.contactInfo.brideName}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Groom's Name:</p>
                    <p className="text-gray-600">
                      {bookingData.contactInfo.groomName || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600">
                      {bookingData.contactInfo.email}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-gray-600">
                      {bookingData.contactInfo.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="bg-rose-500 hover:bg-rose-600 px-8"
              >
                Submit Booking Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Final Estimate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-3xl font-bold text-rose-600">
                ${estimatedCost.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Starting estimate</p>
              <p className="text-xs text-gray-500 mt-2">
                Final pricing will be provided by vendors based on your specific
                requirements
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Booking Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Services:</span>
              <span>{bookingData.services.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Add-ons:</span>
              <span>{bookingData.addOns.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Vendor:</span>
              <span>{selectedVendorDetails?.name || "Selected"}</span>
            </div>
            <div className="flex justify-between">
              <span>Timeline:</span>
              <span>{bookingData.timeline || "TBD"}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReviewandConfirmation;
