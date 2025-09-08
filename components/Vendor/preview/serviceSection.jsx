import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const ServiceSection = ({ services }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Services & Packages</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <span className="text-lg font-bold text-rose-600">
                  {service.price}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{service.description}</p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {service.duration}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceSection;
