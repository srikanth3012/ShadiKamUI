import React from "react";
import { Button } from "@/components/ui/button";

import {
  Award,
  Verified,
  ArrowRight,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto text-center relative z-10">
        <h3 className="text-5xl font-bold mb-6">Ready to Start Planning?</h3>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of couples who trusted us with their special day. Get
          matched with perfect vendors in minutes, not months.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4"
            asChild
          >
            <Link href="/booking">
              Start Planning Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-rose-500"
          >
            Schedule Consultation
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-80" />
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
          <div className="text-center">
            <Award className="w-8 h-8 mx-auto mb-2 opacity-80" />
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-80">Support</div>
          </div>
          <div className="text-center">
            <Verified className="w-8 h-8 mx-auto mb-2 opacity-80" />
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm opacity-80">Verified</div>
          </div>
          <div className="text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-2 opacity-80" />
            <div className="text-2xl font-bold">Free</div>
            <div className="text-sm opacity-80">To Use</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTASection;
