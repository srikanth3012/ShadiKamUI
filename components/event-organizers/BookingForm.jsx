import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const BookingForm = ({
  selectedVendor,
  showContactForm,
  setShowContactForm,
}) => {
  return (
    <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Book Free Consultation</DialogTitle>
          <DialogDescription>
            {selectedVendor &&
              `Get in touch with ${selectedVendor.businessName} to discuss your wedding plans`}
          </DialogDescription>
        </DialogHeader>
        {selectedVendor && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={selectedVendor.profileImage || "/placeholder.svg"}
                />
                <AvatarFallback className="bg-rose-100 text-rose-600">
                  {selectedVendor.businessName
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">{selectedVendor.businessName}</h4>
                <p className="text-sm text-gray-600">
                  {selectedVendor.pricing.priceRange}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Your first name" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Your last name" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" />
            </div>
            <div>
              <Label htmlFor="weddingDate">Wedding Date</Label>
              <Input id="weddingDate" type="date" />
            </div>
            <div>
              <Label htmlFor="guestCount">Estimated Guest Count</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select guest count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50">Under 50</SelectItem>
                  <SelectItem value="100">50-100</SelectItem>
                  <SelectItem value="150">100-150</SelectItem>
                  <SelectItem value="200">150-200</SelectItem>
                  <SelectItem value="250">200-250</SelectItem>
                  <SelectItem value="300">250+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5k">Under $5,000</SelectItem>
                  <SelectItem value="10k">$5,000 - $10,000</SelectItem>
                  <SelectItem value="20k">$10,000 - $20,000</SelectItem>
                  <SelectItem value="30k">$20,000 - $30,000</SelectItem>
                  <SelectItem value="50k">$30,000 - $50,000</SelectItem>
                  <SelectItem value="50k+">$50,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowContactForm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button className="flex-1 bg-rose-500 hover:bg-rose-600">
                Send Request
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
