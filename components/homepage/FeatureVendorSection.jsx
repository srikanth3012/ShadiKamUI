import React from "react";
import featuredVendors from "@/lib/HomePageLibs/featuredVendors.json";
import VendorCard from "@/components/homepage/vednorsCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FeatureVendorSection = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-green-100 text-green-700">
          Trusted Partners
        </Badge>
        <h3 className="text-4xl font-bold text-gray-900 mb-6">
          Featured Wedding Vendors
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Handpicked professionals who will make your wedding dreams come true.
          All vendors are verified, insured, and have proven track records.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredVendors.map((vendor, index) => (
          <VendorCard key={index} vendor={vendor} index={index} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" asChild>
          <Link href="/vendors">
            View All Vendors
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FeatureVendorSection;
