'use client';

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

export function ResourcesPreviewList({background}) {
  return (
    <div 
      style={{ backgroundColor: background || 'black' }}
      className="py-6 lg:py-12 px-4 lg:px-12 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-white text-xl uppercase font-ritma">resources</h2>
        <FadeInStagger>
          <div className="flex justify-between space-x-4">
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
                  <Link href="/resources" className="text-[#efeee8] font-light font-signifier mt-6">
                    {blog.title}
                  </Link>
                </FadeIn>
              </div>
            ))}
          </div>
        </FadeInStagger>
      </div>
      <div className="text-right lg:mt-48">
        <Link href="/resources" className="text-white uppercase">
          &rarr; MORE
        </Link>
      </div>
    </div>
  );
}
