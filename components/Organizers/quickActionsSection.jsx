import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Plus, Users } from "lucide-react";
const QuickActionsSection = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          className="w-full justify-start bg-purple-500 hover:bg-purple-600"
          asChild
        >
          <Link href="/organizer/events/create">
            <Plus className="w-4 h-4 mr-2" />
            Create New Event
          </Link>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start bg-transparent"
          asChild
        >
          <Link href="/organizer/vendors">
            <Users className="w-4 h-4 mr-2" />
            Browse Vendors
          </Link>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start bg-transparent"
          asChild
        >
          <Link href="/organizer/calendar">
            <Calendar className="w-4 h-4 mr-2" />
            View Calendar
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActionsSection;
