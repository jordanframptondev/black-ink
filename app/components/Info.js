"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

function InfoSection({ title, description, last }) {
  return (
    <>
      <Disclosure key={title} as="div" className="grid grid-cols-4">
        <dt className={`lg:col-span-1 ${last ? 'border-y' : 'border-t'} border-white py-6`}>
          <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
            <span className="text-base leading-7 font-serif">{title}</span>
            <span className="ml-6 flex h-7 items-center">
              <PlusIcon
                aria-hidden="true"
                className="h-4 w-4 group-data-[open]:hidden"
              />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel
          as="dd"
          className="py-6 pr-12 lg:col-span-3 border-y border-white"
          style={{ marginBottom: last ? '0' : "-1px" }}
        >
          {/* negative margin bottom lines up next element top border with current element bottom border (for all but last in array) */}
          <p className="text-base leading-7 text-white font-serif">
            {description}
          </p>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}

export function Info({ background, title, sections }) {
  return (
    <div className="h-screen w-screen px-6 py-12" style={{ background }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl mb-12">{title}</h2>
        <div className="">
          <dl className="">
            {sections.map((section, index) => (
              <InfoSection
                key={index}
                title={section.title}
                description={section.description}
                last={index + 1 === sections.length}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
