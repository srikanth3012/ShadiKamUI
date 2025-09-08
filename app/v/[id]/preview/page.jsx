"use client";

import ProfileHeader from "@/components/Vendor/preview/profileHeader";
import AboutSection from "@/components/Vendor/preview/aboutSection";
import ServiceSection from "@/components/Vendor/preview/serviceSection";
import PortfolioSection from "@/components/Vendor/preview/portfolioSection";
import ReviewSection from "@/components/Vendor/preview/reviewSection";
import ContactInfoSection from "@/components/Vendor/preview/contactInfoSection";
import QuickStatsSection from "@/components/Vendor/preview/quickStatsSection";
import CredentialsSection from "@/components/Vendor/preview/credentialsSection";

// This would typically come from props or API
import previewData from "@/lib/vendor/idPreview.json";

const vendorProfile = previewData["vendorProfile"];

const services = previewData["services"];

const portfolioItems = previewData["portfolioItems"];

export default function VendorPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="h-64 bg-gradient-to-r from-rose-100 to-pink-100 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <ProfileHeader vendorProfile={vendorProfile} />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <AboutSection vendorProfile={vendorProfile} />

              {/* Services */}
              <ServiceSection services={services} />

              {/* Portfolio */}
              <PortfolioSection portfolioItems={portfolioItems} />

              {/* Reviews */}
              <ReviewSection />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <ContactInfoSection vendorProfile={vendorProfile} />

              {/* Quick Stats */}
              <QuickStatsSection />

              {/* Credentials */}
              <CredentialsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
