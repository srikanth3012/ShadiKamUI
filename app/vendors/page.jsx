"use client";

import { VendorHeroSection } from "@/components/vendors/VendorHeroSection";
import { VendorFiltersPanel } from "@/components/vendors/VendorFiltersPanel";
import { VendorGrid } from "@/components/vendors/VendorGrid";
import { NoVendorsFound } from "@/components/vendors/NoVendorsFound";

import { useVendorsPageLogic } from "../../hooks/useVendorLogic";

export default function VendorsPage() {
  const page = useVendorsPageLogic();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <VendorHeroSection {...page} />
      <div className="container mx-auto px-4 py-8">
        {page.showFilters && <VendorFiltersPanel {...page} />}

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {page.filteredAndSortedVendors.length} Vendors Found
            </h2>
            <p className="text-gray-600">
              {page.selectedCategory !== "All" && `${page.selectedCategory} • `}
              {page.selectedLocation !== "All Locations" &&
                `${page.selectedLocation} • `}
              Sorted by{" "}
              {page.sortOptions.find((opt) => opt.value === page.sortBy)?.label}
            </p>
          </div>
        </div>

        {page.filteredAndSortedVendors.length > 0 ? (
          <VendorGrid {...page} />
        ) : (
          <NoVendorsFound {...page} />
        )}
      </div>
    </div>
  );
}
