import React from "react";
import demoVendors from "@/lib/HomePageLibs/demoVendors.json";
import ServiceCard from "@/components/homepage/serviceCard";
import { Badge } from "@/components/ui/badge";

const ServiceSection = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-blue-100 text-blue-700">Our Services</Badge>
        <h3 className="text-4xl font-bold text-gray-900 mb-6">
          Complete Wedding Solutions
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need for your perfect wedding day, all in one place.
          Our verified professionals handle every detail with expertise and
          care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demoVendors.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
