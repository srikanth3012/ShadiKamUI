import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Star,
  MapPin,
  Verified,
  Clock,
  Calendar,
  Sparkles,
  Trophy,
  Shield,
  Eye,
} from "lucide-react";
import Link from "next/link";

const VendorGridSection = ({
  filteredVendors,
  handleContactVendor,
  setLocationFilter,
  setPriceFilter,
  setSpecialtyFilter,
  setSearchTerm,
}) => {
  // console.log(filteredVendors);
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredVendors.map((vendor) => (
          <Card
            key={vendor.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            {vendor.featured && (
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-center py-2">
                <div className="flex items-center justify-center gap-1 text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Featured Vendor
                </div>
              </div>
            )}

            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-rose-100 to-pink-100 overflow-hidden">
                <img
                  src={vendor.coverImage || "/placeholder.svg"}
                  alt={vendor.businessName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                {vendor.verified && (
                  <Badge className="bg-blue-500 text-white">
                    <Verified className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
                {vendor.backgroundChecked && (
                  <Badge className="bg-green-500 text-white">
                    <Shield className="w-3 h-3 mr-1" />
                    Checked
                  </Badge>
                )}
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                <Clock className="w-3 h-3 inline mr-1" />
                {vendor.responseTime}
              </div>
            </div>

            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-16 h-16 border-2 border-white shadow-lg">
                  <AvatarImage
                    src={vendor.profileImage || "/placeholder.svg"}
                  />
                  <AvatarFallback className="bg-rose-100 text-rose-600 text-lg">
                    {vendor.businessName
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {vendor.businessName}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {vendor.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {vendor.location.city}, {vendor.location.state}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{vendor.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        ({vendor.reviewCount} reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {vendor.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {vendor.specialties.slice(0, 3).map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
                {vendor.specialties.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{vendor.specialties.length - 3} more
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600 mb-1">Experience</div>
                  <div className="font-bold">
                    {vendor.experience.yearsInBusiness} years
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600 mb-1">Events</div>
                  <div className="font-bold">
                    {vendor.experience.eventsCompleted}+
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600 mb-1">Starting</div>
                  <div className="font-bold text-rose-600">
                    ${vendor.pricing.startingPrice.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-rose-500 hover:bg-rose-600"
                  onClick={() => handleContactVendor("btn", vendor)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  asChild
                >
                  <Button onClick={() => handleContactVendor("link", vendor)}>
                    <Eye className="w-4 h-4 mr-2" />
                    View Profile
                  </Button>
                </Button>
              </div>

              {vendor.awards.length > 0 && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="truncate">{vendor.awards[0]}</span>
                    {vendor.awards.length > 1 && (
                      <Badge variant="outline" className="text-xs">
                        +{vendor.awards.length - 1}
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {filteredVendors.length === 0 && (
        <Card className="text-center py-16">
          <CardContent>
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* <Search className="w-8 h-8 text-gray-400" /> */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No event organizers found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters to find more
              results.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setLocationFilter("");
                setPriceFilter("");
                setSpecialtyFilter("");
              }}
            >
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default VendorGridSection;
