import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

const NotificationsSection = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
            <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Payment Due</p>
              <p className="text-xs text-gray-600">
                Sarah & Michael's Wedding - $5,000
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Vendor Confirmed</p>
              <p className="text-xs text-gray-600">
                Perfect Photos Studio accepted your request
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <Clock className="w-4 h-4 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Meeting Reminder</p>
              <p className="text-xs text-gray-600">
                Client consultation at 3 PM today
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsSection;
