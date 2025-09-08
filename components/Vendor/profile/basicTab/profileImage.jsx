import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Camera, Upload } from "lucide-react";

const ProfileImage = ({ profile, handleImageUpload }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Images</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label>Profile Picture</Label>
          <div className="flex items-center gap-4 mt-2">
            <Avatar className="w-20 h-20">
              <AvatarImage src={profile.profileImage || "/placeholder.svg"} />
              <AvatarFallback>EE</AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              onClick={() => handleImageUpload("profile")}
            >
              <Camera className="w-4 h-4 mr-2" />
              Change Photo
            </Button>
          </div>
        </div>

        <div>
          <Label>Cover Image</Label>
          <div className="mt-2">
            <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <Button
                variant="outline"
                onClick={() => handleImageUpload("cover")}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Cover
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileImage;
