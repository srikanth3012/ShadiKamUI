"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Calendar,
  Users,
  DollarSign,
  MessageSquare,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Heart,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"

// Extended mock booking data
const allBookings = [
  {
    id: "WED-ABC123",
    status: "pending",
    clientName: "Sarah & John",
    clientEmail: "sarah.johnson@email.com",
    clientPhone: "+1 (555) 123-4567",
    service: "Full Wedding Planning",
    date: "2024-07-15",
    time: "2:00 PM",
    value: 5000,
    guestCount: 150,
    venue: "Downtown Convention Center",
    requestDate: "2024-06-01",
    notes: "Looking for elegant outdoor ceremony with indoor backup option. Budget flexible for the right venue.",
    urgency: "high",
  },
  {
    id: "WED-DEF456",
    status: "confirmed",
    clientName: "Emily & Michael",
    clientEmail: "emily.chen@email.com",
    clientPhone: "+1 (555) 987-6543",
    service: "Day-of Coordination",
    date: "2024-08-20",
    time: "10:00 AM",
    value: 1500,
    guestCount: 100,
    venue: "Riverside Gardens",
    requestDate: "2024-05-28",
    notes: "Small intimate wedding. Need help with timeline and vendor coordination.",
    urgency: "medium",
  },
  {
    id: "WED-GHI789",
    status: "completed",
    clientName: "Lisa & David",
    clientEmail: "lisa.martinez@email.com",
    clientPhone: "+1 (555) 456-7890",
    service: "Wedding Planning",
    date: "2024-06-10",
    time: "11:00 AM",
    value: 4500,
    guestCount: 200,
    venue: "Grand Ballroom Hotel",
    requestDate: "2024-04-15",
    notes: "Traditional ceremony with modern reception. Multicultural celebration.",
    urgency: "low",
  },
  {
    id: "WED-JKL012",
    status: "pending",
    clientName: "Amanda & Robert",
    clientEmail: "amanda.wilson@email.com",
    clientPhone: "+1 (555) 234-5678",
    service: "Partial Planning",
    date: "2024-09-05",
    time: "3:00 PM",
    value: 2500,
    guestCount: 80,
    venue: "Beachside Resort",
    requestDate: "2024-06-10",
    notes: "Destination wedding. Need help with local vendor coordination.",
    urgency: "medium",
  },
  {
    id: "WED-MNO345",
    status: "cancelled",
    clientName: "Jessica & Mark",
    clientEmail: "jessica.brown@email.com",
    clientPhone: "+1 (555) 345-6789",
    service: "Full Wedding Planning",
    date: "2024-10-12",
    time: "4:00 PM",
    value: 6000,
    guestCount: 250,
    venue: "Historic Manor",
    requestDate: "2024-05-20",
    notes: "Postponed due to family circumstances. May reschedule for next year.",
    urgency: "low",
  },
]

export default function VendorBookingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedBooking, setSelectedBooking] = useState<any>(null)
  const [responseMessage, setResponseMessage] = useState("")

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

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "border-l-red-500"
      case "medium":
        return "border-l-yellow-500"
      case "low":
        return "border-l-green-500"
      default:
        return "border-l-gray-300"
    }
  }

  const filteredBookings = allBookings.filter((booking) => {
    const matchesSearch =
      booking.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleAcceptBooking = (bookingId: string) => {
    console.log("Accepting booking:", bookingId)
    // Here you would update the booking status in your backend
  }

  const handleDeclineBooking = (bookingId: string) => {
    console.log("Declining booking:", bookingId, "with message:", responseMessage)
    // Here you would update the booking status and send message to client
    setResponseMessage("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/vendor/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <Heart className="w-8 h-8 text-rose-500" />
            <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
            <Badge variant="secondary" className="ml-2">
              Vendor
            </Badge>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Management</h1>
              <p className="text-gray-600">Manage all your client bookings and requests</p>
            </div>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search bookings by client name, ID, or service..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Bookings List */}
          <div className="space-y-4">
            {filteredBookings.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                </CardContent>
              </Card>
            ) : (
              filteredBookings.map((booking) => (
                <Card key={booking.id} className={`border-l-4 ${getUrgencyColor(booking.urgency)}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{booking.clientName}</h3>
                          <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                          <span className="text-sm text-gray-500">#{booking.id}</span>
                          {booking.urgency === "high" && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{booking.service}</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>
                              {new Date(booking.date).toLocaleDateString()} at {booking.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span>{booking.guestCount} guests</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-gray-400" />
                            <span>${booking.value.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{booking.venue}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right text-sm text-gray-500">
                        <p>Requested</p>
                        <p>{new Date(booking.requestDate).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {booking.notes && (
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-sm mb-2">Client Notes:</h4>
                        <p className="text-sm text-gray-600">{booking.notes}</p>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {booking.clientEmail}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {booking.clientPhone}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline" onClick={() => setSelectedBooking(booking)}>
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Booking Details - #{booking.id}</DialogTitle>
                              <DialogDescription>
                                Complete information for {booking.clientName}'s booking
                              </DialogDescription>
                            </DialogHeader>
                            {selectedBooking && (
                              <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="font-semibold mb-3">Client Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <p>
                                        <strong>Names:</strong> {selectedBooking.clientName}
                                      </p>
                                      <p>
                                        <strong>Email:</strong> {selectedBooking.clientEmail}
                                      </p>
                                      <p>
                                        <strong>Phone:</strong> {selectedBooking.clientPhone}
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-3">Event Details</h4>
                                    <div className="space-y-2 text-sm">
                                      <p>
                                        <strong>Service:</strong> {selectedBooking.service}
                                      </p>
                                      <p>
                                        <strong>Date:</strong> {new Date(selectedBooking.date).toLocaleDateString()}
                                      </p>
                                      <p>
                                        <strong>Time:</strong> {selectedBooking.time}
                                      </p>
                                      <p>
                                        <strong>Venue:</strong> {selectedBooking.venue}
                                      </p>
                                      <p>
                                        <strong>Guests:</strong> {selectedBooking.guestCount}
                                      </p>
                                      <p>
                                        <strong>Value:</strong> ${selectedBooking.value.toLocaleString()}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {selectedBooking.notes && (
                                  <div>
                                    <h4 className="font-semibold mb-3">Special Requirements</h4>
                                    <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                                      {selectedBooking.notes}
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>

                        <Button size="sm" variant="outline">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                      </div>

                      <div className="flex items-center gap-2">
                        {booking.status === "pending" && (
                          <>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleAcceptBooking(booking.id)}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Accept
                            </Button>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                  <XCircle className="w-4 h-4 mr-1" />
                                  Decline
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Decline Booking</DialogTitle>
                                  <DialogDescription>
                                    Please provide a reason for declining this booking request.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <Label htmlFor="decline-reason">Reason for declining</Label>
                                    <Textarea
                                      id="decline-reason"
                                      placeholder="Please explain why you cannot take this booking..."
                                      value={responseMessage}
                                      onChange={(e) => setResponseMessage(e.target.value)}
                                      rows={4}
                                    />
                                  </div>
                                  <div className="flex justify-end gap-2">
                                    <Button variant="outline">Cancel</Button>
                                    <Button variant="destructive" onClick={() => handleDeclineBooking(booking.id)}>
                                      Send Decline
                                    </Button>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </>
                        )}

                        {booking.status === "confirmed" && (
                          <Button size="sm" variant="outline">
                            Mark Complete
                          </Button>
                        )}

                        {booking.status === "completed" && <Badge variant="secondary">Completed</Badge>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
