"use client";

import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export function AboutHero() {
  const handleScrollToSubHero = () => {
    const subHeroElement = document.querySelector("#sub-hero");
    if (subHeroElement) {
      subHeroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#3A332E] top-0 fixed w-full min-h-screen flex flex-col justify-end">
      <Image
        src="/images/about-bg-dark.png"
        alt="Background Image"
        width={1920}
        height={1080}
        className={
          "mt-auto w-full min-h-[550px] object-cover object-[35%] mb-[25px] md:mb-[150px]"
        }
        priority={true}
      />
      <ArrowDownIcon onClick={handleScrollToSubHero} className="text-2xl w-6 h-6 text-white mx-auto mb-8 animate-bounce-slow opacity-50 hover:cursor-pointer hover:opacity-100" />
    </div>
  );
}
