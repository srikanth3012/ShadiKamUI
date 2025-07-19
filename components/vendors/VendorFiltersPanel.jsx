import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";

export const VendorFiltersPanel = ({
  selectedLocation,
  setSelectedLocation,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  locations,
  sortOptions,
}) => (
  <Card className="mb-8 shadow-lg">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Filter className="w-5 h-5" />
        Advanced Filters
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Location */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Location</Label>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div>
          <Label className="text-sm font-medium mb-2 block">Sort By</Label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-2 block">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
              }
              className="w-20"
            />
            <span>-</span>
            <Input
              type="number"
              placeholder="Max"
              value={priceRange[1]}
              min="0"
              step="1000"
              onChange={(e) =>
                setPriceRange([
                  priceRange[0],
                  parseInt(e.target.value) || 10000,
                ])
              }
              className="w-20"
            />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);
