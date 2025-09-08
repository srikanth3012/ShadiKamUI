import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Users,
  DollarSign,
  MessageSquare,
  CheckCircle,
  XCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const BookingCard = ({
  booking,
  getStatusColor,
  getUrgencyColor,
  selectedBooking,
  setSelectedBooking,
  handleDeclineBooking,
  setResponseMessage,
  handleAcceptBooking,
  responseMessage,
}) => {
  return (
    <Card
      key={booking.id}
      className={`border-l-4 ${getUrgencyColor(booking.urgency)}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">{booking.clientName}</h3>
              <Badge className={getStatusColor(booking.status)}>
                {booking.status}
              </Badge>
              <span className="text-sm text-gray-500">#{booking.id}</span>
              {booking.urgency === "high" && (
                <Badge variant="destructive" className="text-xs">
                  Urgent
                </Badge>
              )}
            </div>
            <p className="text-gray-600 mb-3">{booking.service}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>
                  {new Date(booking.date).toLocaleDateString()} at{" "}
                  {booking.time}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span>{booking.guestCount} guests</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gray-400" />
                <span>${booking.value.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{booking.venue}</span>
              </div>
            </div>
          </div>

          <div className="text-right text-sm text-gray-500">
            <p>Requested</p>
            <p>{new Date(booking.requestDate).toLocaleDateString()}</p>
          </div>
        </div>

        {booking.notes && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-sm mb-2">Client Notes:</h4>
            <p className="text-sm text-gray-600">{booking.notes}</p>
          </div>
        )}

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            {booking.clientEmail}
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            {booking.clientPhone}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedBooking(booking)}
                >
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Booking Details - #{booking.id}</DialogTitle>
                  <DialogDescription>
                    Complete information for {booking.clientName}'s booking
                  </DialogDescription>
                </DialogHeader>
                {selectedBooking && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">
                          Client Information
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Names:</strong> {selectedBooking.clientName}
                          </p>
                          <p>
                            <strong>Email:</strong>{" "}
                            {selectedBooking.clientEmail}
                          </p>
                          <p>
                            <strong>Phone:</strong>{" "}
                            {selectedBooking.clientPhone}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Event Details</h4>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Service:</strong> {selectedBooking.service}
                          </p>
                          <p>
                            <strong>Date:</strong>{" "}
                            {new Date(
                              selectedBooking.date
                            ).toLocaleDateString()}
                          </p>
                          <p>
                            <strong>Time:</strong> {selectedBooking.time}
                          </p>
                          <p>
                            <strong>Venue:</strong> {selectedBooking.venue}
                          </p>
                          <p>
                            <strong>Guests:</strong>{" "}
                            {selectedBooking.guestCount}
                          </p>
                          <p>
                            <strong>Value:</strong> $
                            {selectedBooking.value.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    {selectedBooking.notes && (
                      <div>
                        <h4 className="font-semibold mb-3">
                          Special Requirements
                        </h4>
                        <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                          {selectedBooking.notes}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </DialogContent>
            </Dialog>

            <Button size="sm" variant="outline">
              <MessageSquare className="w-4 h-4 mr-1" />
              Message
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {booking.status === "pending" && (
              <>
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => handleAcceptBooking(booking.id)}
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Accept
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Decline
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Decline Booking</DialogTitle>
                      <DialogDescription>
                        Please provide a reason for declining this booking
                        request.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="decline-reason">
                          Reason for declining
                        </Label>
                        <Textarea
                          id="decline-reason"
                          placeholder="Please explain why you cannot take this booking..."
                          value={responseMessage}
                          onChange={(e) => setResponseMessage(e.target.value)}
                          rows={4}
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline">Cancel</Button>
                        <Button
                          variant="destructive"
                          onClick={() => handleDeclineBooking(booking.id)}
                        >
                          Send Decline
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            )}

            {booking.status === "confirmed" && (
              <Button size="sm" variant="outline">
                Mark Complete
              </Button>
            )}

            {booking.status === "completed" && (
              <Badge variant="secondary">Completed</Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
