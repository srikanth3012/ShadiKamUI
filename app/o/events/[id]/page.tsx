"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Heart,
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  AlertTriangle,
  MessageSquare,
  Phone,
  Mail,
  Star,
  FileText,
  Camera,
  Music,
  Utensils,
  Flower,
  Car,
  Gift,
  Settings,
  Download,
  Share,
  Bell,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

// Mock event data
const eventData = {
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
  description: "Elegant outdoor ceremony with indoor reception featuring garden theme",
  image: "/placeholder.svg?height=300&width=600",
  createdAt: "2024-03-15",
  timeline: "6 months",
  priority: "high",
  theme: "Garden Romance",
  colors: ["Rose Gold", "Blush Pink", "Sage Green"],
}

// Mock tasks data
const tasks = [
  {
    id: "task-001",
    title: "Book wedding venue",
    description: "Secure the Grand Ballroom Hotel for the ceremony and reception",
    category: "Venue",
    priority: "high",
    status: "completed",
    dueDate: "2024-04-01",
    assignedTo: "Sarah",
    completedDate: "2024-03-20",
    notes: "Venue booked with 20% deposit paid",
  },
  {
    id: "task-002",
    title: "Hire wedding photographer",
    description: "Find and book a professional wedding photographer",
    category: "Photography",
    priority: "high",
    status: "in-progress",
    dueDate: "2024-05-15",
    assignedTo: "Michael",
    notes: "Shortlisted 3 photographers, need to make final decision",
  },
  {
    id: "task-003",
    title: "Send save the dates",
    description: "Design and send save the date cards to all guests",
    category: "Invitations",
    priority: "medium",
    status: "pending",
    dueDate: "2024-05-01",
    assignedTo: "Sarah",
    notes: "Design approved, waiting for printing",
  },
  {
    id: "task-004",
    title: "Book catering service",
    description: "Select and book catering for 200 guests",
    category: "Catering",
    priority: "high",
    status: "pending",
    dueDate: "2024-06-01",
    assignedTo: "Both",
    notes: "Tasting scheduled for next week",
  },
  {
    id: "task-005",
    title: "Choose wedding flowers",
    description: "Select floral arrangements for ceremony and reception",
    category: "Flowers",
    priority: "medium",
    status: "pending",
    dueDate: "2024-06-15",
    assignedTo: "Sarah",
    notes: "Meeting with florist scheduled",
  },
]

// Mock vendors data
const vendors = [
  {
    id: "vendor-001",
    name: "Moments Studio",
    category: "Photography",
    contact: "john@momentsstudio.com",
    phone: "+1 (555) 123-4567",
    status: "booked",
    cost: 3500,
    rating: 5.0,
    notes: "Engagement shoot included",
  },
  {
    id: "vendor-002",
    name: "Royal Caterers",
    category: "Catering",
    contact: "info@royalcaterers.com",
    phone: "+1 (555) 987-6543",
    status: "quoted",
    cost: 15000,
    rating: 4.8,
    notes: "Includes appetizers, main course, and dessert",
  },
  {
    id: "vendor-003",
    name: "Bloom Florists",
    category: "Flowers",
    contact: "hello@bloomflorists.com",
    phone: "+1 (555) 456-7890",
    status: "contacted",
    cost: 2500,
    rating: 4.6,
    notes: "Specializes in garden-style arrangements",
  },
]

// Mock timeline data
const timelineEvents = [
  {
    id: "timeline-001",
    title: "Venue Booked",
    description: "Grand Ballroom Hotel confirmed for August 15th",
    date: "2024-03-20",
    type: "milestone",
    status: "completed",
  },
  {
    id: "timeline-002",
    title: "Save the Dates Due",
    description: "Send save the date cards to all guests",
    date: "2024-05-01",
    type: "deadline",
    status: "upcoming",
  },
  {
    id: "timeline-003",
    title: "Final Guest Count",
    description: "Confirm final number of guests with venue",
    date: "2024-07-15",
    type: "deadline",
    status: "upcoming",
  },
  {
    id: "timeline-004",
    title: "Wedding Day",
    description: "The big day arrives!",
    date: "2024-08-15",
    type: "event",
    status: "upcoming",
  },
]

const taskCategories = [
  { id: "venue", name: "Venue", icon: MapPin, color: "bg-blue-100 text-blue-800" },
  { id: "photography", name: "Photography", icon: Camera, color: "bg-purple-100 text-purple-800" },
  { id: "catering", name: "Catering", icon: Utensils, color: "bg-green-100 text-green-800" },
  { id: "flowers", name: "Flowers", icon: Flower, color: "bg-pink-100 text-pink-800" },
  { id: "music", name: "Music", icon: Music, color: "bg-yellow-100 text-yellow-800" },
  { id: "transport", name: "Transport", icon: Car, color: "bg-indigo-100 text-indigo-800" },
  { id: "invitations", name: "Invitations", icon: FileText, color: "bg-gray-100 text-gray-800" },
  { id: "gifts", name: "Gifts", icon: Gift, color: "bg-red-100 text-red-800" },
]

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [showTaskDialog, setShowTaskDialog] = useState(false)
  const [showVendorDialog, setShowVendorDialog] = useState(false)
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    category: "",
    priority: "medium",
    dueDate: "",
    assignedTo: "",
  })
  const [newVendor, setNewVendor] = useState({
    name: "",
    category: "",
    contact: "",
    phone: "",
    cost: "",
    notes: "",
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "overdue":
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

  const getVendorStatusColor = (status: string) => {
    switch (status) {
      case "booked":
        return "bg-green-100 text-green-800"
      case "quoted":
        return "bg-blue-100 text-blue-800"
      case "contacted":
        return "bg-yellow-100 text-yellow-800"
      case "declined":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleCreateTask = () => {
    console.log("Creating task:", newTask)
    setShowTaskDialog(false)
    setNewTask({
      title: "",
      description: "",
      category: "",
      priority: "medium",
      dueDate: "",
      assignedTo: "",
    })
  }

  const handleAddVendor = () => {
    console.log("Adding vendor:", newVendor)
    setShowVendorDialog(false)
    setNewVendor({
      name: "",
      category: "",
      contact: "",
      phone: "",
      cost: "",
      notes: "",
    })
  }

  const completedTasks = tasks.filter((task) => task.status === "completed").length
  const totalTasks = tasks.length
  const progressPercentage = (completedTasks / totalTasks) * 100

  const bookedVendors = vendors.filter((vendor) => vendor.status === "booked").length
  const totalVendorCost = vendors
    .filter((vendor) => vendor.status === "booked")
    .reduce((sum, vendor) => sum + vendor.cost, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/events" className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <Heart className="w-8 h-8 text-rose-500" />
            <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      {/* Event Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-64 h-48 bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg overflow-hidden">
                <img
                  src={eventData.image || "/placeholder.svg"}
                  alt={eventData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{eventData.name}</h1>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-rose-100 text-rose-800">{eventData.type}</Badge>
                      <Badge className={getStatusColor(eventData.status)}>
                        {eventData.status.charAt(0).toUpperCase() + eventData.status.slice(1)}
                      </Badge>
                      <Badge variant="outline">{eventData.theme}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{eventData.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-medium">{new Date(eventData.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Venue</p>
                      <p className="font-medium">{eventData.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Guests</p>
                      <p className="font-medium">{eventData.guestCount}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Budget</p>
                      <p className="font-medium">${eventData.budget.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Progress Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Overall Progress</span>
                        <span className="text-sm font-medium">{Math.round(progressPercentage)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-rose-500 h-2 rounded-full" style={{ width: `${progressPercentage}%` }} />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Tasks</span>
                        <span className="text-sm font-medium">
                          {completedTasks}/{totalTasks}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Vendors</span>
                        <span className="text-sm font-medium">
                          {bookedVendors}/{vendors.length}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Spent</span>
                        <span className="text-sm font-medium">${eventData.spent.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Remaining</span>
                        <span className="text-sm font-medium text-green-600">
                          ${(eventData.budget - eventData.spent).toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="budget">Budget</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Recent Tasks */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Recent Tasks</CardTitle>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#tasks" onClick={() => setActiveTab("tasks")}>
                            View All
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {tasks.slice(0, 4).map((task) => (
                          <div key={task.id} className={`border-l-4 pl-4 py-2 ${getPriorityColor(task.priority)}`}>
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium">{task.title}</h4>
                                <p className="text-sm text-gray-600">{task.description}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge variant="outline" className="text-xs">
                                    {task.category}
                                  </Badge>
                                  <span className="text-xs text-gray-500">
                                    Due: {new Date(task.dueDate).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                              <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Vendor Status */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Vendor Status</CardTitle>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="#vendors" onClick={() => setActiveTab("vendors")}>
                            View All
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {vendors.map((vendor) => (
                          <div key={vendor.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium">{vendor.name.charAt(0)}</span>
                              </div>
                              <div>
                                <h4 className="font-medium">{vendor.name}</h4>
                                <p className="text-sm text-gray-600">{vendor.category}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className={getVendorStatusColor(vendor.status)}>{vendor.status}</Badge>
                              <p className="text-sm text-gray-600 mt-1">${vendor.cost.toLocaleString()}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Dialog open={showTaskDialog} onOpenChange={setShowTaskDialog}>
                        <DialogTrigger asChild>
                          <Button className="w-full justify-start" variant="outline">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Task
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Create New Task</DialogTitle>
                            <DialogDescription>Add a new task to your event planning checklist</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="taskTitle">Task Title</Label>
                              <Input
                                id="taskTitle"
                                placeholder="e.g., Book wedding photographer"
                                value={newTask.title}
                                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label htmlFor="taskDescription">Description</Label>
                              <Textarea
                                id="taskDescription"
                                placeholder="Describe the task details..."
                                value={newTask.description}
                                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                                rows={3}
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="taskCategory">Category</Label>
                                <Select
                                  value={newTask.category}
                                  onValueChange={(value) => setNewTask({ ...newTask, category: value })}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {taskCategories.map((category) => (
                                      <SelectItem key={category.id} value={category.id}>
                                        {category.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label htmlFor="taskPriority">Priority</Label>
                                <Select
                                  value={newTask.priority}
                                  onValueChange={(value) => setNewTask({ ...newTask, priority: value })}
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="taskDueDate">Due Date</Label>
                                <Input
                                  id="taskDueDate"
                                  type="date"
                                  value={newTask.dueDate}
                                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                                />
                              </div>
                              <div>
                                <Label htmlFor="taskAssignedTo">Assigned To</Label>
                                <Input
                                  id="taskAssignedTo"
                                  placeholder="e.g., Sarah"
                                  value={newTask.assignedTo}
                                  onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                                />
                              </div>
                            </div>
                            <div className="flex justify-end gap-3">
                              <Button variant="outline" onClick={() => setShowTaskDialog(false)}>
                                Cancel
                              </Button>
                              <Button onClick={handleCreateTask}>Create Task</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Dialog open={showVendorDialog} onOpenChange={setShowVendorDialog}>
                        <DialogTrigger asChild>
                          <Button className="w-full justify-start" variant="outline">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Vendor
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add New Vendor</DialogTitle>
                            <DialogDescription>Add a vendor to your event planning team</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="vendorName">Vendor Name</Label>
                              <Input
                                id="vendorName"
                                placeholder="e.g., Moments Studio"
                                value={newVendor.name}
                                onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label htmlFor="vendorCategory">Category</Label>
                              <Select
                                value={newVendor.category}
                                onValueChange={(value) => setNewVendor({ ...newVendor, category: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="photography">Photography</SelectItem>
                                  <SelectItem value="catering">Catering</SelectItem>
                                  <SelectItem value="flowers">Flowers</SelectItem>
                                  <SelectItem value="music">Music</SelectItem>
                                  <SelectItem value="venue">Venue</SelectItem>
                                  <SelectItem value="transport">Transport</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="vendorContact">Email</Label>
                                <Input
                                  id="vendorContact"
                                  type="email"
                                  placeholder="contact@vendor.com"
                                  value={newVendor.contact}
                                  onChange={(e) => setNewVendor({ ...newVendor, contact: e.target.value })}
                                />
                              </div>
                              <div>
                                <Label htmlFor="vendorPhone">Phone</Label>
                                <Input
                                  id="vendorPhone"
                                  type="tel"
                                  placeholder="+1 (555) 123-4567"
                                  value={newVendor.phone}
                                  onChange={(e) => setNewVendor({ ...newVendor, phone: e.target.value })}
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="vendorCost">Estimated Cost ($)</Label>
                              <Input
                                id="vendorCost"
                                type="number"
                                placeholder="2500"
                                value={newVendor.cost}
                                onChange={(e) => setNewVendor({ ...newVendor, cost: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label htmlFor="vendorNotes">Notes</Label>
                              <Textarea
                                id="vendorNotes"
                                placeholder="Additional notes about this vendor..."
                                value={newVendor.notes}
                                onChange={(e) => setNewVendor({ ...newVendor, notes: e.target.value })}
                                rows={3}
                              />
                            </div>
                            <div className="flex justify-end gap-3">
                              <Button variant="outline" onClick={() => setShowVendorDialog(false)}>
                                Cancel
                              </Button>
                              <Button onClick={handleAddVendor}>Add Vendor</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button className="w-full justify-start" variant="outline" asChild>
                        <Link href="/booking">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Services
                        </Link>
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message Team
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Event Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-sm text-gray-600">Theme</Label>
                        <p className="font-medium">{eventData.theme}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600">Color Palette</Label>
                        <div className="flex gap-2 mt-1">
                          {eventData.colors.map((color, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {color}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600">Timeline</Label>
                        <p className="font-medium">{eventData.timeline}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600">Priority</Label>
                        <Badge
                          className={
                            eventData.priority === "high" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {eventData.priority}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Tasks Tab */}
            <TabsContent value="tasks" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Tasks</h2>
                  <p className="text-gray-600">Manage all your event planning tasks</p>
                </div>
                <Button onClick={() => setShowTaskDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button>
              </div>

              {/* Task Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {taskCategories.map((category) => {
                  const categoryTasks = tasks.filter((task) => task.category.toLowerCase() === category.id)
                  const completedCategoryTasks = categoryTasks.filter((task) => task.status === "completed").length

                  return (
                    <Card key={category.id} className="text-center">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-gray-100">
                          <category.icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <h3 className="font-medium text-sm">{category.name}</h3>
                        <p className="text-xs text-gray-600">
                          {completedCategoryTasks}/{categoryTasks.length}
                        </p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Tasks List */}
              <div className="space-y-4">
                {tasks.map((task) => (
                  <Card key={task.id} className={`border-l-4 ${getPriorityColor(task.priority)}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <Checkbox checked={task.status === "completed"} className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3
                                className={`font-semibold ${task.status === "completed" ? "line-through text-gray-500" : ""}`}
                              >
                                {task.title}
                              </h3>
                              <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                              <Badge variant="outline" className="text-xs">
                                {task.category}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-3">{task.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                Due: {new Date(task.dueDate).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {task.assignedTo}
                              </div>
                              {task.priority === "high" && (
                                <div className="flex items-center gap-1 text-red-600">
                                  <AlertTriangle className="w-4 h-4" />
                                  High Priority
                                </div>
                              )}
                            </div>
                            {task.notes && (
                              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-600">{task.notes}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Vendors Tab */}
            <TabsContent value="vendors" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Vendors</h2>
                  <p className="text-gray-600">Manage your event vendors and service providers</p>
                </div>
                <Button onClick={() => setShowVendorDialog(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Vendor
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vendors.map((vendor) => (
                  <Card key={vendor.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{vendor.name}</h3>
                            <p className="text-sm text-gray-600">{vendor.category}</p>
                          </div>
                        </div>
                        <Badge className={getVendorStatusColor(vendor.status)}>{vendor.status}</Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span>{vendor.contact}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span>{vendor.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="w-4 h-4 text-gray-400" />
                          <span>${vendor.cost.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{vendor.rating} rating</span>
                        </div>
                      </div>

                      {vendor.notes && (
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600">{vendor.notes}</p>
                        </div>
                      )}

                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Timeline Tab */}
            <TabsContent value="timeline" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Timeline</h2>
                  <p className="text-gray-600">Track important milestones and deadlines</p>
                </div>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Milestone
                </Button>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-6">
                  {timelineEvents.map((event, index) => (
                    <div key={event.id} className="relative flex items-start gap-6">
                      <div
                        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                          event.status === "completed"
                            ? "bg-green-500"
                            : event.status === "upcoming"
                              ? "bg-blue-500"
                              : "bg-gray-300"
                        }`}
                      >
                        {event.status === "completed" ? (
                          <CheckCircle className="w-4 h-4 text-white" />
                        ) : event.type === "event" ? (
                          <Calendar className="w-4 h-4 text-white" />
                        ) : (
                          <Clock className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <Card className="flex-1">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold">{event.title}</h3>
                              <p className="text-gray-600 text-sm">{event.description}</p>
                              <p className="text-sm text-gray-500 mt-1">{new Date(event.date).toLocaleDateString()}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {event.type}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Budget Tab */}
            <TabsContent value="budget" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Budget</h2>
                  <p className="text-gray-600">Track your event expenses and budget allocation</p>
                </div>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Expense
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Budget</p>
                        <p className="text-2xl font-bold text-gray-900">${eventData.budget.toLocaleString()}</p>
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
                        <p className="text-2xl font-bold text-gray-900">${eventData.spent.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">
                          {Math.round((eventData.spent / eventData.budget) * 100)}% of budget
                        </p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Remaining</p>
                        <p className="text-2xl font-bold text-green-600">
                          ${(eventData.budget - eventData.spent).toLocaleString()}
                        </p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Budget Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Budget Breakdown by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {vendors.map((vendor) => (
                      <div key={vendor.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium">{vendor.category.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-medium">{vendor.category}</h4>
                            <p className="text-sm text-gray-600">{vendor.name}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${vendor.cost.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">
                            {Math.round((vendor.cost / eventData.budget) * 100)}% of budget
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Budget Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Budget Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Budget Utilization</span>
                      <span className="font-medium">{Math.round((eventData.spent / eventData.budget) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all"
                        style={{ width: `${(eventData.spent / eventData.budget) * 100}%` }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Allocated</p>
                        <p className="font-medium">${totalVendorCost.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Available</p>
                        <p className="font-medium text-green-600">
                          ${(eventData.budget - totalVendorCost).toLocaleString()}
                        </p>
                      </div>
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
