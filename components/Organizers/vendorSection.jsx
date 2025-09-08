import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Plus } from "lucide-react";

import VendorCard from "@/components/Organizers/vendorCard";

const VendorSection = ({ vendorRequests, getStatusColor }) => {
  if (!vendorRequests) return <p>Loading</p>;
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Vendor Requests</CardTitle>
        <CardDescription>Pending vendor bookings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {vendorRequests.error ? (
            <p>Data Not Found</p>
          ) : (
            vendorRequests?.results.map((request) => (
              <VendorCard
                key={request?.id}
                request={request}
                getStatusColor={getStatusColor}
              />
            ))
          )}
        </div>
        <Button
          variant="outline"
          className="w-full mt-4 bg-transparent"
          asChild
        >
          <Link href="/organizer/vendors">
            <Plus className="w-4 h-4 mr-2" />
            Find More Vendors
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default memo(VendorSection);
