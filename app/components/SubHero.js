"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

export function SubHero() {
  const componentRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = event => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        console.log("SCROLL", window.scrollY);
        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < lastScrollY.current;
        if (isScrollingUp && isFixed && ((!isMobile && window.scrollY < 922) || (isMobile && window.scrollY < 740))) {
          setIsFixed(false);
        } else if (!isScrollingUp && ((!isMobile && rect.top <= 100) || (isMobile && rect.top <= 70))) {
          setIsFixed(true);
        }

        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFixed, isMobile]);

  return (
    <div
      className={`${isFixed ? "fixed h-100vh" : "relative mt-[100vh]"} ${isMobile ? 'top-[70px]' : 'top-[100px] w-full'}`}
      ref={componentRef}
    >
      <div 
        className="flex flex-col justify-between min-w-screen bg-black px-10"
        style={{ 
          height: `calc(100vh - ${isMobile ? '70px' : '100px'})`
        }}
      >
        <FadeIn viewportMargin="100px 100px 100px">
          <h3 className="text-center text-[#EFEEE8] text-xl md:text-4xl pt-10 border-t border-[#EFEEE8] font-signifier">
            There are{" "}
            <span className="font-signifierItalic">many futures, </span>
            <br className="block md:hidden" />
            Black Ink points you to{" "}
            <span className="font-signifierItalic">the right one.</span>
          </h3>
        </FadeIn>
        <FadeIn viewportMargin="100px 100px 100px">
          <h2 className="mt-auto text-center text-[#EFEEE8] text-xl md:text-4xl pb-10 font-signifier">
            We facilitate the{" "}
            <span className="font-signifierItalic">
              selection, design, and implementation
            </span>{" "}
            of strategic projects.
          </h2>
        </FadeIn>
      </div>
    </div>
  );
}
