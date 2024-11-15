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
    <FadeIn viewportMargin={'0px 0px -75px'}>
      <div className="relative w-full overflow-hidden py-20">
        <FadeInStagger>
          <div className="lg:animate-marquee hover:animate-marquee-pause lg:flex lg:whitespace-nowrap">
            {/* First set of logos */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-20 lg:flex justify-center items-center lg:shrink-0 lg:gap-16">
              {logos.map((logo, index) => (
                <FadeIn key={`logo1-${index}`}>
                  <div className="flex items-center justify-center">
                    <Image src={logo} width={'auto'} height={'auto'} alt="Logo" />
                  </div>
                </FadeIn>
              ))}
            </div>
            {/* Duplicate set of logos for seamless loop */}
            <div className="hidden lg:flex justify-center items-center lg:shrink-0 lg:gap-16 lg:ml-16">
              {logos.map((logo, index) => (
                <FadeIn key={`logo2-${index}`}>
                  <div className="flex items-center justify-center">
                    <Image src={logo} width={'auto'} height={'auto'} alt="Logo" className="" />
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
  },
  {
    quote:
      "The Black Ink team understands how businesses work in Centric and has already created the tools that make projects efficient and successful. They are not afraid of hard work and go the extra mile to ensure customer success.",
    author:
      "Joe Groves - Senior Vice President of Global Sales Centric Software",
  },
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
    <div className="bg-[#EFEEE8] pt-10 px-10">
      <div className="w-full lg:py-6 border-b lg:border-y border-black grid grid-cols-1 lg:grid-cols-3 min-h-80">
        <div className="col-span-1">
          <FadeIn>
            <h2 className="text-lg uppercase font-ritma">testimonials</h2>
          </FadeIn>
        </div>
        <div className="lg:col-span-2 mt-20">
          <FadeIn>
            <div
              className={`transition-opacity duration-1000 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <p className="text-xl lg:text-2xl font-signifier">&quot;{quote}&quot;</p>
              <div className="mt-20 lg:flex justify-between">
                <p className="text-md font-signifierItalic lg:max-w-48">
                  {author}
                </p>
                {testimonials?.length > 1 && (
                  <div className="mt-20 pb-[47px] flex items-center font-ritma">
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
