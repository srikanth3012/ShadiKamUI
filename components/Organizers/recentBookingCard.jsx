import React, { memo, useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`; // Format: dd/mm/yyyy
}
const RecentBookingCard = ({ booking, getStatusColor }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(formatDate(booking.date));
  }, [booking.date]);
  return (
    <div
      key={booking.id}
      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
    >
      <div>
        <h3 className="font-semibold">{booking.clientName}</h3>
        <p className="text-sm text-gray-600">{booking.eventType}</p>
        <div className="flex items-center gap-2 mt-1">
          <Calendar className="w-3 h-3 text-gray-400" />
          <span className="text-sm text-gray-500">{date}</span>
          <Badge className={getStatusColor(booking.status)}>
            {booking.status}
          </Badge>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-purple-600">{booking.value}</p>
        <Button size="sm" variant="outline" className="mt-2 bg-transparent">
          {booking.status === "pending" ? "Review" : "View Details"}
        </Button>
      </div>
    </div>
  );
};

export default memo(RecentBookingCard);
