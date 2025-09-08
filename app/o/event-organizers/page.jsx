"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Award, Verified, Shield, ArrowRight } from "lucide-react";
import eventOrganizers from "@/lib/eventOrganizers/event_organizers.json";
import SearchAndFilterSection from "@/components/sharedComponents/event-organizers/SearchAndFilterSection";
import VendorGridSection from "@/components/sharedComponents/event-organizers/VendorGridSection";
import BookingForm from "@/components/sharedComponents/event-organizers/BookingForm";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function EventOrganizersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const router = useRouter();

  const user = useSelector((store) => store.userRole.user);

  // Get unique values for filters
  const locations = [
    ...new Set(eventOrganizers.map((vendor) => vendor.location.city)),
  ];
  const specialties = [
    ...new Set(eventOrganizers.flatMap((vendor) => vendor.specialties)),
  ];

  // Filter and sort vendors
  const filteredVendors = useMemo(() => {
    const filtered = eventOrganizers.filter((vendor) => {
      const matchesSearch =
        vendor.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesLocation =
        !locationFilter || vendor.location.city === locationFilter;

      const matchesPrice =
        !priceFilter ||
        (priceFilter === "budget" && vendor.pricing.startingPrice < 5000) ||
        (priceFilter === "mid" &&
          vendor.pricing.startingPrice >= 5000 &&
          vendor.pricing.startingPrice < 10000) ||
        (priceFilter === "luxury" && vendor.pricing.startingPrice >= 10000);

      const matchesSpecialty =
        !specialtyFilter || vendor.specialties.includes(specialtyFilter);

      return (
        matchesSearch && matchesLocation && matchesPrice && matchesSpecialty
      );
    });

    // Sort vendors
    switch (sortBy) {
      case "featured":
        return filtered.sort(
          (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        );
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "price-low":
        return filtered.sort(
          (a, b) => a.pricing.startingPrice - b.pricing.startingPrice
        );
      case "price-high":
        return filtered.sort(
          (a, b) => b.pricing.startingPrice - a.pricing.startingPrice
        );
      case "reviews":
        return filtered.sort((a, b) => b.reviewCount - a.reviewCount);
      default:
        return filtered;
    }
  }, [searchTerm, locationFilter, priceFilter, specialtyFilter, sortBy]);

  const handleContactVendor = (action, vendor) => {
    if (!user) {
      router.push("/auth");
      return;
    }
    if (action === "btn") {
      setSelectedVendor(vendor);
      setShowContactForm(true);
    } else {
      router.push(`/u/event-organizers/${vendor.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect
            <span className="text-rose-500 block">Event Organizer</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with verified event planning professionals who will bring
            your wedding vision to life. From intimate ceremonies to grand
            celebrations, find the perfect planner for your special day.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Verified className="w-4 h-4 text-blue-500" />
              <span>All Verified</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Background Checked</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-yellow-500" />
              <span>Award Winners</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filters */}
          <SearchAndFilterSection
            searchTerm={searchTerm}
            locationFilter={locationFilter}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            showFilters={showFilters}
            setLocationFilter={setLocationFilter}
            setPriceFilter={setPriceFilter}
            setSpecialtyFilter={setSpecialtyFilter}
            setShowFilters={setShowFilters}
            locations={locations}
            specialtyFilter={specialtyFilter}
            priceFilter={priceFilter}
            specialties={specialties}
          />

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Event Organizers
              </h3>
              <p className="text-gray-600">
                {filteredVendors.length}{" "}
                {filteredVendors.length === 1 ? "organizer" : "organizers"}{" "}
                found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <span>
                Showing {filteredVendors.length} of {eventOrganizers.length}{" "}
                results
              </span>
            </div>
          </div>

          {/* Vendor Grid */}
          <VendorGridSection
            filteredVendors={filteredVendors}
            handleContactVendor={handleContactVendor}
            setLocationFilter={setLocationFilter}
            setPriceFilter={setPriceFilter}
            setSpecialtyFilter={setSpecialtyFilter}
            setShowFilters={setShowFilters}
            setSearchTerm={setSearchTerm}
          />

          {/* No Results */}

          {/* Load More */}
          {filteredVendors.length > 0 && filteredVendors.length >= 10 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Vendors
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Contact Form Modal */}
      <BookingForm
        selectedVendor={selectedVendor}
        showContactForm={showContactForm}
        setShowContactForm={setShowContactForm}
      />
    </div>
  );
}

{
  /* Header */
}
{
  /* <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <Heart className="w-8 h-8 text-rose-500" />
            <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/vendors" className="text-gray-600 hover:text-rose-500 transition-colors">
              All Vendors
            </Link>
            <Link href="/event-organizers" className="text-rose-500 font-medium">
              Event Organizers
            </Link>
            <Link href="/photographers" className="text-gray-600 hover:text-rose-500 transition-colors">
              Photographers
            </Link>
            <Link href="/caterers" className="text-gray-600 hover:text-rose-500 transition-colors">
              Caterers
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-rose-500 hover:bg-rose-600">Get Started</Button>
          </div>
        </div>
      </header> */
}
