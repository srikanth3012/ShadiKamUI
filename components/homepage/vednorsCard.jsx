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
import { Verified, Clock, Star } from "lucide-react";

const VednorCard = ({ vendor, index }) => {
  return (
    <Card
      key={index}
      className="hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-rose-100 to-pink-100 rounded-t-lg overflow-hidden">
          <img
            src={vendor.image || "/placeholder.svg"}
            alt={vendor.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {vendor.verified && (
          <Badge className="absolute top-3 left-3 bg-green-500 text-white">
            <Verified className="w-3 h-3 mr-1" />
            Verified
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
          <Clock className="w-3 h-3 inline mr-1" />
          {vendor.responseTime}
        </div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{vendor.name}</CardTitle>
            <CardDescription className="text-sm">
              {vendor.category}
            </CardDescription>
            <p className="text-xs text-gray-500 mt-1">{vendor.location}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{vendor.rating}</span>
            </div>
            <p className="text-xs text-gray-500">({vendor.reviews} reviews)</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Price Range:</span>
            <span className="font-medium text-rose-600">
              {vendor.priceRange}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Events:</span>
            <span className="font-medium">{vendor.completedEvents}+</span>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {vendor.specialties.slice(0, 2).map((specialty, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VednorCard;
