"use client";

import Image from 'next/image';
import { useState } from "react";

const logos = [
  "https://brandslogos.com/wp-content/uploads/images/large/patagonia-logo.png",
  "https://brandslogos.com/wp-content/uploads/images/large/patagonia-logo.png",
  "https://brandslogos.com/wp-content/uploads/images/large/patagonia-logo.png",
  "https://brandslogos.com/wp-content/uploads/images/large/patagonia-logo.png",
  "https://brandslogos.com/wp-content/uploads/images/large/patagonia-logo.png",
  "https://brandslogos.com/wp-content/uploads/images/large/patagonia-logo.png",
  "https://brandslogos.com/wp-content/uploads/images/large/patagonia-logo.png",
  "https://brandslogos.com/wp-content/uploads/images/large/patagonia-logo.png"
];

function Logos() {
  return (
    <div className="py-12 flex justify-between">
      {/* 1.784 */}
      {logos.map((logo, index) => <Image key={index} src={logo} width={100} height={30} />)}
    </div>
  )
}

const testimonials = [
  {
    quote:
      "The Black Ink team understands how businesses work in Centric and has already created the tools that make projects efficient and successful. They are not afraid of hard work and go the extra mile to ensure customer success.",
    author:
      "Joe Groves - Senior Vice President of Global Sales Centric Software",
  },
  { quote: "Amazing service and support.", author: "John Smith" },
  { quote: "Highly recommend to everyone!", author: "Sarah Johnson" },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  const handleNext = () => {
    setSlideDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setSlideDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { quote, author } = testimonials[currentIndex];

  return (
    <div className="bg-[#efeee9] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full py-6 border-y border-black grid grid-cols-3 min-h-80">
          <div className="col-span-1">
            <h2 className="text-lg uppercase font-ritma">testimonials</h2>
          </div>
          <div className="col-span-2">
            {/* Some code for a slide effect if we want to do that */}
            {/* <div className={`max-w-48 testimonial-slide ${slideDirection}`}> */}
            <p className="text-2xl font-signifier">&quot;{quote}&quot;</p>
            <div className="mt-24 flex justify-between">
              <p className="text-md font-signifierItalic max-w-48">{author}</p>
              <div className="flex items-center font-ritma">
                <button onClick={handlePrevious}>&larr;</button>
                <p className="mx-4">
                  {currentIndex + 1}/{testimonials?.length}
                </p>
                <button onClick={handleNext}>&rarr;</button>
              </div>
            </div>
          </div>
        </div>
        <Logos />
      </div>
    </div>
  );
}
