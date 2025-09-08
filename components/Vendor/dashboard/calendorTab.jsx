import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Calendar } from "lucide-react";

const CalendorTab = ({ recentBookings }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Availability Calendar</CardTitle>
            <CardDescription>
              Manage your available dates and times
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Calendar Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  Connect your calendar to manage availability
                </p>
                <Button>Connect Calendar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings
                .filter((b) => b.status === "confirmed")
                .map((booking) => (
                  <div
                    key={booking.id}
                    className="border-l-4 border-rose-500 pl-4"
                  >
                    <h4 className="font-semibold text-sm">
                      {booking.clientName}
                    </h4>
                    <p className="text-sm text-gray-600">{booking.service}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(booking.date).toLocaleDateString()} at{" "}
                      {booking.time}
                    </p>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalendorTab;
