"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FadeIn } from "./FadeIn";

export function Logos({ logos }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <FadeIn viewportMargin={"0px 0px -75px"}>
      <div className="relative w-full overflow-hidden py-20">
        {isMobile ? (
          // Mobile grid layout
          <div className="grid grid-cols-2 gap-8 px-4">
            {logos?.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center"
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
        ) : (
          // Tablet and up marquee
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
        )}
      </div>
    </FadeIn>
  );
}
