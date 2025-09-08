"use client";
import { Badge, Heart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "@/components/Header/NavItems";
import SmallScreen from "@/components/Header/SmallScreen";
import "../sharedComponents/vendors/animation.css";
const Header = () => {
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Nav Items for Small Screen */}
          <div className="flex md:hidden">
            <SmallScreen />
          </div>
          <Heart className="w-8 h-8 text-rose-500" />
          <Link href="/" className="text-2xl font-bold text-gray-900">
            ShadiKam
          </Link>
          <Badge className="bg-rose-100 text-rose-700 text-xs">Premium</Badge>
        </div>
        <nav className=" hidden md:flex md:items-center md:gap-6">
          <NavItems />
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/auth"
            className="border-2 border-black py-2 px-6 rounded-md "
          >
            Sign In
          </Link>
          <Button
            className="hidden md:flex bg-rose-500 hover:bg-rose-600 py-2 px-6 rounded-md"
            onClick={() => setBtn(!btn)}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
