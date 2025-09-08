import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = ({ vendorProfile }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          About {vendorProfile.businessName}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {vendorProfile.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
