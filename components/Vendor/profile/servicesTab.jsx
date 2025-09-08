import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Clock, DollarSign } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Full Wedding Planning",
    description: "Complete wedding planning from start to finish",
    price: "Starting at $5,000",
    duration: "12+ months",
    included: [
      "Venue selection",
      "Vendor coordination",
      "Timeline creation",
      "Day-of coordination",
    ],
  },
  {
    id: 2,
    name: "Day-of Coordination",
    description: "Professional coordination on your wedding day",
    price: "Starting at $1,500",
    duration: "Wedding day",
    included: [
      "Timeline management",
      "Vendor coordination",
      "Emergency handling",
      "Setup supervision",
    ],
  },
  {
    id: 3,
    name: "Partial Planning",
    description: "Assistance with specific aspects of your wedding",
    price: "Starting at $2,500",
    duration: "3-6 months",
    included: [
      "Vendor recommendations",
      "Timeline assistance",
      "Budget guidance",
      "Design consultation",
    ],
  },
];
const ServicesTab = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Services & Packages</CardTitle>
            <CardDescription>
              Manage your service offerings and pricing
            </CardDescription>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Service
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Service</DialogTitle>
                <DialogDescription>
                  Create a new service package for your clients
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="serviceName">Service Name</Label>
                  <Input
                    id="serviceName"
                    placeholder="e.g., Full Wedding Planning"
                  />
                </div>
                <div>
                  <Label htmlFor="serviceDescription">Description</Label>
                  <Textarea
                    id="serviceDescription"
                    placeholder="Describe what's included in this service..."
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="servicePrice">Starting Price</Label>
                    <Input id="servicePrice" placeholder="5000" type="number" />
                  </div>
                  <div>
                    <Label htmlFor="serviceDuration">Duration</Label>
                    <Input
                      id="serviceDuration"
                      placeholder="e.g., 12+ months"
                    />
                  </div>
                </div>
                <div>
                  <Label>What's Included</Label>
                  <div className="space-y-2 mt-2">
                    <Input placeholder="e.g., Venue selection" />
                    <Input placeholder="e.g., Vendor coordination" />
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Item
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Add Service</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service) => (
            <Card key={service.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {service.price}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">What's Included:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.included.map((item, index) => (
                          <Badge key={index} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesTab;
