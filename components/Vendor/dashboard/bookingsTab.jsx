import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Calendar, Users, DollarSign, MessageSquare } from "lucide-react";

const BookingsTab = ({ recentBookings, getStatusColor }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Bookings</CardTitle>
        <CardDescription>
          Manage all your client bookings and requests
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentBookings.map((booking) => (
            <div key={booking.id} className="border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">
                      {booking.clientName}
                    </h3>
                    <Badge className={getStatusColor(booking.status)}>
                      {booking.status}
                    </Badge>
                    <span className="text-sm text-gray-500">#{booking.id}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{booking.service}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(booking.date).toLocaleDateString()} at{" "}
                      {booking.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {booking.guestCount} guests
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />$
                      {booking.value.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Requested</p>
                  <p className="text-sm">
                    {new Date(booking.requestDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Venue:</strong> {booking.venue}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Message Client
                  </Button>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  {booking.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600"
                      >
                        Decline
                      </Button>
                    </>
                  )}
                  {booking.status === "confirmed" && (
                    <Button size="sm" variant="outline">
                      Mark Complete
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingsTab;
