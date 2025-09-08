import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Globe, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfoSection = ({ vendorProfile }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{vendorProfile.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{vendorProfile.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{vendorProfile.website}</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <h4 className="font-medium mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <Button size="sm" variant="outline" className="p-2">
              <Instagram className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="p-2">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="p-2">
              <Twitter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfoSection;
