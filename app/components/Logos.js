"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";

export function Logos({ logos }) {
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