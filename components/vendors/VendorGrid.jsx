import { VendorCard } from "@/components/vendors/VendorCard";

export const VendorGrid = ({ filteredAndSortedVendors, setSelectedVendor }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredAndSortedVendors.map((vendor) => (
        <VendorCard
          key={vendor.id}
          vendor={vendor}
          setSelectedVendor={setSelectedVendor}
        />
      ))}
    </div>
  );
};
