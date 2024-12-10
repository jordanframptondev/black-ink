"use client";

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
      <span
        type="button"
        onClick={handleScrollToSubHero}
        className="text-2xl relative p-1.5 text-white block mx-auto mb-8 animate-bounce-slow opacity-50 hover:cursor-pointer hover:opacity-100"
      >
        &darr;
      </span>
    </div>
  );
}
