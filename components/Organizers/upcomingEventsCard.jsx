import React, { memo, useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, Eye, Edit, MapPin, Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`; // Format: dd/mm/yyyy
}
const UpcomingEventsCard = ({ event, getStatusColor }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    console.log(formatDate(event.date));
    setDate(formatDate(event.date));
  }, [event.date]);

  return (
    <div
      key={event.id}
      className="border rounded-lg p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">{event.title}</h3>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-600 mt-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {event.venue}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {event.guests} guests
            </span>
          </div>
        </div>
        <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span>Progress</span>
          <span>{event.progress}%</span>
        </div>
        <Progress value={event.progress} className="h-2" />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:items-center justify-between">
        <div className="text-sm text-gray-600">
          <p className="font-medium">{event.client.name}</p>
          <div className="flex items-center gap-3 mt-1">
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              {event.client.email}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              {event.client.phone}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Eye className="w-4 h-4 mr-1" />
            View
          </Button>
          <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
            <Edit className="w-4 h-4 mr-1" />
            Manage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(UpcomingEventsCard);
