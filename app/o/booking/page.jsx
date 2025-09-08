"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import vendors from "@/lib/booking/Vendors.json";
import addOnServices from "@/lib/booking/AddOnServices.json";
import services from "@/lib/booking/Services.json";
import { Check } from "lucide-react";

import ServiceSelection from "@/components/User/booking/step1";
import WeedingDetails from "@/components/User/booking/step3";
import ContactInformation from "@/components/User/booking/step4";
import ReviewandConfirmation from "@/components/User/booking/step5";
import Confirmation from "@/components/User/booking/step6";
import { addBooking } from "@/store/Slicers/bookingsSlicer";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    services: [],
    vendor: "",
    date: undefined,
    time: "",
    guestCount: "",
    venue: "",
    budget: "",
    contactInfo: {
      brideName: "",
      groomName: "",
      email: "",
      phone: "",
    },
    specialRequests: "",
    weddingStyle: "",
    priority: "",
    timeline: "",
    addOns: [],
  });

  const [estimatedCost, setEstimatedCost] = useState(0);
  const [selectedVendorDetails, setSelectedVendorDetails] = useState(null);

  const dispatch = useDispatch();

  // Calculate progress percentage
  const progressPercentage = (step / 5) * 100;

  // Calculate estimated cost based on selections
  useEffect(() => {
    let cost = 0;
    bookingData.services.forEach((serviceId) => {
      const service = services.find((s) => s.id === serviceId);
      if (service) {
        const basePrice = Number.parseInt(service.price.replace(/[^0-9]/g, ""));
        cost += basePrice;
      }
    });

    // Add guest count multiplier for catering
    if (bookingData.services.includes("catering") && bookingData.guestCount) {
      const guestMultiplier =
        Number.parseInt(bookingData.guestCount.split("-")[0]) || 100;
      cost += guestMultiplier * 50; // Base catering cost per person
    }

    // Add add-ons cost
    bookingData.addOns.forEach((addOnId) => {
      const addOn = addOnServices.find((a) => a.id === addOnId);
      if (addOn) {
        cost += Number.parseInt(addOn.price.replace(/[^0-9]/g, ""));
      }
    });

    setEstimatedCost(cost);
  }, [bookingData]);

  // Update selected vendor details
  useEffect(() => {
    if (bookingData.vendor) {
      const vendor = vendors.find((v) => v.id === bookingData.vendor);
      setSelectedVendorDetails(vendor);
    }
  }, [bookingData.vendor]);

  const handleServiceToggle = (serviceId) => {
    setBookingData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleAddOnToggle = (addOnId) => {
    setBookingData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter((id) => id !== addOnId)
        : [...prev.addOns, addOnId],
    }));
  };

  const handleContactInfoChange = (field, value) => {
    setBookingData((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [field]: value,
      },
    }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log("Booking submitted:", bookingData);

    const modifiedData = {
      id: "WED-DEF4567",
      status: "pending",
      vendor:
        bookingData?.vendor.charAt(0).toUpperCase() +
        bookingData?.vendor.slice(1),
      service: bookingData?.services[0],
      date: bookingData?.date?.toISOString().split("T")[0],
      time: bookingData?.time,
      guestCount: bookingData?.guestCount,
      budget: bookingData?.budget,
      venue: bookingData?.venue,
      contactEmail: bookingData?.contactInfo?.email,
      contactPhone: bookingData?.contactInfo?.phone,
      notes: "Outdoor ceremony preferred, backup indoor option needed",
    };
    console.log(modifiedData, "m");
    dispatch(addBooking(modifiedData));
    setStep(5); // Show confirmation
  };

  const canProceedFromStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return bookingData.services.length > 0;
      case 2:
        return bookingData.vendor && bookingData.date && bookingData.time;
      case 3:
        return (
          bookingData.guestCount &&
          bookingData.budget &&
          bookingData.weddingStyle
        );
      case 4:
        return (
          bookingData.contactInfo.brideName &&
          bookingData.contactInfo.email &&
          bookingData.contactInfo.phone
        );
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Enhanced Header */}
      <header className=" py-5 backdrop-blur-sm fixed w-screen z-50">
        <div className="flex items-center  gap-12">
          {/* Progress Indicator */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-2">
            <span className="text-sm text-gray-600">Progress:</span>
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-rose-500 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-900">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          {/* Step Indicators */}
          <div className="hidden lg:flex flex-1 items-center gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step >= num
                    ? "bg-rose-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step > num ? <Check className="w-4 h-4" /> : num}
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <ServiceSelection
              services={services}
              bookingData={bookingData}
              nextStep={nextStep}
              canProceedFromStep={canProceedFromStep}
              handleServiceToggle={handleServiceToggle}
            />
          )}

          {/* Step 2: Vendor & Schedule Selection */}
          {/* {step === 2 && (
            <VendorScheduleSelection
              vendors={vendors}
              bookingData={bookingData}
              setBookingData={setBookingData}
              prevStep={prevStep}
              nextStep={nextStep}
              canProceedFromStep={canProceedFromStep}
              selectedVendorDetails={selectedVendorDetails}
            />
          )} */}

          {/* Step 3: Wedding Details */}
          {step === 2 && (
            <WeedingDetails
              bookingData={bookingData}
              setBookingData={setBookingData}
              estimatedCost={estimatedCost}
              addOnServices={addOnServices}
              canProceedFromStep={canProceedFromStep}
              handleAddOnToggle={handleAddOnToggle}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          )}

          {/* Step 4: Contact Information */}
          {step === 3 && (
            <ContactInformation
              bookingData={bookingData}
              handleContactInfoChange={handleContactInfoChange}
              canProceedFromStep={canProceedFromStep}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          )}

          {/* Step 5: Review & Confirmation */}
          {step === 4 && (
            <ReviewandConfirmation
              services={services}
              bookingData={bookingData}
              estimatedCost={estimatedCost}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
              selectedVendorDetails={selectedVendorDetails}
            />
          )}

          {/* Step 6: Confirmation */}
          {step === 5 && <Confirmation />}
        </div>
      </div>
    </div>
  );
}
