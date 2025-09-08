import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

import {
  Clock,
  Check,
  DollarSign,
  Sparkles,
  Gift,
  Shield,
  Zap,
} from "lucide-react";

// Enhanced services with more details

const ServiceSelection = ({
  services,
  bookingData,
  nextStep,
  canProceedFromStep,
  handleServiceToggle,
}) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <CardTitle className="text-2xl">Select Your Services</CardTitle>
                <CardDescription>
                  Choose the wedding services you need for your special day
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-md ${
                    bookingData.services.includes(service.id)
                      ? "border-rose-500 bg-rose-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">
                          {service.name}
                        </h3>
                        {service.popular && (
                          <Badge className="bg-orange-100 text-orange-700 text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {service.price}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </span>
                      </div>
                      <div className="space-y-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-gray-600"
                          >
                            <div className="w-1 h-1 bg-rose-500 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Checkbox
                      checked={bookingData.services.includes(service.id)}
                      onChange={() => handleServiceToggle(service.id)}
                      className="mt-1"
                    />
                  </div>
                </div>
              ))}
            </div>

            {bookingData.services.length > 0 && (
              <Alert className="mb-6">
                <Sparkles className="h-4 w-4" />
                <AlertDescription>
                  Great choice! You've selected {bookingData.services.length}{" "}
                  service
                  {bookingData.services.length > 1 ? "s" : ""}. Our vendors will
                  provide detailed quotes based on your specific needs.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex justify-between">
              <div></div>
              <Button
                onClick={nextStep}
                disabled={!canProceedFromStep(1)}
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
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Selected Services</CardTitle>
          </CardHeader>
          <CardContent>
            {bookingData.services.length === 0 ? (
              <p className="text-gray-500 text-sm">No services selected yet</p>
            ) : (
              <div className="space-y-3">
                {bookingData.services.map((serviceId) => {
                  const service = services.find((s) => s.id === serviceId);
                  return service ? (
                    <div
                      key={serviceId}
                      className="flex items-center justify-between p-3 bg-rose-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-sm">{service.name}</p>
                        <p className="text-xs text-gray-600">{service.price}</p>
                      </div>
                      <Check className="w-4 h-4 text-rose-600" />
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Why Choose ShadiKam?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-sm">Verified Vendors</p>
                <p className="text-xs text-gray-600">
                  All vendors are background checked
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-sm">Quick Response</p>
                <p className="text-xs text-gray-600">
                  Get quotes within 24 hours
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium text-sm">Best Prices</p>
                <p className="text-xs text-gray-600">
                  Competitive pricing guaranteed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceSelection;
