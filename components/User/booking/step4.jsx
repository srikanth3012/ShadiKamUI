import React from "react";
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

import { Alert, AlertDescription } from "@/components/ui/alert";

import { Shield, Phone, Mail, User } from "lucide-react";

const ContactInformation = ({
  bookingData,
  handleContactInfoChange,
  canProceedFromStep,
  prevStep,
  nextStep,
}) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  We'll use this information to send you quotes and updates
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Bride's Name *
                </Label>
                <Input
                  placeholder="Enter bride's full name"
                  value={bookingData.contactInfo.brideName}
                  onChange={(e) =>
                    handleContactInfoChange("brideName", e.target.value)
                  }
                  className="h-12"
                />
              </div>
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Groom's Name
                </Label>
                <Input
                  placeholder="Enter groom's full name"
                  value={bookingData.contactInfo.groomName}
                  onChange={(e) =>
                    handleContactInfoChange("groomName", e.target.value)
                  }
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Email Address *
                </Label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={bookingData.contactInfo.email}
                  onChange={(e) =>
                    handleContactInfoChange("email", e.target.value)
                  }
                  className="h-12"
                />
              </div>
              <div>
                <Label className="text-base font-medium mb-3 block">
                  Phone Number *
                </Label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={bookingData.contactInfo.phone}
                  onChange={(e) =>
                    handleContactInfoChange("phone", e.target.value)
                  }
                  className="h-12"
                />
              </div>
            </div>

            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Your information is secure and will only be shared with selected
                vendors. We never sell or share your data with third parties.
              </AlertDescription>
            </Alert>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button
                onClick={nextStep}
                disabled={!canProceedFromStep(4)}
                className="bg-rose-500 hover:bg-rose-600 px-8"
              >
                Review Booking
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-rose-600">1</span>
              </div>
              <div>
                <p className="font-medium text-sm">Instant Confirmation</p>
                <p className="text-xs text-gray-600">
                  You'll receive a booking confirmation immediately
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-rose-600">2</span>
              </div>
              <div>
                <p className="font-medium text-sm">Vendor Contact</p>
                <p className="text-xs text-gray-600">
                  Selected vendors will reach out within 24 hours
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-rose-600">3</span>
              </div>
              <div>
                <p className="font-medium text-sm">Custom Quotes</p>
                <p className="text-xs text-gray-600">
                  Receive personalized quotes based on your needs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-sm">support@shadikam.com</span>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Our wedding specialists are available 24/7 to help you plan your
              perfect day.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactInformation;
