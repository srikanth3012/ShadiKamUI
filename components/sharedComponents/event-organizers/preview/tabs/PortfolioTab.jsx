"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Star, MapPin, DollarSign, Users, Sparkles, Eye } from "lucide-react";
import portfolioItems from "@/lib/eventOrganizers/preview/portfolioItems.json";

const PortfolioTab = () => {
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);

  return (
    <TabsContent value="portfolio" className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {portfolioItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-gray-100 relative overflow-hidden">
              <img
                src={item.images[0] || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => setSelectedPortfolioItem(item)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <Badge variant="secondary" className="text-xs mb-2">
                    {item.category}
                  </Badge>
                </div>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {item.guestCount} guests
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.venue}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3" />
                  {item.budget}
                </div>
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {item.style}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Portfolio Detail Modal */}
      <Dialog
        open={!!selectedPortfolioItem}
        onOpenChange={() => setSelectedPortfolioItem(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedPortfolioItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedPortfolioItem.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedPortfolioItem.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={selectedPortfolioItem.images[0] || "/placeholder.svg"}
                    alt={selectedPortfolioItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Event Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span>{selectedPortfolioItem.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Guests:</span>
                        <span>{selectedPortfolioItem.guestCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Venue:</span>
                        <span>{selectedPortfolioItem.venue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span>{selectedPortfolioItem.budget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Style:</span>
                        <span>{selectedPortfolioItem.style}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Highlights</h3>
                    <div className="space-y-2">
                      {selectedPortfolioItem.highlights.map(
                        (highlight, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm">{highlight}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </TabsContent>
  );
};

export default PortfolioTab;
