import { Star, CheckCircle, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import "./animation.css";
import { useRouter } from "next/navigation";

export const VendorCard = ({ vendor, setSelectedVendor }) => {
  const router = useRouter();
  const handleSelectedVendor = () => {
    setSelectedVendor(vendor);
    router.push("/v/1/preview");
  };
  return (
    <Card
      onClick={handleSelectedVendor}
      className="cardReveal cursor-pointer  hover:shadow-xl transition-shadow duration-200"
    >
      <CardHeader className="p-0 relative">
        <Image
          src={vendor.image}
          alt={vendor.name}
          width={400}
          height={300}
          className="rounded-t-lg w-full h-56 object-cover"
        />
        {vendor.featured && (
          <Badge className="absolute top-3 left-3 bg-yellow-500 text-white">
            Featured
          </Badge>
        )}
        {vendor.verified && (
          <CheckCircle className="absolute top-3 right-3 text-green-500 bg-white rounded-full p-1 w-6 h-6" />
        )}
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-lg font-semibold text-gray-900">
            {vendor.name}
          </CardTitle>
          <div className="flex items-center text-yellow-500 text-sm">
            <Star className="w-4 h-4 mr-1" />
            {vendor.rating}{" "}
            <span className="ml-1 text-gray-500">({vendor.reviewCount})</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-2">{vendor.category}</div>

        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {vendor.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {vendor.responseTime}
          </span>
        </div>

        <div className="text-sm font-medium text-gray-800">
          ₹{vendor.startingPrice.toLocaleString()} starting
        </div>
      </CardContent>
    </Card>
  );
};
