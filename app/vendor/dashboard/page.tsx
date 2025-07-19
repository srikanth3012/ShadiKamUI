"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Star,
  CheckCircle,
  XCircle,
  AlertCircle,
  Heart,
  Bell,
  Settings,
} from "lucide-react"
import Link from "next/link"

// Mock vendor data
const vendorData = {
  name: "Elegant Events",
  category: "Wedding Planning",
  rating: 4.9,
  totalReviews: 127,
  avatar: "/placeholder.svg?height=40&width=40",
  joinDate: "2022-03-15",
  completedBookings: 89,
  totalEarnings: 125000,
}

// Mock booking data
const recentBookings = [
  {
    id: "WED-ABC123",
    status: "pending",
    clientName: "Sarah & John",
    service: "Full Wedding Planning",
    date: "2024-07-15",
    time: "2:00 PM",
    value: 5000,
    guestCount: 150,
    venue: "Downtown Convention Center",
    requestDate: "2024-06-01",
  },
  {
    id: "WED-DEF456",
    status: "confirmed",
    clientName: "Emily & Michael",
    service: "Day-of Coordination",
    date: "2024-08-20",
    time: "10:00 AM",
    value: 1500,
    guestCount: 100,
    venue: "Riverside Gardens",
    requestDate: "2024-05-28",
  },
  {
    id: "WED-GHI789",
    status: "completed",
    clientName: "Lisa & David",
    service: "Wedding Planning",
    date: "2024-06-10",
    time: "11:00 AM",
    value: 4500,
    guestCount: 200,
    venue: "Grand Ballroom Hotel",
    requestDate: "2024-04-15",
  },
]

const stats = [
  {
    title: "Total Bookings",
    value: "127",
    change: "+12%",
    icon: Calendar,
    color: "text-blue-600",
  },
  {
    title: "This Month Revenue",
    value: "$18,500",
    change: "+8%",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Pending Requests",
    value: "8",
    change: "+3",
    icon: AlertCircle,
    color: "text-yellow-600",
  },
  {
    title: "Client Rating",
    value: "4.9",
    change: "+0.1",
    icon: Star,
    color: "text-purple-600",
  },
]

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
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
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {vendorData.name}!</h1>
            <p className="text-gray-600">Here's what's happening with your business today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change} from last month</p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Bookings */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Booking Requests</CardTitle>
                      <CardDescription>Manage your latest client requests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentBookings.slice(0, 3).map((booking) => (
                          <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold">{booking.clientName}</h4>
                                <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-1">{booking.service}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(booking.date).toLocaleDateString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />${booking.value.toLocaleString()}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {booking.status === "pending" && (
                                <>
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Accept
                                  </Button>
                                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                    <XCircle className="w-4 h-4 mr-1" />
                                    Decline
                                  </Button>
                                </>
                              )}
                              {booking.status === "confirmed" && (
                                <Button size="sm" variant="outline">
                                  <MessageSquare className="w-4 h-4 mr-1" />
                                  Message
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/vendor/bookings">View All Bookings</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions & Profile */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start" variant="outline" asChild>
                        <Link href="/vendor/availability">
                          <Calendar className="w-4 h-4 mr-2" />
                          Update Availability
                        </Link>
                      </Button>
                      <Button className="w-full justify-start" variant="outline" asChild>
                        <Link href="/vendor/services">
                          <Settings className="w-4 h-4 mr-2" />
                          Manage Services
                        </Link>
                      </Button>
                      <Button className="w-full justify-start" variant="outline" asChild>
                        <Link href="/vendor/profile">
                          <Users className="w-4 h-4 mr-2" />
                          Edit Profile
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Your Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Rating</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{vendorData.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Total Reviews</span>
                          <span className="font-semibold">{vendorData.totalReviews}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Completed Jobs</span>
                          <span className="font-semibold">{vendorData.completedBookings}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Response Rate</span>
                          <span className="font-semibold text-green-600">98%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Bookings</CardTitle>
                  <CardDescription>Manage all your client bookings and requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold">{booking.clientName}</h3>
                              <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                              <span className="text-sm text-gray-500">#{booking.id}</span>
                            </div>
                            <p className="text-gray-600 mb-2">{booking.service}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(booking.date).toLocaleDateString()} at {booking.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {booking.guestCount} guests
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />${booking.value.toLocaleString()}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500 mb-1">Requested</p>
                            <p className="text-sm">{new Date(booking.requestDate).toLocaleDateString()}</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <p className="text-sm text-gray-600">
                            <strong>Venue:</strong> {booking.venue}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              Message Client
                            </Button>
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          </div>
                          <div className="flex items-center gap-2">
                            {booking.status === "pending" && (
                              <>
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  Accept
                                </Button>
                                <Button size="sm" variant="outline" className="text-red-600">
                                  Decline
                                </Button>
                              </>
                            )}
                            {booking.status === "confirmed" && (
                              <Button size="sm" variant="outline">
                                Mark Complete
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Availability Calendar</CardTitle>
                      <CardDescription>Manage your available dates and times</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Calendar Integration</h3>
                          <p className="text-gray-600 mb-4">Connect your calendar to manage availability</p>
                          <Button>Connect Calendar</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentBookings
                          .filter((b) => b.status === "confirmed")
                          .map((booking) => (
                            <div key={booking.id} className="border-l-4 border-rose-500 pl-4">
                              <h4 className="font-semibold text-sm">{booking.clientName}</h4>
                              <p className="text-sm text-gray-600">{booking.service}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(booking.date).toLocaleDateString()} at {booking.time}
                              </p>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Trends</CardTitle>
                    <CardDescription>Your earnings over the past 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Revenue chart would go here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Booking Sources</CardTitle>
                    <CardDescription>Where your clients are finding you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Direct Bookings</span>
                        <span className="font-semibold">45%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Referrals</span>
                        <span className="font-semibold">30%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Social Media</span>
                        <span className="font-semibold">15%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Search Engines</span>
                        <span className="font-semibold">10%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Key metrics for your business</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">98%</p>
                      <p className="text-sm text-gray-600">Response Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">24h</p>
                      <p className="text-sm text-gray-600">Avg Response Time</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">92%</p>
                      <p className="text-sm text-gray-600">Booking Acceptance</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">4.9</p>
                      <p className="text-sm text-gray-600">Client Satisfaction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
