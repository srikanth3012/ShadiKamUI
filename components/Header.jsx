import { Badge, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-rose-500" />
          <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
          <Badge className="bg-rose-100 text-rose-700 text-xs">Premium</Badge>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/booking"
            className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
          >
            Book Event
          </Link>
          <Link
            href="/bookings"
            className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
          >
            My Bookings
          </Link>
          <Link
            href="/vendors"
            className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
          >
            Vendors
          </Link>
          <Link
            href="/event-organizers"
            className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
          >
            Event Organizers
          </Link>
          <Link
            href="#contact"
            className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline">Sign In</Button>
          <Button className="bg-rose-500 hover:bg-rose-600">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
