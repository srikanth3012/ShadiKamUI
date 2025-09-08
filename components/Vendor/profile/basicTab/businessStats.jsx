import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const BusinessStats = ({ profile }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Years in Business</span>
          <span className="font-semibold">
            {profile.experience.yearsInBusiness}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Events Completed</span>
          <span className="font-semibold">
            {profile.experience.eventsCompleted}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Team Size</span>
          <span className="font-semibold">{profile.experience.teamSize}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Rating</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{profile.rating}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessStats;
