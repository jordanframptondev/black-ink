"use client";

import { useEffect, useState } from "react";
import { getTestimonials } from "../utils/cms-service";
import { FadeIn } from "./FadeIn";

export function Testimonials({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500); // Half of our transition duration
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500); // Half of our transition duration
  };

  return (
    <div className="w-full lg:py-6 border-b lg:border-y border-black grid grid-cols-1 lg:grid-cols-3 min-h-80">
      <div className="col-span-1">
        <FadeIn>
          <h2 className="text-lg uppercase font-ritma">testimonials</h2>
        </FadeIn>
      </div>
      <div className="lg:col-span-2 mt-20">
        <FadeIn>
          <div>
            <p className={`transition-opacity duration-1000 text-xl lg:text-2xl font-signifier ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}>
              {testimonials[currentIndex]?.text}
            </p>
            <div className="mt-20 lg:flex justify-between">
              <p className={`transition-opacity duration-1000 text-base md:text-xl lg:text-2xl font-signifier text-md font-signifierItalic lg:max-w-96 mb-20 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}>
                {testimonials[currentIndex]?.author}
              </p>
              {testimonials?.length > 1 && (
                <div className="pb-[47px] flex items-center font-ritma">
                  <button onClick={handlePrevious}>&larr;</button>
                  <p className="mx-4">
                    {currentIndex + 1}/{testimonials?.length}
                  </p>
                  <button onClick={handleNext}>&rarr;</button>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
