import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Star,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Twitter,
  Award,
  Verified,
  Clock,
  CheckCircle,
  Shield,
} from "lucide-react";

const SidebarSection = ({ eventOrganizer }) => {
  return (
    <>
      {" "}
      {/* Quick Contact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{eventOrganizer.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{eventOrganizer.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{eventOrganizer.website}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-gray-400" />
            <div className="text-sm">
              <div>Mon-Fri: {eventOrganizer.businessHours.weekdays}</div>
              <div>Weekends: {eventOrganizer.businessHours.weekends}</div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Social Media */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Button size="sm" variant="outline" className="p-2 bg-transparent">
              <Instagram className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="p-2 bg-transparent">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="p-2 bg-transparent">
              <Twitter className="w-4 h-4" />
            </Button>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div>Instagram: {eventOrganizer.socialMedia.instagram}</div>
            <div>Facebook: {eventOrganizer.socialMedia.facebook}</div>
          </div>
        </CardContent>
      </Card>
      {/* Pricing Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Pricing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Starting Price</span>
            <span className="font-semibold">
              ${eventOrganizer.pricing.startingPrice.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Price Range</span>
            <span className="font-semibold">
              {eventOrganizer.pricing.priceRange}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Consultation</span>
            <span className="font-semibold text-green-600">
              {eventOrganizer.pricing.consultationFee}
            </span>
          </div>
          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500">
              Final pricing depends on your specific requirements, guest count,
              and event complexity.
            </p>
          </div>
        </CardContent>
      </Card>
      {/* Credentials */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Credentials & Trust</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <Verified className="w-4 h-4 text-blue-600" />
            <span className="text-sm">Identity Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-sm">Background Checked</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-600" />
            <span className="text-sm">Industry Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-purple-600" />
            <span className="text-sm">Insured & Licensed</span>
          </div>
        </CardContent>
      </Card>
      {/* Similar Vendors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Similar Event Organizers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((vendor) => (
            <div key={vendor} className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback>V{vendor}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h4 className="text-sm font-medium">Vendor Name {vendor}</h4>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600">
                    4.8 (45 reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            View More
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default SidebarSection;
