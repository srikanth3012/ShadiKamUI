import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactInfo = ({ profile, setProfile, setIsEditing }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => {
                setProfile({ ...profile, email: e.target.value });
                setIsEditing(true);
              }}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={profile.phone}
              onChange={(e) => {
                setProfile({ ...profile, phone: e.target.value });
                setIsEditing(true);
              }}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="url"
            placeholder="https://your-website.com"
            value={profile.website}
            onChange={(e) => {
              setProfile({ ...profile, website: e.target.value });
              setIsEditing(true);
            }}
          />
        </div>

        <div className="space-y-4">
          <Label>Business Address</Label>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Street Address"
              value={profile.address.street}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  address: {
                    ...profile.address,
                    street: e.target.value,
                  },
                });
                setIsEditing(true);
              }}
            />
            <Input
              placeholder="City"
              value={profile.address.city}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  address: {
                    ...profile.address,
                    city: e.target.value,
                  },
                });
                setIsEditing(true);
              }}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Input
              placeholder="State"
              value={profile.address.state}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  address: {
                    ...profile.address,
                    state: e.target.value,
                  },
                });
                setIsEditing(true);
              }}
            />
            <Input
              placeholder="ZIP Code"
              value={profile.address.zipCode}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  address: {
                    ...profile.address,
                    zipCode: e.target.value,
                  },
                });
                setIsEditing(true);
              }}
            />
            <Input
              placeholder="Country"
              value={profile.address.country}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  address: {
                    ...profile.address,
                    country: e.target.value,
                  },
                });
                setIsEditing(true);
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
