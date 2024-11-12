"use client";

import Logo1 from "@/public/images/logos/logo-1.png";
import Logo2 from "@/public/images/logos/logo-2.png";
import Logo3 from "@/public/images/logos/logo-3.png";
import Logo4 from "@/public/images/logos/logo-4.png";
import Logo5 from "@/public/images/logos/logo-5.png";
import Logo6 from "@/public/images/logos/logo-6.png";
import Logo7 from "@/public/images/logos/logo-7.png";
import Logo8 from "@/public/images/logos/logo-8.png";
import Image from "next/image";
import { useState } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8];

function Logos() {
  return (
    <FadeIn>
      <div className="relative w-full overflow-hidden py-12">
        <FadeInStagger>
          <div className="animate-marquee flex whitespace-nowrap">
            {/* First set of logos */}
            <div className="flex items-center shrink-0">
              {logos.map((logo, index) => (
                <FadeIn key={`logo1-${index}`}>
                  <div className="mx-8">
                    <Image src={logo} width={'auto'} height={'auto'} alt="Logo" />
                  </div>
                </FadeIn>
              ))}
            </div>
            {/* Duplicate set of logos for seamless loop */}
            <div className="flex items-center shrink-0">
              {logos.map((logo, index) => (
                <FadeIn key={`logo2-${index}`}>
                  <div className="mx-8">
                    <Image src={logo} width={'auto'} height={'auto'} alt="Logo" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeInStagger>
      </div>
    </FadeIn>
  );
}

const testimonials = [
  {
    quote:
      "The Black Ink team understands how businesses work in Centric and has already created the tools that make projects efficient and successful. They are not afraid of hard work and go the extra mile to ensure customer success.",
    author:
      "Joe Groves - Senior Vice President of Global Sales Centric Software",
  }
];

export function Testimonials() {
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

  const { quote, author } = testimonials[currentIndex];

  return (
    <div className="bg-[#EFEEE8] py-12 px-6">
      <div className="w-full py-6 border-y border-black grid grid-cols-3 min-h-80">
        <div className="col-span-1">
          <FadeIn>
            <h2 className="text-lg uppercase font-ritma">testimonials</h2>
          </FadeIn>
        </div>
        <div className="col-span-2">
          <FadeIn>
            <div
              className={`transition-opacity duration-1000 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <p className="text-2xl font-signifier">&quot;{quote}&quot;</p>
              <div className="mt-24 flex justify-between">
                <p className="text-md font-signifierItalic max-w-48">
                  {author}
                </p>
                {testimonials?.length > 1 && (
                  <div className="flex items-center font-ritma">
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
      <Logos />
    </div>
  );
}
