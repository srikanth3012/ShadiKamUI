import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import RecentBookingCard from "@/components/Organizers/recentBookingCard";

const RecentBookingSection = ({ recentBookings, getStatusColor }) => {
  if (!recentBookings) return <p>Loading</p>;
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Recent Bookings</CardTitle>
            <CardDescription>
              New client requests and confirmations
            </CardDescription>
          </div>
          <Button variant="outline" asChild>
            <Link href="/organizer/bookings">View All</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentBookings.error ? (
            <p>Data Not Found</p>
          ) : (
            recentBookings?.results?.map((booking) => (
              <RecentBookingCard
                key={booking?.id}
                booking={booking}
                getStatusColor={getStatusColor}
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentBookingSection;
