import ProfileHeaderSection from "../../../../components/sharedComponents/event-organizers/preview/ProfileHeaderSection";
import MainContentSection from "../../../../components/sharedComponents/event-organizers/preview/MainContentSection";
import SidebarSection from "../../../../components/sharedComponents/event-organizers/preview/SidebarSection";
// Mock event organizer data
import eventOrganizer from "@/lib/eventOrganizers/preview/eventOrganizers.json";

export default function EventOrganizerProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="h-80 bg-gradient-to-r from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
        <img
          src={eventOrganizer.coverImage || "/placeholder.svg"}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Profile Header */}
          <ProfileHeaderSection eventOrganizer={eventOrganizer} />
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <MainContentSection eventOrganizer={eventOrganizer} />
            {/* Sidebar */}
            <div className="space-y-6">
              <SidebarSection eventOrganizer={eventOrganizer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <header className="border-b bg-white sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <ArrowLeft className="w-5 h-5" />
//             <Heart className="w-8 h-8 text-rose-500" />
//             <h1 className="text-2xl font-bold text-gray-900">ShadiKam</h1>
//           </Link>
//           <div className="flex items-center gap-3">
//             <Button variant="outline" size="sm" onClick={handleShare}>
//               <Share2 className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={handleBookmark}
//               className={isBookmarked ? "text-rose-500 border-rose-500" : ""}
//             >
//               <Bookmark
//                 className={`w-4 h-4 mr-2 ${isBookmarked ? "fill-current" : ""}`}
//               />
//               {isBookmarked ? "Saved" : "Save"}
//             </Button>
//           </div>
//         </div>
//       </header>
