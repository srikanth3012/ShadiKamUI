import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, MapPin, Camera, Utensils, Music, Users } from "lucide-react";

const iconMap = {
  Calendar,
  MapPin,
  Camera,
  Utensils,
  Music,
  Users,
};

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon];
  return (
    <Card
      key={index}
      className="hover:shadow-xl transition-all duration-300 relative group"
    >
      {service.popular && (
        <Badge className="absolute -top-2 -right-2 bg-rose-500 text-white">
          Popular
        </Badge>
      )}
      <CardHeader className="pb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-rose-600" />
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-600 flex items-center">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-rose-600">
            {service.priceRange}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="group-hover:bg-rose-50"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
