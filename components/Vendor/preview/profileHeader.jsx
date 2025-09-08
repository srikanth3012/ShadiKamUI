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
  DollarSign,
  Users,
  Calendar,
  MessageSquare,
} from "lucide-react";

const ProfileHeader = ({ vendorProfile }) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
            <AvatarImage
              src={vendorProfile.profileImage || "/placeholder.svg"}
            />
            <AvatarFallback className="text-2xl">EE</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {vendorProfile.businessName}
                  </h1>
                  {vendorProfile.verified && (
                    <Badge className="bg-blue-100 text-blue-800">
                      <Verified className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-xl text-gray-600 mb-2">
                  {vendorProfile.tagline}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {vendorProfile.address.city}, {vendorProfile.address.state}
                  </div>
                  <Badge variant="secondary">{vendorProfile.category}</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-bold">
                    {vendorProfile.rating}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {vendorProfile.reviewCount} reviews
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                {vendorProfile.experience.yearsInBusiness} years experience
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                {vendorProfile.experience.eventsCompleted}+ events completed
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <DollarSign className="w-4 h-4" />
                {vendorProfile.pricing.priceRange}
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="bg-rose-500 hover:bg-rose-600">
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;
