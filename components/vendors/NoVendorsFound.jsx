import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const NoVendorsFound = ({
  setSearchTerm,
  setSelectedCategory,
  setSelectedLocation,
  setPriceRange,
}) => (
  <div className="text-center py-16">
    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <Search className="w-12 h-12 text-gray-400" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
      No vendors found
    </h3>
    <p className="text-gray-600 mb-6">
      Try adjusting your search criteria or filters to find more vendors.
    </p>
    <Button
      onClick={() => {
        setSearchTerm("");
        setSelectedCategory("All");
        setSelectedLocation("All Locations");
        setPriceRange([0, 10000]);
      }}
      className="bg-gradient-to-r from-purple-600 to-pink-600"
    >
      Clear All Filters
    </Button>
  </div>
);
