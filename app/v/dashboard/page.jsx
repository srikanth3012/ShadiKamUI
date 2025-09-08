"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  DollarSign,
  Star,
  AlertCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

import Overview from "@/components/Vendor/dashboard/overview";
import BookingTab from "@/components/Vendor/dashboard/bookingsTab";
import CalendorTab from "@/components/Vendor/dashboard/calendorTab";
import AnalyticsTab from "@/components/Vendor/dashboard/analyticsTab";

// Mock vendor data

import dashboardData from "@/lib/vendor/dashboard.json";
const vendorData = dashboardData["vendorData"];
// Mock booking data
const recentBookings = dashboardData["recentBookings"];

const stats = dashboardData["stats"];

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAvailable, setIsAvailable] = useState(true);

  const Icons = {
    Calendar: Calendar,
    DollarSign: DollarSign,
    Star: Star,
    AlertCircle: AlertCircle,
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row  justify-between md:items-center">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {vendorData.name}!
              </h1>
              <p className="text-gray-600">
                Here's what's happening with your business today.
              </p>
            </div>

            <div className="flex flex-col pb-4 md:pb-0 md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  Available for bookings
                </span>
                <Switch
                  checked={isAvailable}
                  onCheckedChange={setIsAvailable}
                />
              </div>
              <Button className="bg-green-500 hover:bg-green-600" asChild>
                <Link href="/vendor/availability">
                  <Settings className="w-4 h-4 mr-2" />
                  Manage Availability
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const IconComponent = Icons[stat.icon];
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                        <p className="text-sm text-green-600">
                          {stat.change} from last month
                        </p>
                      </div>
                      {IconComponent && (
                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Overview
                recentBookings={recentBookings}
                getStatusColor={getStatusColor}
                vendorData={vendorData}
              />
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <BookingTab
                recentBookings={recentBookings}
                getStatusColor={getStatusColor}
              />
            </TabsContent>

            <TabsContent value="calendar" className="space-y-6">
              <CalendorTab recentBookings={recentBookings} />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <AnalyticsTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

{
  /* Header */
}
{
  /* <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-rose-500" />
            <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
            <Badge variant="secondary" className="ml-2">
              Vendor
            </Badge>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Avatar>
              <AvatarImage src={vendorData.avatar || "/placeholder.svg"} />
              <AvatarFallback>EE</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header> */
}
