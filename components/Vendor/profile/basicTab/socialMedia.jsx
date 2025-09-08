import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Instagram, Facebook, Twitter } from "lucide-react";

const SocialMedia = ({ profile, setProfile, setIsEditing }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="instagram">Instagram</Label>
          <div className="flex">
            <div className="flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md">
              <Instagram className="w-4 h-4 text-gray-500" />
            </div>
            <Input
              id="instagram"
              placeholder="@username"
              className="rounded-l-none"
              value={profile.socialMedia.instagram}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  socialMedia: {
                    ...profile.socialMedia,
                    instagram: e.target.value,
                  },
                });
                setIsEditing(true);
              }}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="facebook">Facebook</Label>
          <div className="flex">
            <div className="flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md">
              <Facebook className="w-4 h-4 text-gray-500" />
            </div>
            <Input
              id="facebook"
              placeholder="Page name"
              className="rounded-l-none"
              value={profile.socialMedia.facebook}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  socialMedia: {
                    ...profile.socialMedia,
                    facebook: e.target.value,
                  },
                });
                setIsEditing(true);
              }}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="twitter">Twitter</Label>
          <div className="flex">
            <div className="flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md">
              <Twitter className="w-4 h-4 text-gray-500" />
            </div>
            <Input
              id="twitter"
              placeholder="@username"
              className="rounded-l-none"
              value={profile.socialMedia.twitter}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  socialMedia: {
                    ...profile.socialMedia,
                    twitter: e.target.value,
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

export default SocialMedia;
