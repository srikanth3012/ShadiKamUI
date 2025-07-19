"use client";
import React, { useState } from "react";
import OverviewTab from "./tabs/OverviewTab";
import ServiceTab from "./tabs/ServiceTab";
import PotfolioTab from "./tabs/PortfolioTab";
import ReviewTab from "./tabs/ReviewTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MainContentSection = ({ eventOrganizer }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="lg:col-span-3">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <OverviewTab eventOrganizer={eventOrganizer} />
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="services" className="space-y-6">
          <ServiceTab />
        </TabsContent>

        {/* Portfolio Tab */}
        <TabsContent value="portfolio" className="space-y-6">
          <PotfolioTab />
        </TabsContent>

        {/* Reviews Tab */}
        <TabsContent value="reviews" className="space-y-6">
          <ReviewTab eventOrganizer={eventOrganizer} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MainContentSection;
