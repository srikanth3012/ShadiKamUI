"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Twitter,
  Award,
  Verified,
  Clock,
  DollarSign,
  Users,
  Calendar,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

// This would typically come from props or API
const vendorProfile = {
  businessName: "Elegant Events",
  tagline: "Creating Unforgettable Wedding Experiences",
  description:
    "With over 8 years of experience in wedding planning, we specialize in creating elegant, personalized celebrations that reflect each couple's unique love story. From intimate gatherings to grand celebrations, we handle every detail with precision and care.",
  category: "Wedding Planning",
  owner: "Sarah Johnson",
  email: "sarah@elegantevents.com",
  phone: "+1 (555) 123-4567",
  website: "www.elegantevents.com",
  address: {
    city: "Los Angeles",
    state: "CA",
  },
  socialMedia: {
    instagram: "@elegantevents",
    facebook: "ElegantEventsLA",
    twitter: "@elegantevents",
  },
  pricing: {
    priceRange: "$2,000 - $8,000",
  },
  experience: {
    yearsInBusiness: 8,
    eventsCompleted: 150,
  },
  rating: 4.9,
  reviewCount: 127,
  verified: true,
  profileImage: "/placeholder.svg?height=120&width=120",
  coverImage: "/placeholder.svg?height=300&width=800",
}

const services = [
  {
    name: "Full Wedding Planning",
    description: "Complete wedding planning from start to finish",
    price: "Starting at $5,000",
    duration: "12+ months",
  },
  {
    name: "Day-of Coordination",
    description: "Professional coordination on your wedding day",
    price: "Starting at $1,500",
    duration: "Wedding day",
  },
  {
    name: "Partial Planning",
    description: "Assistance with specific aspects of your wedding",
    price: "Starting at $2,500",
    duration: "3-6 months",
  },
]

const portfolioItems = [
  {
    title: "Elegant Garden Wedding",
    image: "/placeholder.svg?height=300&width=400",
    category: "Outdoor Wedding",
  },
  {
    title: "Modern City Wedding",
    image: "/placeholder.svg?height=300&width=400",
    category: "Urban Wedding",
  },
  {
    title: "Intimate Beach Ceremony",
    image: "/placeholder.svg?height=300&width=400",
    category: "Beach Wedding",
  },
]

export default function VendorPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/vendor/profile" className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <Heart className="w-8 h-8 text-rose-500" />
            <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
          </Link>
          <Badge variant="secondary">Preview Mode</Badge>
        </div>
      </header>

      {/* Cover Image */}
      <div className="h-64 bg-gradient-to-r from-rose-100 to-pink-100 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarImage src={vendorProfile.profileImage || "/placeholder.svg"} />
                  <AvatarFallback className="text-2xl">EE</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold text-gray-900">{vendorProfile.businessName}</h1>
                        {vendorProfile.verified && (
                          <Badge className="bg-blue-100 text-blue-800">
                            <Verified className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-xl text-gray-600 mb-2">{vendorProfile.tagline}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {vendorProfile.address.city}, {vendorProfile.address.state}
                        </div>
                        <Badge variant="secondary">{vendorProfile.category}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xl font-bold">{vendorProfile.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600">{vendorProfile.reviewCount} reviews</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {vendorProfile.experience.yearsInBusiness} years experience
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      {vendorProfile.experience.eventsCompleted}+ events completed
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      {vendorProfile.pricing.priceRange}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-rose-500 hover:bg-rose-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Button>
                    <Button variant="outline">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About {vendorProfile.businessName}</h2>
                  <p className="text-gray-600 leading-relaxed">{vendorProfile.description}</p>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Services & Packages</h2>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold">{service.name}</h3>
                          <span className="text-lg font-bold text-rose-600">{service.price}</span>
                        </div>
                        <p className="text-gray-600 mb-2">{service.description}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {portfolioItems.map((item, index) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Client Reviews</h2>
                  <div className="space-y-6">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold">John & Sarah</h4>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">2 weeks ago</span>
                            </div>
                            <p className="text-gray-600">
                              "Absolutely amazing service! Sarah and her team made our wedding day perfect. Every detail
                              was handled with care and professionalism. Highly recommend!"
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{vendorProfile.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{vendorProfile.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{vendorProfile.website}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-medium mb-3">Follow Us</h4>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="p-2">
                        <Instagram className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2">
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="p-2">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Response Rate</span>
                      <span className="font-semibold text-green-600">98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Response Time</span>
                      <span className="font-semibold">Within 2 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Booking Rate</span>
                      <span className="font-semibold text-blue-600">92%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Credentials */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Credentials</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Certified Wedding Planner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm">Best Wedding Planner 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Verified className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Background Verified</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
