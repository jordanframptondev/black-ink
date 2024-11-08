"use client";

import Image from "next/image";
import HomeCta from "../../public/images/resources.png";
import { FadeIn } from "../components/FadeIn";

export function Resource() {
  return (
    <>
      <div className="h-screen md:h-auto bg-[#544F3D]">
        <div className="flex flex-col h-full md:h-auto md:flex-row justify-center lg:pt-40 lg:pb-10">
          <div className="hidden md:block md:w-1/3"></div>
          <div className="w-full h-full md:h-auto md:w-2/3">
            <PostHeader
              title={"5 Things Before You Say Yes to PLM"}
              image={HomeCta}
              author={"Collin Israel"}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#efeee8]">
        <div className="md:flex">
          <div className="w-full md:w-1/3 pt-5 px-10 lg:p-10">
            <h2 className="font-ritma uppercase text-black">Resources</h2>
          </div>
          <div className="w-full md:w-2/3 pt-10 px-10 lg:p-10">
            <PostBody />
          </div>
        </div>
      </div>
    </>
  );
}

function PostHeader({ title, image, author }) {
  const handleScroll = () => {
    // Find the post body element
    const postBody = document.querySelector(".post-body");
    if (postBody) {
      postBody.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-10 h-full flex flex-col justify-between md:block md:h-auto md:px-0 md:pr-10 text-[#EFEEE8]">
      <div>{" "}</div>
      <div>
        <FadeIn>
        <h1 className={"font-signifier text-lg md:text-4xl text-light"}>{title}</h1>
      </FadeIn>
      <FadeIn>
        <div className="relative mt-5 md:mt-10">
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-[#38311f] opacity-80"></div>
          <div className="bg-white">
            {/* TODO: Change to use these sizes */}
            {/* mobile w: 350; h: 228 */}
            {/* desktop w: 1220; h: 610 */}
            <Image src={image} alt={title} width={1220} height={610} />
          </div>
        </div>
      </FadeIn>
      </div>
      <FadeIn>
        <div className="mt-auto flex justify-between items-center pb-10 lg:mt-40">
          <p className="font-signifier">{author}</p>
          <button onClick={handleScroll} id="scroll-btn" className="uppercase">
            → Next
          </button>
        </div>
      </FadeIn>
    </div>
  );
}

function PostBody() {
  return (
    <FadeIn>
      <div className="post-body pt-5">
        <p className="mb-6 font-signifier">
          In the rapidly evolving landscape of digital transformation,
          organizations must navigate complex challenges while maintaining their
          competitive edge. The intersection of technology and business strategy
          presents both opportunities and obstacles that require careful
          consideration and expert guidance.
        </p>

        <p className="mb-6 font-signifier">
          Digital Product Creation (DPC) has emerged as a cornerstone of modern
          product development, revolutionizing how companies conceptualize,
          design, and bring products to market. This transformation extends
          beyond mere 3D modeling, encompassing entire workflow processes and
          collaborative frameworks that drive innovation and efficiency.
        </p>

        <p className="mb-6 font-signifier">
          Product Lifecycle Management (PLM) systems serve as the backbone of
          successful product development strategies, enabling seamless
          communication and coordination across teams and external partners. The
          implementation of these systems requires a delicate balance between
          technical expertise and organizational change management.
        </p>

        <p className="mb-6 font-signifier">
          The integration of artificial intelligence and machine learning into
          planning processes has created unprecedented opportunities for
          accurate demand forecasting and inventory optimization. Companies that
          successfully leverage these technologies gain a significant advantage
          in reducing waste and improving operational efficiency.
        </p>

        <p className="mb-6 font-signifier">
          As we look to the future, the ability to adapt and evolve becomes
          increasingly critical. Organizations must embrace digital
          transformation not as a one-time initiative, but as an ongoing journey
          of continuous improvement and innovation. This mindset, coupled with
          strategic technology investments, positions companies for sustained
          success in an increasingly competitive marketplace.
        </p>
      </div>
    </FadeIn>
  );
}
