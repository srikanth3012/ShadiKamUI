import { Card, CardContent } from "@/components/ui/card";

const QuickStatsSection = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Response Rate</span>
            <span className="font-semibold text-green-600">98%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Response Time</span>
            <span className="font-semibold">Within 2 hours</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Booking Rate</span>
            <span className="font-semibold text-blue-600">92%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStatsSection;
