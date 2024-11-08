"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "../FadeIn";

const blogs = [
  {
    title: "Some sample title about this blog",
    imgUrl: "blog-1.png",
  },
  {
    title: "Some sample title about this other blog: Super Cool!",
    imgUrl: "blog-2.png",
  },
  {
    title: "Snowboarding is a great place to learn about this blog",
    imgUrl: "blog-3.png",
  },
];

export function ResourcesPreviewList({ background }) {
  return (
    <div
      style={{ backgroundColor: background || "black" }}
      className="py-6 lg:py-12 px-10 lg:px-12 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-white text-xl uppercase font-ritma">resources</h2>
        <FadeInStagger>
          <div className="md:flex justify-between md:space-x-4">
            {blogs.map((blog) => (
              <div key={blog.title} className="flex-1 mt-12 lg:mt-24">
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
                    className="block text-[#efeee8] italic font-light text-[#EFEEE8] font-signifier mt-6"
                  >
                    {blog.title}
                  </Link>
                </FadeIn>
              </div>
            ))}
          </div>
        </FadeInStagger>
      </div>
      <div className="md:text-right mt-32 md:mt-10 mb-20 lg:mt-48 text-[#EFEEE8]">
        <Link href="/resources" className="">
        <div
          className={
            "flex items-center flex-nowrap signup-link w-full py-10 md:py-0 font-ritma cursor-pointer border-white transition-all duration-1000 ease-in"
          }
        >
            <div className={"md:ml-auto"}>
              <span className="arrow">→</span>
            </div>
            <div className="w-1/2 md:w-auto min-w-fit pr-[50px] whitespace-nowrap link-text">
              <span>MORE</span>
            </div>
        </div>
          </Link>
      </div>
    </div>
  );
}
