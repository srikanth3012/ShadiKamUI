"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BasicTab from "@/components/Vendor/profile/basicTab/basicTab";
import PortfolioTab from "@/components/Vendor/profile/portfolioTab";
import ServicesTab from "@/components/Vendor/profile/servicesTab";
import BusinessTab from "@/components/Vendor/profile/businessTab";
import MediaTab from "@/components/Vendor/profile/mediaTab";
import ReviewsTab from "@/components/Vendor/profile/reviewsTab";

// Mock vendor data
import vendorProfile from "@/lib/vendor/vendorProfile.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye } from "lucide-react";

export default function VendorProfilePage() {
  const [activeTab, setActiveTab] = useState("basic");
  const [profile, setProfile] = useState(vendorProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    console.log("Saving profile:", profile);
    setIsEditing(false);
    // Here you would save to your backend
  };

  const handleImageUpload = (type) => {
    console.log(`Uploading ${type} image`);
    // Here you would handle image upload
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8">
              {" "}
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Profile Management
              </h1>
              <p className="text-gray-600">
                Manage your business profile, portfolio, and services
              </p>
            </div>
            <div className="flex pb-4 md:pb-0 items-center gap-3">
              <Button variant="outline" asChild>
                <Link href={`/v/${profile.id}/preview`}>
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Profile
                </Link>
              </Button>
              <Button onClick={handleSave} disabled={!isEditing}>
                Save Changes
              </Button>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            {/* Basic Information Tab */}
            <TabsContent value="basic" className="space-y-6">
              <BasicTab
                profile={profile}
                setProfile={setProfile}
                setIsEditing={setIsEditing}
                handleImageUpload={handleImageUpload}
              />
            </TabsContent>

            {/* Portfolio Tab */}
            <TabsContent value="portfolio" className="space-y-6">
              <PortfolioTab />
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-6">
              <ServicesTab />
            </TabsContent>

            {/* Business Settings Tab */}
            <TabsContent value="business" className="space-y-6">
              <BusinessTab
                profile={profile}
                setProfile={setProfile}
                setIsEditing={setIsEditing}
              />
            </TabsContent>

            {/* Media Library Tab */}
            <TabsContent value="media" className="space-y-6">
              <MediaTab />
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-6">
              <ReviewsTab profile={profile} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

//  <header className="border-b bg-white">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <Link href="/vendor/dashboard" className="flex items-center gap-2">
//             <ArrowLeft className="w-5 h-5" />
//             <Heart className="w-8 h-8 text-rose-500" />
//             <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
//             <Badge variant="secondary" className="ml-2">
//               Vendor
//             </Badge>
//           </Link>
//           <div className="flex items-center gap-3">
//             <Button variant="outline" asChild>
//               <Link href={`/v/${profile.id}/preview`}>
//                 <Eye className="w-4 h-4 mr-2" />
//                 Preview Profile
//               </Link>
//             </Button>
//             <Button onClick={handleSave} disabled={!isEditing}>
//               Save Changes
//             </Button>
//           </div>
//         </div>
//       </header>
