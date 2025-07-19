import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Check } from "lucide-react";
import Link from "next/link";

const Confirmation = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <Card className="shadow-lg">
        <CardContent className="p-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Booking Request Submitted!
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for choosing ShadiKam! Your booking request has been
            successfully submitted. Our selected vendors will contact you within
            24 hours with personalized quotes.
          </p>

          <div className="bg-rose-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-lg mb-4">What's Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-white">1</span>
                </div>
                <p className="text-sm">
                  Check your email for booking confirmation
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-white">2</span>
                </div>
                <p className="text-sm">
                  Vendors will contact you within 24 hours
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-white">3</span>
                </div>
                <p className="text-sm">
                  Compare quotes and finalize your wedding plans
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" className="px-8">
                Return to Home
              </Button>
            </Link>
            <Link href="/bookings">
              <Button className="bg-rose-500 hover:bg-rose-600 px-8">
                View My Bookings
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Confirmation;
