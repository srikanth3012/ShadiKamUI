import Footer from "@/components/Footer";
import HeroSection from "@/components/homepage/HeroSection";
import testimonials from "@/lib/HomePageLibs/testimonials.json";
import FeatureVendorSection from "@/components/homepage/FeatureVendorSection";
import ServiceSectiom from "@/components/homepage/ServiceSection";
import SuccessSection from "@/components/homepage/SuccessSection";
import CTASection from "@/components/homepage/CTASection";
import Link from "next/link";

// Enhanced statistics

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Enhanced Header */}

      <nav className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 hidden md:flex items-center pt-10  justify-center gap-6">
        <Link
          href="#services"
          className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
        >
          Services
        </Link>
        <Link
          href="#vendors"
          className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
        >
          Vendors
        </Link>
        <Link
          href="#cta"
          className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
        >
          Gallery
        </Link>
        <Link
          href="#pricing"
          className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
        >
          Pricing
        </Link>
        <Link
          href="#contact"
          className="text-gray-600 hover:text-rose-500 transition-colors font-medium"
        >
          Contact
        </Link>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-10 pb-20 px-4 relative overflow-hidden">
        <HeroSection />
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <ServiceSectiom />
      </section>

      {/* Enhanced Featured Vendors */}
      <section id="vendors" className="py-20 px-4 bg-gray-50">
        <FeatureVendorSection />
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="cta" className="py-20 px-4 bg-white">
        <SuccessSection />
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white relative overflow-hidden">
        <CTASection />
      </section>

      {/* Enhanced Footer */}
      <Footer />

      {/* Video Modal */}
      {/* <Dialog open={isVideoPlaying} onOpenChange={setIsVideoPlaying}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>How ShadiKam Works</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Video player would be embedded here
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog> */}
    </div>
  );
}
