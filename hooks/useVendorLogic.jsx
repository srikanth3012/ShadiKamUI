import { useState, useMemo } from "react";

import mockVendors from "@/lib/vendors/vendors.json";

const categories = [
  "All",
  "Photography",
  "Wedding Planning",
  "Music",
  "Catering",
  "Florals",
  "Transportation",
];
const locations = [
  "All Locations",
  "Los Angeles, CA",
  "Beverly Hills, CA",
  "Santa Monica, CA",
  "Pasadena, CA",
  "Manhattan Beach, CA",
  "Hollywood, CA",
];
const sortOptions = [
  { value: "featured", label: "Featured First" },
  { value: "rating", label: "Highest Rated" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "reviews", label: "Most Reviews" },
];

const getCategoryIcon = (category) => {
  switch (category) {
    case "Photography":
      return Camera;
    case "Music":
      return Music;
    case "Catering":
      return Utensils;
    case "Florals":
      return Flower;
    case "Transportation":
      return Car;
    case "Wedding Planning":
      return Palette;
    default:
      return Heart;
  }
};

export const useVendorsPageLogic = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    eventDate: "",
    eventType: "",
    guestCount: "",
    budget: "",
    message: "",
  });

  const filteredAndSortedVendors = useMemo(() => {
    let filtered = mockVendors.filter((vendor) => {
      const matchesSearch =
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || vendor.category === selectedCategory;
      const matchesLocation =
        selectedLocation === "All Locations" ||
        vendor.location === selectedLocation;
      const matchesPrice =
        vendor.startingPrice >= priceRange[0] &&
        vendor.startingPrice <= priceRange[1];

      return (
        matchesSearch && matchesCategory && matchesLocation && matchesPrice
      );
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.startingPrice - b.startingPrice;
        case "price-high":
          return b.startingPrice - a.startingPrice;
        case "reviews":
          return b.reviewCount - a.reviewCount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedLocation, sortBy, priceRange]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", {
      vendor: selectedVendor,
      form: bookingForm,
    });
    setSelectedVendor(null);
    setBookingForm({
      eventDate: "",
      eventType: "",
      guestCount: "",
      budget: "",
      message: "",
    });
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    showFilters,
    setShowFilters,
    selectedVendor,
    setSelectedVendor,
    bookingForm,
    setBookingForm,
    handleBookingSubmit,
    filteredAndSortedVendors,
    categories,
    locations,
    sortOptions,
  };
};
