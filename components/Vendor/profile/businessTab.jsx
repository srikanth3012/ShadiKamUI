import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Switch } from "@/components/ui/switch";
import { Star, Plus, Trash2, Award } from "lucide-react";

const BusinessTab = ({ profile, setProfile, setIsEditing }) => {
  return (
    <>
      {" "}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Business Hours</CardTitle>
            <CardDescription>
              Set your availability for client consultations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(profile.businessHours).map(([day, hours]) => (
              <div key={day} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Switch
                    checked={!hours.closed}
                    onCheckedChange={(checked) => {
                      setProfile({
                        ...profile,
                        businessHours: {
                          ...profile.businessHours,
                          [day]: { ...hours, closed: !checked },
                        },
                      });
                      setIsEditing(true);
                    }}
                  />
                  <span className="capitalize font-medium w-20">{day}</span>
                </div>
                {!hours.closed ? (
                  <div className="flex items-center gap-2">
                    <Input
                      type="time"
                      value={hours.open}
                      onChange={(e) => {
                        setProfile({
                          ...profile,
                          businessHours: {
                            ...profile.businessHours,
                            [day]: { ...hours, open: e.target.value },
                          },
                        });
                        setIsEditing(true);
                      }}
                      className="w-24"
                    />
                    <span>to</span>
                    <Input
                      type="time"
                      value={hours.close}
                      onChange={(e) => {
                        setProfile({
                          ...profile,
                          businessHours: {
                            ...profile.businessHours,
                            [day]: {
                              ...hours,
                              close: e.target.value,
                            },
                          },
                        });
                        setIsEditing(true);
                      }}
                      className="w-24"
                    />
                  </div>
                ) : (
                  <span className="text-gray-500">Closed</span>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Certifications & Awards</CardTitle>
            <CardDescription>
              Showcase your professional credentials
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Certifications</Label>
              <div className="space-y-2 mt-2">
                {profile.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{cert}</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Certification
                </Button>
              </div>
            </div>

            <div>
              <Label>Awards</Label>
              <div className="space-y-2 mt-2">
                {profile.awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm">{award}</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Award
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Business Policies</CardTitle>
          <CardDescription>Set your terms and conditions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="cancellationPolicy">Cancellation Policy</Label>
            <Textarea
              id="cancellationPolicy"
              placeholder="Describe your cancellation and refund policy..."
              rows={3}
            />
          </div>
          <div>
            <Label htmlFor="paymentTerms">Payment Terms</Label>
            <Textarea
              id="paymentTerms"
              placeholder="Describe your payment schedule and terms..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BusinessTab;
