"use client";
import { Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";

export function Info({ background, title, sections, textLight = true }) {
  return (
    <div className="flex flex-col justify-center h-screen w-screen p-10 lg:py-24 lg:px-10" style={{ background }}>
      <div>
        <h2
          className={`text-lg lg:text-[24px] mb-12 ${
            textLight ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
        <FadeInStagger faster>
          {sections.map((section, index) => (
            <FadeIn key={index}>
              <Section
                title={section.title}
                description={section.description}
                textLight={textLight}
                image={section.image}
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
}

function Section({ title, description, image = null, textLight = true }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`border-t ${
          textLight ? "border-white" : "border-black"
        } transition-all delay-300 duration-500 ${isOpen ? "w-full" : "lg:w-1/3"}`}
      ></div>
      <div className="grid lg:grid-cols-3 w-full py-10 lg:py-6">
        <div className="">
          {/* Left Side: Title and Icon */}
          <div
            className={`flex items-center justify-between cursor-pointer w-full`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`text-xl lg:text-base leading-7 font-signifier ${
                textLight ? "text-[#EFEEE8]" : "text-black"
              }`}
            >
              {title}
            </span>
            <PlusIcon
              aria-hidden="true"
              className={`h-4 w-4 transition-transform duration-200 ${
                textLight ? "text-white" : "text-black"
              } ${isOpen ? "transform rotate-45" : ""}`}
            />
          </div>
        </div>

        <div className="col-span-2">
          {/* Right Side: Description */}
          <Transition
            show={isOpen}
            enter="transition-all duration-500 ease-in"
            enterFrom="opacity-0 max-h-0"
            enterTo="opacity-100 max-h-[500px]"
            leave="transition-all duration-500 ease-out"
            leaveFrom="opacity-100 max-h-[500px]"
            leaveTo="opacity-0 max-h-0"
          >
            <div className="flex justify-between pl-4">
              <div className={`${image ? "w-1/2" : "w-full"}`}>
                <p
                  className={`text-base leading-7 font-serif ${
                    textLight ? "text-white" : "text-black"
                  }`}
                >
                  {description}
                </p>
              </div>
              {image ? (
                <div className="w-1/2">
                  <Image
                    src={image}
                    alt={description}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="ml-4 w-full h-auto"
                  />
                </div>
              ) : null}
            </div>
          </Transition>
        </div>
      </div>
      <div
        className={`border-t ${
          textLight ? "border-white" : "border-black"
        } transition-all duration-500 delay-300 -mb-[1px] ${
          isOpen ? "w-full" : "w-1/3"
        }`}
      ></div>
    </>
  );
}
