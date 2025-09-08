import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const PerformanceSection = () => {
  return (
    <Card className="shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
      <CardHeader>
        <CardTitle className="text-lg">This Month</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Events Completed</span>
            <span className="font-semibold">5</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Revenue Generated</span>
            <span className="font-semibold text-green-600">$45,000</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Client Satisfaction</span>
            <span className="font-semibold text-yellow-600">4.9★</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Response Time</span>
            <span className="font-semibold text-blue-600">&lt; 2 hours</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceSection;
