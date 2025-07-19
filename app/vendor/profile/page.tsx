"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Heart,
  ArrowLeft,
  Camera,
  Upload,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Award,
  Clock,
  DollarSign,
  Users,
} from "lucide-react"
import Link from "next/link"

// Mock vendor data
const vendorProfile = {
  id: "elegant-events-123",
  businessName: "Elegant Events",
  tagline: "Creating Unforgettable Wedding Experiences",
  description:
    "With over 8 years of experience in wedding planning, we specialize in creating elegant, personalized celebrations that reflect each couple's unique love story. From intimate gatherings to grand celebrations, we handle every detail with precision and care.",
  category: "Wedding Planning",
  subcategories: ["Full Service Planning", "Day-of Coordination", "Partial Planning"],
  owner: "Sarah Johnson",
  email: "sarah@elegantevents.com",
  phone: "+1 (555) 123-4567",
  website: "www.elegantevents.com",
  address: {
    street: "123 Wedding Lane",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90210",
    country: "USA",
  },
  socialMedia: {
    instagram: "@elegantevents",
    facebook: "ElegantEventsLA",
    twitter: "@elegantevents",
  },
  businessHours: {
    monday: { open: "09:00", close: "17:00", closed: false },
    tuesday: { open: "09:00", close: "17:00", closed: false },
    wednesday: { open: "09:00", close: "17:00", closed: false },
    thursday: { open: "09:00", close: "17:00", closed: false },
    friday: { open: "09:00", close: "17:00", closed: false },
    saturday: { open: "10:00", close: "16:00", closed: false },
    sunday: { open: "", close: "", closed: true },
  },
  pricing: {
    startingPrice: 2000,
    currency: "USD",
    priceRange: "$2,000 - $8,000",
  },
  experience: {
    yearsInBusiness: 8,
    eventsCompleted: 150,
    teamSize: 5,
  },
  certifications: ["Certified Wedding Planner", "Event Management Professional"],
  awards: ["Best Wedding Planner 2023", "Excellence in Service Award"],
  rating: 4.9,
  reviewCount: 127,
  verified: true,
  profileImage: "/placeholder.svg?height=120&width=120",
  coverImage: "/placeholder.svg?height=300&width=800",
}

const services = [
  {
    id: 1,
    name: "Full Wedding Planning",
    description: "Complete wedding planning from start to finish",
    price: "Starting at $5,000",
    duration: "12+ months",
    included: ["Venue selection", "Vendor coordination", "Timeline creation", "Day-of coordination"],
  },
  {
    id: 2,
    name: "Day-of Coordination",
    description: "Professional coordination on your wedding day",
    price: "Starting at $1,500",
    duration: "Wedding day",
    included: ["Timeline management", "Vendor coordination", "Emergency handling", "Setup supervision"],
  },
  {
    id: 3,
    name: "Partial Planning",
    description: "Assistance with specific aspects of your wedding",
    price: "Starting at $2,500",
    duration: "3-6 months",
    included: ["Vendor recommendations", "Timeline assistance", "Budget guidance", "Design consultation"],
  },
]

const portfolioItems = [
  {
    id: 1,
    title: "Elegant Garden Wedding",
    description: "A romantic outdoor ceremony with 150 guests",
    images: ["/placeholder.svg?height=300&width=400"],
    category: "Outdoor Wedding",
    date: "2024-05-15",
    guestCount: 150,
    venue: "Botanical Gardens",
  },
  {
    id: 2,
    title: "Modern City Wedding",
    description: "Contemporary celebration in downtown venue",
    images: ["/placeholder.svg?height=300&width=400"],
    category: "Urban Wedding",
    date: "2024-04-20",
    guestCount: 200,
    venue: "Rooftop Terrace",
  },
  {
    id: 3,
    title: "Intimate Beach Ceremony",
    description: "Small beachside wedding with close family",
    images: ["/placeholder.svg?height=300&width=400"],
    category: "Beach Wedding",
    date: "2024-03-10",
    guestCount: 50,
    venue: "Malibu Beach",
  },
]

export default function VendorProfilePage() {
  const [activeTab, setActiveTab] = useState("basic")
  const [profile, setProfile] = useState(vendorProfile)
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    console.log("Saving profile:", profile)
    setIsEditing(false)
    // Here you would save to your backend
  }

  const handleImageUpload = (type: "profile" | "cover") => {
    console.log(`Uploading ${type} image`)
    // Here you would handle image upload
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
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link href={`/vendor/${profile.id}/preview`}>
                <Eye className="w-4 h-4 mr-2" />
                Preview Profile
              </Link>
            </Button>
            <Button onClick={handleSave} disabled={!isEditing}>
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Management</h1>
            <p className="text-gray-600">Manage your business profile, portfolio, and services</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            {/* Basic Information Tab */}
            <TabsContent value="basic" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Business Information</CardTitle>
                      <CardDescription>Update your basic business details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="businessName">Business Name</Label>
                          <Input
                            id="businessName"
                            value={profile.businessName}
                            onChange={(e) => {
                              setProfile({ ...profile, businessName: e.target.value })
                              setIsEditing(true)
                            }}
                          />
                        </div>
                        <div>
                          <Label htmlFor="owner">Owner/Contact Person</Label>
                          <Input
                            id="owner"
                            value={profile.owner}
                            onChange={(e) => {
                              setProfile({ ...profile, owner: e.target.value })
                              setIsEditing(true)
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="tagline">Business Tagline</Label>
                        <Input
                          id="tagline"
                          placeholder="A catchy tagline for your business"
                          value={profile.tagline}
                          onChange={(e) => {
                            setProfile({ ...profile, tagline: e.target.value })
                            setIsEditing(true)
                          }}
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Business Description</Label>
                        <Textarea
                          id="description"
                          rows={4}
                          placeholder="Describe your business, experience, and what makes you unique..."
                          value={profile.description}
                          onChange={(e) => {
                            setProfile({ ...profile, description: e.target.value })
                            setIsEditing(true)
                          }}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category">Primary Category</Label>
                          <Select
                            value={profile.category}
                            onValueChange={(value) => {
                              setProfile({ ...profile, category: value })
                              setIsEditing(true)
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Wedding Planning">Wedding Planning</SelectItem>
                              <SelectItem value="Photography">Photography</SelectItem>
                              <SelectItem value="Catering">Catering</SelectItem>
                              <SelectItem value="Venue">Venue</SelectItem>
                              <SelectItem value="Entertainment">Entertainment</SelectItem>
                              <SelectItem value="Floral">Floral Design</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="priceRange">Price Range</Label>
                          <Input
                            id="priceRange"
                            placeholder="e.g., $2,000 - $8,000"
                            value={profile.pricing.priceRange}
                            onChange={(e) => {
                              setProfile({
                                ...profile,
                                pricing: { ...profile.pricing, priceRange: e.target.value },
                              })
                              setIsEditing(true)
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profile.email}
                            onChange={(e) => {
                              setProfile({ ...profile, email: e.target.value })
                              setIsEditing(true)
                            }}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={profile.phone}
                            onChange={(e) => {
                              setProfile({ ...profile, phone: e.target.value })
                              setIsEditing(true)
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://your-website.com"
                          value={profile.website}
                          onChange={(e) => {
                            setProfile({ ...profile, website: e.target.value })
                            setIsEditing(true)
                          }}
                        />
                      </div>

                      <div className="space-y-4">
                        <Label>Business Address</Label>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input
                            placeholder="Street Address"
                            value={profile.address.street}
                            onChange={(e) => {
                              setProfile({
                                ...profile,
                                address: { ...profile.address, street: e.target.value },
                              })
                              setIsEditing(true)
                            }}
                          />
                          <Input
                            placeholder="City"
                            value={profile.address.city}
                            onChange={(e) => {
                              setProfile({
                                ...profile,
                                address: { ...profile.address, city: e.target.value },
                              })
                              setIsEditing(true)
                            }}
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <Input
                            placeholder="State"
                            value={profile.address.state}
                            onChange={(e) => {
                              setProfile({
                                ...profile,
                                address: { ...profile.address, state: e.target.value },
                              })
                              setIsEditing(true)
                            }}
                          />
                          <Input
                            placeholder="ZIP Code"
                            value={profile.address.zipCode}
                            onChange={(e) => {
                              setProfile({
                                ...profile,
                                address: { ...profile.address, zipCode: e.target.value },
                              })
                              setIsEditing(true)
                            }}
                          />
                          <Input
                            placeholder="Country"
                            value={profile.address.country}
                            onChange={(e) => {
                              setProfile({
                                ...profile,
                                address: { ...profile.address, country: e.target.value },
                              })
                              setIsEditing(true)
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Images</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label>Profile Picture</Label>
                        <div className="flex items-center gap-4 mt-2">
                          <Avatar className="w-20 h-20">
                            <AvatarImage src={profile.profileImage || "/placeholder.svg"} />
                            <AvatarFallback>EE</AvatarFallback>
                          </Avatar>
                          <Button variant="outline" onClick={() => handleImageUpload("profile")}>
                            <Camera className="w-4 h-4 mr-2" />
                            Change Photo
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label>Cover Image</Label>
                        <div className="mt-2">
                          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                            <Button variant="outline" onClick={() => handleImageUpload("cover")}>
                              <Upload className="w-4 h-4 mr-2" />
                              Upload Cover
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Social Media</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="instagram">Instagram</Label>
                        <div className="flex">
                          <div className="flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md">
                            <Instagram className="w-4 h-4 text-gray-500" />
                          </div>
                          <Input
                            id="instagram"
                            placeholder="@username"
                            className="rounded-l-none"
                            value={profile.socialMedia.instagram}
                            onChange={(e) => {
                              setProfile({
                                ...profile,
                                socialMedia: { ...profile.socialMedia, instagram: e.target.value },
                              })
                              setIsEditing(true)
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="facebook">Facebook</Label>
                        <div className="flex">
                          <div className="flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md">
                            <Facebook className="w-4 h-4 text-gray-500" />
                          </div>
                          <Input
                            id="facebook"
                            placeholder="Page name"
                            className="rounded-l-none"
                            value={profile.socialMedia.facebook}
                            onChange={(e) => {
                              setProfile({
                                ...profile,
                                socialMedia: { ...profile.socialMedia, facebook: e.target.value },
                              })
                              setIsEditing(true)
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="twitter">Twitter</Label>
                        <div className="flex">
                          <div className="flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md">
                            <Twitter className="w-4 h-4 text-gray-500" />
                          </div>
                          <Input
                            id="twitter"
                            placeholder="@username"
                            className="rounded-l-none"
                            value={profile.socialMedia.twitter}
                            onChange={(e) => {
                              setProfile({
                                ...profile,
                                socialMedia: { ...profile.socialMedia, twitter: e.target.value },
                              })
                              setIsEditing(true)
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Business Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Years in Business</span>
                        <span className="font-semibold">{profile.experience.yearsInBusiness}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Events Completed</span>
                        <span className="font-semibold">{profile.experience.eventsCompleted}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Team Size</span>
                        <span className="font-semibold">{profile.experience.teamSize}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Rating</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{profile.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Portfolio Tab */}
            <TabsContent value="portfolio" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Portfolio Gallery</CardTitle>
                      <CardDescription>Showcase your best work to attract clients</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="w-4 h-4 mr-2" />
                          Add Project
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Add New Portfolio Project</DialogTitle>
                          <DialogDescription>Upload photos and details of your recent work</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="projectTitle">Project Title</Label>
                            <Input id="projectTitle" placeholder="e.g., Elegant Garden Wedding" />
                          </div>
                          <div>
                            <Label htmlFor="projectDescription">Description</Label>
                            <Textarea
                              id="projectDescription"
                              placeholder="Describe the project, challenges, and results..."
                              rows={3}
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="projectCategory">Category</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="outdoor">Outdoor Wedding</SelectItem>
                                  <SelectItem value="indoor">Indoor Wedding</SelectItem>
                                  <SelectItem value="beach">Beach Wedding</SelectItem>
                                  <SelectItem value="destination">Destination Wedding</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="guestCount">Guest Count</Label>
                              <Input id="guestCount" type="number" placeholder="150" />
                            </div>
                          </div>
                          <div>
                            <Label>Project Images</Label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">Drag and drop images or click to upload</p>
                              <Button variant="outline" className="mt-2">
                                Choose Files
                              </Button>
                            </div>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Add Project</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <div className="aspect-video bg-gray-100 relative">
                          <img
                            src={item.images[0] || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 flex gap-1">
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <Badge variant="secondary">{item.category}</Badge>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {item.guestCount}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Services & Packages</CardTitle>
                      <CardDescription>Manage your service offerings and pricing</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>
                          <Plus className="w-4 h-4 mr-2" />
                          Add Service
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Add New Service</DialogTitle>
                          <DialogDescription>Create a new service package for your clients</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="serviceName">Service Name</Label>
                            <Input id="serviceName" placeholder="e.g., Full Wedding Planning" />
                          </div>
                          <div>
                            <Label htmlFor="serviceDescription">Description</Label>
                            <Textarea
                              id="serviceDescription"
                              placeholder="Describe what's included in this service..."
                              rows={3}
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="servicePrice">Starting Price</Label>
                              <Input id="servicePrice" placeholder="5000" type="number" />
                            </div>
                            <div>
                              <Label htmlFor="serviceDuration">Duration</Label>
                              <Input id="serviceDuration" placeholder="e.g., 12+ months" />
                            </div>
                          </div>
                          <div>
                            <Label>What's Included</Label>
                            <div className="space-y-2 mt-2">
                              <Input placeholder="e.g., Venue selection" />
                              <Input placeholder="e.g., Vendor coordination" />
                              <Button variant="outline" size="sm">
                                <Plus className="w-4 h-4 mr-1" />
                                Add Item
                              </Button>
                            </div>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Add Service</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <Card key={service.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                              <p className="text-gray-600 mb-3">{service.description}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  {service.price}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {service.duration}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">What's Included:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.included.map((item, index) => (
                                    <Badge key={index} variant="secondary">
                                      {item}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
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
                </CardContent>
              </Card>
            </TabsContent>

            {/* Business Settings Tab */}
            <TabsContent value="business" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                    <CardDescription>Set your availability for client consultations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(profile.businessHours).map(([day, hours]) => (
                      <div key={day} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Switch
                            checked={!hours.closed}
                            onCheckedChange={(checked) => {
                              setProfile({
                                ...profile,
                                businessHours: {
                                  ...profile.businessHours,
                                  [day]: { ...hours, closed: !checked },
                                },
                              })
                              setIsEditing(true)
                            }}
                          />
                          <span className="capitalize font-medium w-20">{day}</span>
                        </div>
                        {!hours.closed ? (
                          <div className="flex items-center gap-2">
                            <Input
                              type="time"
                              value={hours.open}
                              onChange={(e) => {
                                setProfile({
                                  ...profile,
                                  businessHours: {
                                    ...profile.businessHours,
                                    [day]: { ...hours, open: e.target.value },
                                  },
                                })
                                setIsEditing(true)
                              }}
                              className="w-24"
                            />
                            <span>to</span>
                            <Input
                              type="time"
                              value={hours.close}
                              onChange={(e) => {
                                setProfile({
                                  ...profile,
                                  businessHours: {
                                    ...profile.businessHours,
                                    [day]: { ...hours, close: e.target.value },
                                  },
                                })
                                setIsEditing(true)
                              }}
                              className="w-24"
                            />
                          </div>
                        ) : (
                          <span className="text-gray-500">Closed</span>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certifications & Awards</CardTitle>
                    <CardDescription>Showcase your professional credentials</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Certifications</Label>
                      <div className="space-y-2 mt-2">
                        {profile.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-blue-600" />
                              <span className="text-sm">{cert}</span>
                            </div>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-1" />
                          Add Certification
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label>Awards</Label>
                      <div className="space-y-2 mt-2">
                        {profile.awards.map((award, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-600" />
                              <span className="text-sm">{award}</span>
                            </div>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-1" />
                          Add Award
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Business Policies</CardTitle>
                  <CardDescription>Set your terms and conditions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="cancellationPolicy">Cancellation Policy</Label>
                    <Textarea
                      id="cancellationPolicy"
                      placeholder="Describe your cancellation and refund policy..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="paymentTerms">Payment Terms</Label>
                    <Textarea id="paymentTerms" placeholder="Describe your payment schedule and terms..." rows={3} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Media Library Tab */}
            <TabsContent value="media" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Media Library</CardTitle>
                      <CardDescription>Manage all your photos and videos</CardDescription>
                    </div>
                    <Button>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Media
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <div key={index} className="aspect-square bg-gray-100 rounded-lg relative group">
                        <img
                          src={`/placeholder.svg?height=150&width=150`}
                          alt={`Media ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <div className="flex gap-2">
                            <Button size="sm" variant="secondary">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="secondary">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Client Reviews</CardTitle>
                  <CardDescription>Manage and respond to client feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">{profile.rating}</div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= Math.floor(profile.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-600">{profile.reviewCount} reviews</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">98%</div>
                        <div className="text-sm text-gray-600">Recommend Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">24h</div>
                        <div className="text-sm text-gray-600">Avg Response Time</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[1, 2, 3].map((review) => (
                        <Card key={review}>
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="font-semibold">John & Sarah</h4>
                                  <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">2 weeks ago</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                              "Absolutely amazing service! Sarah and her team made our wedding day perfect. Every detail
                              was handled with care and professionalism. Highly recommend!"
                            </p>
                            <Button variant="outline" size="sm">
                              Reply
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
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
