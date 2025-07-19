import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonials from "@/lib/HomePageLibs/testimonials.json";

const SuccessReviewCard = ({ currentTestimonial }) => {
  return (
    <>
      <Card className="p-8 shadow-xl">
        <CardContent className="text-center">
          <div className="flex items-center justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <blockquote className="text-2xl text-gray-700 mb-8 leading-relaxed">
            "{testimonials[currentTestimonial].text}"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src={testimonials[currentTestimonial].image || "/placeholder.svg"}
              alt={testimonials[currentTestimonial].name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <h4 className="font-semibold text-lg">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-gray-600">
                {testimonials[currentTestimonial].location}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                <span>{testimonials[currentTestimonial].weddingDate}</span>
                <span>•</span>
                <span>
                  {testimonials[currentTestimonial].guestCount} guests
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SuccessReviewCard;
