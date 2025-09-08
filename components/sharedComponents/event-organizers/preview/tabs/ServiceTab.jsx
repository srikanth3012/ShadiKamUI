import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Clock, DollarSign, CheckCircle } from "lucide-react";
import services from "@/lib/eventOrganizers/preview/services.json";

const ServiceTab = () => {
  return (
    <div className="grid gap-6">
      {services.map((service) => (
        <Card
          key={service.id}
          className={service.popular ? "ring-2 ring-rose-500" : ""}
        >
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div className="flex-1 mb-4 lg:mb-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  {service.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant={
                        feature === "Most Popular" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {service.price}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What's Included:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {service.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:ml-6">
                <Button className="w-full lg:w-auto bg-rose-500 hover:bg-rose-600">
                  Get Quote
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceTab;
