import React, { memo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const VendorCard = ({ request, getStatusColor }) => {
  return (
    <div key={request.id} className="p-3 border rounded-lg">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-medium text-sm">{request.vendorName}</h4>
          <p className="text-xs text-gray-600">{request.service}</p>
        </div>
        <Badge className={getStatusColor(request.status)} size="sm">
          {request.status}
        </Badge>
      </div>
      <p className="text-xs text-gray-500 mb-2">{request.event}</p>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="text-xs px-2 py-1 bg-transparent"
        >
          View
        </Button>
        {request.status === "pending" && (
          <Button
            size="sm"
            className="text-xs px-2 py-1 bg-purple-500 hover:bg-purple-600"
          >
            Approve
          </Button>
        )}
      </div>
    </div>
  );
};

export default VendorCard;
