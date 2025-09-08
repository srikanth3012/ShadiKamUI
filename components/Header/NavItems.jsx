"use client";
import Link from "next/link";
import React from "react";
import { CalendarPlus, Notebook, Store, Users, Phone } from "lucide-react";
import { useSelector } from "react-redux";

const NavItems = () => {
  const userRole = useSelector((store) => store.userRole.user);

  const navLinks = {
    user: [
      { href: "/", link: " Home" },
      { href: "/u/booking", link: "Book Event" },
      { href: "/u/bookings", link: "My Bookings" },
      { href: "/u/vendors", link: " Vendors" },
      { href: "/u/event-organizers", link: " Event Organizers" },
    ],
    vendor: [
      { href: "/", link: " Home" },
      { href: "/v/dashboard", link: "Dashboard" },
      { href: "/v/bookings", link: "Bookings" },
      { href: "/v/profile", link: "Profile" },
    ],
    organizer: [
      { href: "/", link: " Home" },
      { href: "/o/events", link: "Events" },
      { href: "/o/dashboard", link: "Dashboard" },
      { href: "/o/booking", link: "Bookings" },
      { href: "/o/vendors", link: "Vendors" },
      { href: "/o/event-organizers", link: "Event Organizer" },
      { href: "/o/profile", link: "Profile" },
    ],
  };

  const role = userRole ? userRole : "user";

  return (
    <>
      {navLinks[role].map((item) => (
        <Link
          key={item?.link}
          href={item?.href}
          className=" flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors font-medium"
        >
          <CalendarPlus className="md:hidden w-8 h-8" />
          {item?.link}
        </Link>
      ))}
    </>
    // <>
    //   <Link
    //     href="/u/booking"
    //     className=" flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors font-medium"
    //   >
    //     <CalendarPlus className="md:hidden w-8 h-8" />
    //     Book Event
    //   </Link>
    //   <Link
    //     href="/u/bookings"
    //     className=" flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors font-medium"
    //   >
    //     <Notebook className="md:hidden w-8 h-8" />
    //     My Bookings
    //   </Link>
    //   <Link
    //     href="/u/vendors"
    //     className=" flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors font-medium"
    //   >
    //     <Store className="md:hidden w-8 h-8" />
    //     Vendors
    //   </Link>
    //   <Link
    //     href="/u/event-organizers"
    //     className=" flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors font-medium"
    //   >
    //     <Users className="md:hidden w-8 h-8" />
    //     Event Organizers
    //   </Link>
    //   <Link
    //     href="#contact"
    //     className=" flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors font-medium"
    //   >
    //     <Phone className="md:hidden w-8 h-8" />
    //     Contact
    //   </Link>
    // </>
  );
};

export default NavItems;
