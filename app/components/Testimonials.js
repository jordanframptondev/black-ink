"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getTestimonials } from "../utils/cms-service";
import { FadeIn } from "./FadeIn";

function Logos({ logos }) {
  return (
    <FadeIn viewportMargin={"0px 0px -75px"}>
      <div className="relative w-full overflow-hidden py-20">
        <div className="inline-flex w-max animate-marquee hover:animate-marquee-pause">
          {[...Array(4)].map((_, i) => (
            <div key={`set-${i}`} className="flex items-center gap-16 px-8">
              {logos?.map((logo) => (
                <div
                  key={`${logo.id}-${i}`}
                  className="w-[100px] flex items-center justify-center"
                >
                  <Image
                    src={logo.url}
                    width={100}
                    height={75}
                    alt="Logo"
                    blurDataURL={logo.lqip}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export function Testimonials({ logos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials().then((data) => {
      const list = data[0]?.testimonialList;
      setTestimonials(list);
    });
  }, []);

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
    <div className="bg-[#EFEEE8] pt-10 px-10">
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
      <Logos logos={logos} />
    </div>
  );
}
