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
import UpcomingEventsCard from "@/components/Organizers/upcomingEventsCard";

const UpcomingEventSection = ({ upcomingEvents, getStatusColor }) => {
  if (!upcomingEvents) return <p>Loading</p>;
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-center md:justify-between">
          <div>
            <CardTitle className="text-xl">Upcoming Events</CardTitle>
            <CardDescription>
              Events you're currently organizing
            </CardDescription>
          </div>
          <Button variant="outline" asChild>
            <Link href="/organizer/events">View All</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {upcomingEvents.error ? (
            <h1>Data Not Found</h1>
          ) : (
            upcomingEvents?.results?.map((event) => (
              <UpcomingEventsCard
                key={event?.id}
                event={event}
                getStatusColor={getStatusColor}
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingEventSection;
