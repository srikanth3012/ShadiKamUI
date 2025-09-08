import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export const VendorHeroSection = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  setShowFilters,
  categories,
}) => (
  <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Perfect Wedding Vendors
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-100">
          Connect with verified professionals who'll make your special day
          unforgettable
        </p>

        {/* Search Bar */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
              <Input
                placeholder="Search vendors, services, or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-48 bg-white/20 border-white/30 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="secondary"
              onClick={() => setShowFilters((prev) => !prev)}
              className="bg-white text-purple-600 hover:bg-white/90"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-purple-200">Verified Vendors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">10K+</div>
            <div className="text-purple-200">Happy Couples</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">4.8★</div>
            <div className="text-purple-200">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-purple-200">Support</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
