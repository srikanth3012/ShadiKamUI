import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = ({ portfolioItems }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">PortfolioSection</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <Badge variant="secondary" className="text-xs">
                {item.category}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSection;
