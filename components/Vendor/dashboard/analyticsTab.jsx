import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TrendingUp } from "lucide-react";

const AnalyticsTab = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>
              Your earnings over the past 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Revenue chart would go here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Sources</CardTitle>
            <CardDescription>
              Where your clients are finding you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Direct Bookings</span>
                <span className="font-semibold">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Referrals</span>
                <span className="font-semibold">30%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Social Media</span>
                <span className="font-semibold">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Search Engines</span>
                <span className="font-semibold">10%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Key metrics for your business</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">98%</p>
              <p className="text-sm text-gray-600">Response Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">24h</p>
              <p className="text-sm text-gray-600">Avg Response Time</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">92%</p>
              <p className="text-sm text-gray-600">Booking Acceptance</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">4.9</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsTab;
