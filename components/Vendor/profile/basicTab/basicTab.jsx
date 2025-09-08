import BusinessInfo from "@/components/Vendor/profile/basicTab/businessInfo";
import ContactInfo from "@/components/Vendor/profile/basicTab/contactInfo";
import ProfileImage from "@/components/Vendor/profile/basicTab/profileImage";
import SocialMedia from "@/components/Vendor/profile/basicTab/socialMedia";
import BusinessStats from "@/components/Vendor/profile/basicTab/businessStats";

const BasicTab = ({ profile, setProfile, setIsEditing, handleImageUpload }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <BusinessInfo
          profile={profile}
          setProfile={setProfile}
          setIsEditing={setIsEditing}
        />
        <ContactInfo
          profile={profile}
          setProfile={setProfile}
          setIsEditing={setIsEditing}
        />
      </div>

      <div className="space-y-6">
        <ProfileImage profile={profile} handleImageUpload={handleImageUpload} />
        <SocialMedia
          profile={profile}
          setProfile={setProfile}
          setIsEditing={setIsEditing}
        />
        <BusinessStats profile={profile} />
      </div>
    </div>
  );
};

export default BasicTab;
