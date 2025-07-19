import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Award,
  CheckCircle,
  Sparkles,
  Trophy,
  Shield,
} from "lucide-react";

const OverviewTab = ({ eventOrganizer }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>About {eventOrganizer.businessName}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed mb-6">
            {eventOrganizer.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-500" />
                Our Specialties
              </h3>
              <div className="space-y-2">
                {eventOrganizer.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Recent Awards
              </h3>
              <div className="space-y-2">
                {eventOrganizer.awards.slice(0, 3).map((award, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Why Choose Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="font-semibold mb-2">Personalized Service</h3>
              <p className="text-sm text-gray-600">
                Every wedding is unique, and we tailor our services to match
                your vision and style.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold mb-2">Stress-Free Planning</h3>
              <p className="text-sm text-gray-600">
                We handle all the details so you can focus on enjoying your
                engagement and wedding day.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-semibold mb-2">Proven Track Record</h3>
              <p className="text-sm text-gray-600">
                With 300+ successful events, we have the experience to make your
                day perfect.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OverviewTab;
