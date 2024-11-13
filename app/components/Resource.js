"use client";

import Image from "next/image";
import HomeCta from "../../public/images/resources.png";
import {FadeIn} from "../components/FadeIn";

export function Resource() {
    return (
        <>
            <div className="h-dvh bg-[#544F3D] px-10 pb-10">
                <div className="flex h-full md:pt-[140px]">
                    <div className="hidden md:block md:w-1/3"></div>
                    <div className="w-full md:w-2/3 transition-all duration-500 ease-in">
                        <div className="flex flex-col h-full text-[#EFEEE8]">
                            <FadeIn className={'mt-auto md:mt-0'}>
                                <h1 className={"font-signifier text-xl md:text-4xl"}>5 Things Before you Say Yes
                                    to PLM</h1>
                            </FadeIn>
                            <div className="my-5 md:my-10">
                                <FadeIn>
                                    {/*bg-[#37311c]*/}
                                    <div className="relative bg-[#EFEEE8]">
                                        <Image src={HomeCta}
                                               alt={"5 Things Before you Say Yes to PLM"}
                                               width={1220}
                                               height={610}
                                               className='w-full h-full md:h-[55dvh] object-cover'
                                        />
                                        {/*<div className="absolute inset-0 opacity-50"></div>*/}
                                    </div>
                                </FadeIn>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <FadeIn viewportMargin="0px 0px 0px">
                                    <p className="font-signifier text-xl md:text-2xl">Collin Israel</p>
                                </FadeIn>
                                <FadeIn viewportMargin="0px 0px 0px">
                                    <button className="font-ritma tracking-widest text-xl">NEXT</button>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row bg-[#EFEEE8] p-10">
                    <div className="w-full md:w-1/3">
                        <h2 className="font-ritma text-lg md:text-2xl text-black">RESOURCES</h2>
                    </div>
                    <div className="w-full md:w-2/3">
                        <PostBody/>
                    </div>
            </div>
        </>
    );
}

function PostBody() {
    return (
        <FadeIn>
            <div className="post-body pt-16 md:pt-0">
                <p className="mb-6 font-signifier text-xl md:text-4xl">
                    In this guest blog post by PLM experts and business consultants Dale Bathum and Colin Israel,
                    discover 5 areas you need to focus on to prepare your business for PLM, from organizing your data to
                    getting buy-in from leadership.
                </p>
                <br/>

                <p className="font-signifierItalic text-lg md:text-2xl">
                    To get your business ready for a PLM implementation, or even to figure out whether you need a new
                    solution to begin with, you need to make sure your business is optimized for PLM. Here are five
                    crucial things to consider before you say yes to PLM.
                </p>
                <br/>

                <p className="mb-6 font-signifier text-base md:text-2xl">
                    1. Culture and resources<br/>Are your teams excited about innovative solutions that will help solve
                    their everyday challenges? Or are they resistant to new methods? You have to ask whether your brand
                    is not just accepting of change, but actively wants to change. The best plan is to market internally
                    to build willingness to change, and remember that cultural change comes from the top down.
                    <br/>
                    In terms of resources, do you have the right team in place to handle implementation, and adoption?
                    Adoption is the hard part: without the proper support and training, users often slip back into the
                    old way of doing things. Make sure you have a project team with the skills to effectively handle the
                    new normal, and queue up external resources early on to avoid losing momentum.
                </p>

                <p className="mb-6 font-signifier text-base md:text-2xl">
                    2. Develop an attainable business case<br/>Why does your company want a PLM solution? Your number
                    one priority should be to get people aligned on a definite ‘why’, whether it’s having a single
                    source of the truth or wanting more accountability. When you judge different systems, you can assess
                    them on metrics and goals related to whether they address that ‘why’.
                    <br/>
                    A clear understanding and expectation of what success looks like for your organization will help you
                    to avoid ‘shiny object syndrome’ when you’re evaluating PLM solutions, and focus on the features
                    that will really move you forward. When it comes to expenditure and ROI, make sure to factor in the
                    cost of ownership as well as the cost of acquisition: in other words, the resources needed to
                    maintain the system in the long term, not just the cost of purchasing it.
                </p>

                <p className="mb-6 font-signifier text-base md:text-2xl">
                    3. Focus on process first
                    <br/>
                    If the main challenge driving your PLM project involves problems with your processes, clean them up
                    before implementation: bad processes only get worse when you inject more technology! Get a handle on
                    any current issues with duplication, inefficiency, and room to change. Find out whether departments
                    communicate effectively, use shared calendars and have standardized operations.
                    <br/>
                    Before jumping into a PLM project, document your current processes and make sure there is clarity
                    and consistency across the organization. Look for PLM providers that specialize in your industry to
                    find vendors that will be able to advise you on best practices, and focus process changes on high
                    impact, low effort areas.
                </p>

                <p className="mb-6 font-signifier text-base md:text-2xl">
                    4. Get your data in order
                    <br/>
                    Once again, it’s all about preparation. Is your data sufficiently organized and formatted to be
                    transferred to a new system? Do you have standard data formats for common items such as tech packs,
                    materials, grading and size ranges? Standardized data might not set you apart in the same way that
                    amazing design does, but it will make PLM implementation run more smoothly, reduce errors and
                    improve relationships with suppliers.
                    <br/>
                    When you have spent time getting your libraries in order, removing duplicates and cleaning up data,
                    you want to make sure it’s a worthwhile exercise. Look for a PLM with features that will make the
                    most efficient and effective use of your data, whether that means linking smoothly with your ERP
                    system or creating restrictions that won’t allow tech packs to be sent out with incomplete
                    information.
                </p>

                <p className="mb-6 font-signifier text-base md:text-2xl">
                    5. Create project discipline
                    <br/>
                    Does your CEO believe in your project? If not, it might be in trouble before it even begins. A
                    project of this magnitude needs to be driven from the top. Throughout the project, endless reasons
                    to delay will pop up: you need discipline and support from key leadership positions across the
                    organization to keep it on track.
                    <br/>
                    A dedicated project manager who truly believes in the project, markets it internally and pays
                    attention to detail will help you steer the course. Finally, focus on empowering people by giving
                    them the opportunity to be successful, not just in leadership but throughout the organization.
                    <br/>
                    Sounds like a lot of work? It is, but we’ve seen it over and over again: companies that put in the
                    preparatory work experience more successful PLM implementation, smoother adoption and more
                    impressive results. Trust us – it’s worth it!
                </p>
            </div>
        </FadeIn>
    );
}
