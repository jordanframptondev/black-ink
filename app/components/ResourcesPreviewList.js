"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { FadeIn, FadeInStagger } from "./FadeIn";

const blogs = [
  {
    title: "Finding Org Flow",
    emphasis: "Lessons from Surfing",
    imgUrl: "blog-1.png",
  },
  {
    title: "5 Things Before you Say Yes to PLM",
    imgUrl: "blog-2.png",
  },
  {
    title: "Finding Your Why and Your Decision Makers",
    imgUrl: "blog-3.png",
  },
  {
    title: "Finding Org Flow",
    emphasis: "Lessons from Surfing",
    imgUrl: "blog-1.png",
  },
  {
    title: "5 Things Before you Say Yes to PLM",
    imgUrl: "blog-2.png",
  },
  {
    title: "Finding Your Why and Your Decision Makers",
    imgUrl: "blog-3.png",
  },
];

export function ResourcesPreviewList({ background }) {
  const [startIndex, setStartIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 1024px is Tailwind's 'lg' breakpoint
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate the translation percentage based on screen size
  const getTranslateX = () => {
    return !isDesktop ? `${startIndex * -100}%` : `${startIndex * -33.333}%`;
  };

  const handleNext = () => {
    if (startIndex + (isMobile ? 1 : 3) < blogs.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  const canGoNext = startIndex + (isMobile ? 1 : 3) < blogs.length;
  const canGoPrevious = startIndex > 0;

  return (
    <div
      style={{ backgroundColor: background || "black" }}
      className="py-6 lg:py-12 px-10 lg:px-12 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-white text-xl font-ritma">RESOURCES</h2>
        <FadeInStagger>
          <div 
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(${getTranslateX()})` }}
            >
              {blogs.map((blog) => (
                <div 
                  key={blog.title} 
                  className="flex-shrink-0 w-full lg:w-1/3 mt-12 lg:mt-24 px-2"
                >
                  <FadeIn>
                    <Image
                      className="w-full"
                      src={`/images/${blog.imgUrl}`}
                      alt={blog.title}
                      width={617}
                      height={600}
                    />
                  </FadeIn>
                  <FadeIn>
                    <Link
                      href="/resources"
                      className="block text-[#efeee8] font-light font-signifier mt-6"
                    >
                      {blog.title}<span className="italic">{blog.emphasis ? `: ${blog.emphasis}` : null}</span>
                    </Link>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </FadeInStagger>
      </div>
      <div className="md:text-right mt-32 md:mt-10 mb-20 lg:mt-48 text-[#EFEEE8]">
        <div className="flex justify-between items-center">
          {canGoPrevious && (
            <button 
              onClick={handlePrevious}
              className="flex items-center font-ritma signup-link"
            >
              <span className="mr-6">PREVIOUS</span>
              <span className="arrow-right">←</span>
            </button>
          )}
          {canGoNext && (
            <button 
              onClick={handleNext}
              className="flex items-center ml-auto font-ritma signup-link"
            >
              <span className="arrow">→</span>
              <span className="ml-6">MORE</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
