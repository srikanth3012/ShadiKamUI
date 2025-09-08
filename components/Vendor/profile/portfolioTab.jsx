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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Upload, Plus, Users, Edit, Trash2 } from "lucide-react";
const portfolioItems = [
  {
    id: 1,
    title: "Elegant Garden Wedding",
    description: "A romantic outdoor ceremony with 150 guests",
    images: ["/placeholder.svg?height=300&width=400"],
    category: "Outdoor Wedding",
    date: "2024-05-15",
    guestCount: 150,
    venue: "Botanical Gardens",
  },
  {
    id: 2,
    title: "Modern City Wedding",
    description: "Contemporary celebration in downtown venue",
    images: ["/placeholder.svg?height=300&width=400"],
    category: "Urban Wedding",
    date: "2024-04-20",
    guestCount: 200,
    venue: "Rooftop Terrace",
  },
  {
    id: 3,
    title: "Intimate Beach Ceremony",
    description: "Small beachside wedding with close family",
    images: ["/placeholder.svg?height=300&width=400"],
    category: "Beach Wedding",
    date: "2024-03-10",
    guestCount: 50,
    venue: "Malibu Beach",
  },
];

const PortfolioTab = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Portfolio Gallery</CardTitle>
            <CardDescription>
              Showcase your best work to attract clients
            </CardDescription>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Portfolio Project</DialogTitle>
                <DialogDescription>
                  Upload photos and details of your recent work
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="projectTitle">Project Title</Label>
                  <Input
                    id="projectTitle"
                    placeholder="e.g., Elegant Garden Wedding"
                  />
                </div>
                <div>
                  <Label htmlFor="projectDescription">Description</Label>
                  <Textarea
                    id="projectDescription"
                    placeholder="Describe the project, challenges, and results..."
                    rows={3}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="projectCategory">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="outdoor">Outdoor Wedding</SelectItem>
                        <SelectItem value="indoor">Indoor Wedding</SelectItem>
                        <SelectItem value="beach">Beach Wedding</SelectItem>
                        <SelectItem value="destination">
                          Destination Wedding
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="guestCount">Guest Count</Label>
                    <Input id="guestCount" type="number" placeholder="150" />
                  </div>
                </div>
                <div>
                  <Label>Project Images</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Drag and drop images or click to upload
                    </p>
                    <Button variant="outline" className="mt-2">
                      Choose Files
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Add Project</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src={item.images[0] || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <Badge variant="secondary">{item.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {item.guestCount}
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

export default PortfolioTab;
