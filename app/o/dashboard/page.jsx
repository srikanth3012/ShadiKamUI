"use client";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

import {
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  Plus,
  Star,
} from "lucide-react";
import Link from "next/link";

import UpcomingEventSection from "@/components/Organizers/upcomingEventSection";
import RecentBookingSection from "@/components/Organizers/recentBookingSection";
import VendorSection from "@/components/Organizers/vendorSection";
import QuickActionsSection from "@/components/Organizers/quickActionsSection";
import PerformanceSection from "@/components/Organizers/performanceSection";
import NotificationsSection from "@/components/Organizers/notificationsSection";

import OrganizersDashboardData from "@/lib/organizersDashboard/organizersDashboard.json";
import { useEffect, useState } from "react";

const upcomingEvents = OrganizersDashboardData["upcomingEvents"];
const recentBookings = OrganizersDashboardData["recentBookings"];
const vendorRequests = OrganizersDashboardData["vendorRequests"];

export default function OrganizerDashboard() {
  const [upComing, setUpComing] = useState();
  const [recent, setRecent] = useState();
  const [vendor, setVendor] = useState();

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700";
      case "planning":
        return "bg-blue-100 text-blue-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "completed":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  useEffect(() => {
    const prom1 = Promise.resolve(upcomingEvents);
    const prom2 = Promise.resolve(recentBookings);
    const prom3 = Promise.resolve(vendorRequests);

    Promise.allSettled([prom1, prom2, prom3]).then((results) => {
      results[0].status === "fulfilled"
        ? setUpComing({
            results: results[0].value,
            error: false,
          })
        : setUpComing({ results: results[0].value, error: true });

      results[1].status === "fulfilled"
        ? setRecent({
            results: results[1].value,
            error: false,
          })
        : setRecent({
            results: results[1].reason,
            error: true,
          });

      results[2].status === "fulfilled"
        ? setVendor({
            results: results[2].value,
            error: false,
          })
        : setVendor({
            results: results[2].value,
            error: true,
          });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 md:px-28 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Event Organizer Dashboard 📋
              </h1>
              <p className="text-gray-600">
                Manage your events and grow your business
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/organizer/vendors">
                  <Users className="w-4 h-4 mr-2" />
                  Find Vendors
                </Link>
              </Button>
              <Button className="bg-purple-500 hover:bg-purple-600" asChild>
                <Link href="/organizer/events/create">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className=" text-sm">Active Events</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                  <Calendar className="w-8 h-8 text-blue-600 " />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">This Month Revenue</p>
                    <p className="text-2xl font-bold">$45K</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className=" text-sm">New Bookings</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">Client Rating</p>
                    <p className="text-2xl font-bold">4.9★</p>
                  </div>
                  <Star className="w-8 h-8  text-rose-600" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Events */}

            <UpcomingEventSection
              upcomingEvents={upComing}
              getStatusColor={getStatusColor}
            />

            {/* Recent Bookings */}

            <RecentBookingSection
              recentBookings={recent}
              getStatusColor={getStatusColor}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Vendor Requests */}
            <VendorSection
              vendorRequests={vendor}
              getStatusColor={getStatusColor}
            />
            {/* Quick Actions */}
            <QuickActionsSection />

            {/* Performance Metrics */}
            <PerformanceSection />

            {/* Notifications */}
            <NotificationsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
