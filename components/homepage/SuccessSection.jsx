"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import SuccessReviewCard from "@/components/homepage/SuccessReviewCard";
import testimonials from "@/lib/HomePageLibs/testimonials.json";

const SuccessSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-purple-100 text-purple-700">
          Success Stories
        </Badge>
        <h3 className="text-4xl font-bold text-gray-900 mb-6">
          What Our Couples Say
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real stories from real couples who trusted us with their special day
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <SuccessReviewCard currentTestimonial={currentTestimonial} />

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-rose-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
