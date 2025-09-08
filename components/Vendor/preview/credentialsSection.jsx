import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Verified } from "lucide-react";

const CredentialsSection = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Credentials</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm">Certified Wedding Planner</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-600" />
            <span className="text-sm">Best Wedding Planner 2023</span>
          </div>
          <div className="flex items-center gap-2">
            <Verified className="w-4 h-4 text-green-600" />
            <span className="text-sm">Background Verified</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CredentialsSection;
