"use client"

import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Heart, User, Settings, LogOut, Calendar, Users, Briefcase, Menu, X } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const { user, signOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getRoleColor = (role) => {
    switch (role) {
      case "user":
        return "bg-blue-100 text-blue-700"
      case "event_organizer":
        return "bg-purple-100 text-purple-700"
      case "vendor":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getRoleLabel = (role) => {
    switch (role) {
      case "user":
        return "User"
      case "event_organizer":
        return "Event Organizer"
      case "vendor":
        return "Vendor"
      default:
        return "Guest"
    }
  }

  const getDashboardPath = (role) => {
    switch (role) {
      case "user":
        return "/user/dashboard"
      case "event_organizer":
        return "/organizer/dashboard"
      case "vendor":
        return "/vendor/dashboard"
      default:
        return "/"
    }
  }

  const getNavItems = (role) => {
    switch (role) {
      case "user":
        return [
          { href: "/user/dashboard", label: "Dashboard", icon: User },
          { href: "/user/bookings", label: "My Bookings", icon: Calendar },
          { href: "/event-organizers", label: "Find Organizers", icon: Users },
        ]
      case "event_organizer":
        return [
          { href: "/organizer/dashboard", label: "Dashboard", icon: User },
          { href: "/organizer/events", label: "My Events", icon: Calendar },
          { href: "/organizer/vendors", label: "Find Vendors", icon: Briefcase },
        ]
      case "vendor":
        return [
          { href: "/vendor/dashboard", label: "Dashboard", icon: User },
          { href: "/vendor/bookings", label: "Bookings", icon: Calendar },
          { href: "/vendor/availability", label: "Availability", icon: Settings },
        ]
      default:
        return []
    }
  }

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-rose-500" />
          <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
          <Badge className="bg-rose-100 text-rose-700 text-xs">Premium</Badge>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {user &&
            getNavItems(user.role).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-rose-500 transition-colors font-medium flex items-center gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
        </nav>

        {/* User Menu / Auth Buttons */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 p-2">
                  <img
                    src={user.avatar || "/placeholder.svg?height=32&width=32"}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium">{user.name}</p>
                    <Badge className={`text-xs ${getRoleColor(user.role)}`}>{getRoleLabel(user.role)}</Badge>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    <Badge className={`text-xs w-fit ${getRoleColor(user.role)}`}>{getRoleLabel(user.role)}</Badge>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={getDashboardPath(user.role)} className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Profile Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} className="text-red-600 focus:text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                <Link href="/auth/signup">Get Started</Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {user ? (
              <>
                {getNavItems(user.role).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      signOut()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full justify-start text-red-600"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              <div className="space-y-2">
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href="/auth/signin" onClick={() => setMobileMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button className="w-full bg-rose-500 hover:bg-rose-600" asChild>
                  <Link href="/auth/signup" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
