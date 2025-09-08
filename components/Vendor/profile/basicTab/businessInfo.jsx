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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BusinessInfo = ({ profile, setProfile, setIsEditing }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Information</CardTitle>
        <CardDescription>Update your basic business details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              id="businessName"
              value={profile.businessName}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  businessName: e.target.value,
                });
                setIsEditing(true);
              }}
            />
          </div>
          <div>
            <Label htmlFor="owner">Owner/Contact Person</Label>
            <Input
              id="owner"
              value={profile.owner}
              onChange={(e) => {
                setProfile({ ...profile, owner: e.target.value });
                setIsEditing(true);
              }}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="tagline">Business Tagline</Label>
          <Input
            id="tagline"
            placeholder="A catchy tagline for your business"
            value={profile.tagline}
            onChange={(e) => {
              setProfile({ ...profile, tagline: e.target.value });
              setIsEditing(true);
            }}
          />
        </div>

        <div>
          <Label htmlFor="description">Business Description</Label>
          <Textarea
            id="description"
            rows={4}
            placeholder="Describe your business, experience, and what makes you unique..."
            value={profile.description}
            onChange={(e) => {
              setProfile({
                ...profile,
                description: e.target.value,
              });
              setIsEditing(true);
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="category">Primary Category</Label>
            <Select
              value={profile.category}
              onValueChange={(value) => {
                setProfile({ ...profile, category: value });
                setIsEditing(true);
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Wedding Planning">
                  Wedding Planning
                </SelectItem>
                <SelectItem value="Photography">Photography</SelectItem>
                <SelectItem value="Catering">Catering</SelectItem>
                <SelectItem value="Venue">Venue</SelectItem>
                <SelectItem value="Entertainment">Entertainment</SelectItem>
                <SelectItem value="Floral">Floral Design</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="priceRange">Price Range</Label>
            <Input
              id="priceRange"
              placeholder="e.g., $2,000 - $8,000"
              value={profile.pricing.priceRange}
              onChange={(e) => {
                setProfile({
                  ...profile,
                  pricing: {
                    ...profile.pricing,
                    priceRange: e.target.value,
                  },
                });
                setIsEditing(true);
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessInfo;
