"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Heart,
  Plus,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

// Mock events data
const events = [
  {
    id: "evt-001",
    name: "Sarah & Michael's Wedding",
    type: "Wedding",
    date: "2024-08-15",
    venue: "Grand Ballroom Hotel",
    location: "Los Angeles, CA",
    guestCount: 200,
    budget: 75000,
    spent: 45000,
    status: "planning",
    progress: 65,
    tasksTotal: 24,
    tasksCompleted: 16,
    vendorsBooked: 8,
    vendorsTotal: 10,
    priority: "high",
    image: "/placeholder.svg?height=200&width=300",
    createdAt: "2024-03-15",
    weddingDate: "2024-08-15",
    description: "Elegant outdoor ceremony with indoor reception",
  },
  {
    id: "evt-002",
    name: "Priya & James Anniversary",
    type: "Anniversary",
    date: "2024-07-20",
    venue: "Beachside Resort",
    location: "Malibu, CA",
    guestCount: 50,
    budget: 25000,
    spent: 18000,
    status: "confirmed",
    progress: 85,
    tasksTotal: 15,
    tasksCompleted: 13,
    vendorsBooked: 5,
    vendorsTotal: 6,
    priority: "medium",
    image: "/placeholder.svg?height=200&width=300",
    createdAt: "2024-02-10",
    weddingDate: "2024-07-20",
    description: "Intimate beach celebration for 25th anniversary",
  },
  {
    id: "evt-003",
    name: "Corporate Gala 2024",
    type: "Corporate",
    date: "2024-09-30",
    venue: "Convention Center",
    location: "Beverly Hills, CA",
    guestCount: 500,
    budget: 150000,
    spent: 25000,
    status: "planning",
    progress: 25,
    tasksTotal: 35,
    tasksCompleted: 9,
    vendorsBooked: 3,
    vendorsTotal: 12,
    priority: "high",
    image: "/placeholder.svg?height=200&width=300",
    createdAt: "2024-04-01",
    weddingDate: "2024-09-30",
    description: "Annual corporate gala with awards ceremony",
  },
]

const eventTypes = [
  "Wedding",
  "Anniversary",
  "Birthday",
  "Corporate",
  "Engagement",
  "Baby Shower",
  "Graduation",
  "Holiday Party",
  "Other",
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [newEvent, setNewEvent] = useState({
    name: "",
    type: "",
    date: "",
    venue: "",
    location: "",
    guestCount: "",
    budget: "",
    description: "",
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planning":
        return "bg-blue-100 text-blue-800"
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-purple-100 text-purple-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
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

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || event.status === statusFilter
    const matchesType = typeFilter === "all" || event.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  const handleCreateEvent = () => {
    console.log("Creating event:", newEvent)
    setShowCreateDialog(false)
    setNewEvent({
      name: "",
      type: "",
      date: "",
      venue: "",
      location: "",
      guestCount: "",
      budget: "",
      description: "",
    })
  }

  const totalBudget = events.reduce((sum, event) => sum + event.budget, 0)
  const totalSpent = events.reduce((sum, event) => sum + event.spent, 0)
  const avgProgress = events.reduce((sum, event) => sum + event.progress, 0) / events.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-rose-500" />
            <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
            <Badge variant="secondary" className="ml-2">
              Event Manager
            </Badge>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/events" className="text-rose-500 font-medium">
              My Events
            </Link>
            <Link href="/bookings" className="text-gray-600 hover:text-rose-500 transition-colors">
              Bookings
            </Link>
            <Link href="/vendors" className="text-gray-600 hover:text-rose-500 transition-colors">
              Vendors
            </Link>
          </nav>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button className="bg-rose-500 hover:bg-rose-600">
                <Plus className="w-4 h-4 mr-2" />
                Create Event
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Event</DialogTitle>
                <DialogDescription>Start planning your special event by providing some basic details</DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventName">Event Name</Label>
                    <Input
                      id="eventName"
                      placeholder="e.g., Sarah & Michael's Wedding"
                      value={newEvent.name}
                      onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select value={newEvent.type} onValueChange={(value) => setNewEvent({ ...newEvent, type: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="guestCount">Expected Guests</Label>
                    <Input
                      id="guestCount"
                      type="number"
                      placeholder="150"
                      value={newEvent.guestCount}
                      onChange={(e) => setNewEvent({ ...newEvent, guestCount: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="venue">Venue</Label>
                    <Input
                      id="venue"
                      placeholder="Grand Ballroom Hotel"
                      value={newEvent.venue}
                      onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="Los Angeles, CA"
                      value={newEvent.location}
                      onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Budget ($)</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="50000"
                    value={newEvent.budget}
                    onChange={(e) => setNewEvent({ ...newEvent, budget: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Event Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your event vision, theme, or special requirements..."
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreateEvent} className="bg-rose-500 hover:bg-rose-600">
                    Create Event
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Manager</h1>
            <p className="text-gray-600">Plan, organize, and manage all your events in one place</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Events</p>
                    <p className="text-2xl font-bold text-gray-900">{events.length}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Budget</p>
                    <p className="text-2xl font-bold text-gray-900">${totalBudget.toLocaleString()}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Spent</p>
                    <p className="text-2xl font-bold text-gray-900">${totalSpent.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{Math.round((totalSpent / totalBudget) * 100)}% of budget</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Progress</p>
                    <p className="text-2xl font-bold text-gray-900">{Math.round(avgProgress)}%</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-rose-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search events by name, venue, or location..."
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
                    <SelectItem value="planning">Planning</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Events Grid */}
          {filteredEvents.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || statusFilter !== "all" || typeFilter !== "all"
                    ? "Try adjusting your search or filter criteria."
                    : "Create your first event to get started with planning."}
                </p>
                <Button className="bg-rose-500 hover:bg-rose-600" onClick={() => setShowCreateDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Event
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  className={`hover:shadow-lg transition-all border-l-4 ${getPriorityColor(event.priority)}`}
                >
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-rose-100 to-pink-100 rounded-t-lg overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge className={`absolute top-3 left-3 ${getStatusColor(event.status)}`}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </Badge>
                    <div className="absolute top-3 right-3">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-1">{event.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {event.type}
                          </Badge>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {/* Event Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="line-clamp-1">
                            {event.venue}, {event.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{event.guestCount} guests</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{event.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-rose-500 h-2 rounded-full transition-all"
                            style={{ width: `${event.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Tasks</p>
                          <p className="font-medium">
                            {event.tasksCompleted}/{event.tasksTotal}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Budget</p>
                          <p className="font-medium text-green-600">
                            ${event.spent.toLocaleString()}/${event.budget.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1 bg-rose-500 hover:bg-rose-600" asChild>
                          <Link href={`/events/${event.id}`}>
                            <Eye className="w-4 h-4 mr-1" />
                            Manage
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" className="px-3">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="px-3 text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
