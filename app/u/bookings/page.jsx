"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

// Mock booking data

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const bookings = useSelector((store) => store.bookings.bookings);

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredBookings =
    activeTab === "all"
      ? bookings
      : bookings.filter((booking) => booking.status === activeTab);

  console.log(filteredBookings);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      {/* <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-rose-500" />
            <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/booking" className="text-gray-600 hover:text-rose-500 transition-colors">
              New Booking
            </Link>
            <Link href="/bookings" className="text-rose-500 font-medium">
              My Bookings
            </Link>
          </nav>
        </div>
      </header> */}

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                My Bookings
              </h1>
              <p className="text-gray-600">
                Manage your wedding service appointments
              </p>
            </div>
            <Button className="bg-rose-500 hover:bg-rose-600" asChild>
              <Link href="/booking">New Booking</Link>
            </Button>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Bookings</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-6">
              {filteredBookings.length === 0 ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No bookings found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      You don't have any {activeTab === "all" ? "" : activeTab}{" "}
                      bookings yet.
                    </p>
                    <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                      <Link href="/booking">Book Your First Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-6">
                  {filteredBookings.map((booking) => (
                    <Card
                      key={booking.id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardContent>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 pt-10">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="font-medium">
                                {new Date(booking.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                              <p className="text-sm text-gray-600 flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {booking.time}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="font-medium">Venue</p>
                              <p className="text-sm text-gray-600">
                                {booking.venue}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-gray-400" />
                            <div>
                              <p className="font-medium">Guest Count</p>
                              <p className="text-sm text-gray-600">
                                {booking.guestCount} guests
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status.charAt(0).toUpperCase() +
                                booking.status.slice(1)}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              #{booking.id}
                            </span>
                          </div>
                        </div>

                        {booking.notes && (
                          <div className="bg-gray-50 rounded-lg p-4 mb-6">
                            <h4 className="font-medium mb-2">Special Notes</h4>
                            <p className="text-sm text-gray-600">
                              {booking.notes}
                            </p>
                          </div>
                        )}

                        <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-center md:justify-between pt-4 border-t">
                          <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {booking.contactEmail}
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="w-4 h-4" />
                              {booking.contactPhone}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Message
                            </Button>
                            {booking.status === "pending" && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-600 hover:text-red-700"
                              >
                                Cancel
                              </Button>
                            )}
                            {booking.status === "confirmed" && (
                              <Button
                                size="sm"
                                className="bg-rose-500 hover:bg-rose-600"
                              >
                                Reschedule
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
