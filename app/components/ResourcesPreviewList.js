"use client";

import "@/styles/resources-preview-list.css";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from 'react';
import {FadeIn, FadeInStagger} from "./FadeIn";
import {blogArticles} from "@/app/resources/[slug]/page";

export function ResourcesPreviewList({background}) {
    const [startIndex, setStartIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    //get the most recent dozen blogs
    const recentBlogs = blogArticles.slice(0, 12);

    // Check if we're on mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // 1024px is Tailwind's 'lg' breakpoint
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Calculate the translation percentage based on screen size
    const getTranslateX = () => {
        return !isDesktop ? `${startIndex * -100}%` : `${startIndex * -33.333}%`;
    };

    const handleNext = () => {
        if (startIndex + (isMobile ? 1 : 3) < recentBlogs.length) {
            setStartIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(prev => prev - 1);
        }
    };

    // Swipe handlers
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        }
        if (isRightSwipe) {
            handlePrevious();
        }
    };

    const canGoNext = startIndex + (isMobile ? 1 : 3) < recentBlogs.length;
    const canGoPrevious = startIndex > 0;

    return (
        <div
            style={{backgroundColor: background || "black"}}
            className="xl:w-screen xl:h-screen py-6 lg:py-12 px-10 lg:px-12 flex flex-col"
        >
            <h2 className="text-white text-xl font-ritma">RESOURCES</h2>
            <div className="w-full max-w-[1830px] mx-auto">
                <FadeInStagger>
                    <div
                        className="relative overflow-hidden"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500"
                            style={{transform: `translateX(${getTranslateX()})`}}
                        >
                            {recentBlogs.map((blog) => (
                                <div
                                    key={blog.title}
                                    className="flex-shrink-0 w-full lg:w-1/3 mt-12 lg:mt-20 pr-2"
                                >
                                    <Link href={`/resources/${blog.slug}`} key={blog.slug}>
                                        <div className="flex flex-col items-start">
                                            <div className="mx-auto">
                                                <FadeIn>
                                                    <Image
                                                        className="w-full"
                                                        src={blog.thumbnail}
                                                        alt={blog.title}
                                                        width={617}
                                                        height={600}
                                                        style={{objectFit: 'contain'}}
                                                    />
                                                </FadeIn>
                                                <FadeIn>
                                                    <div
                                                        className="block text-[#efeee8] text-base sm:text-2xl font-light font-signifier mt-4 pl-1">
                                                        {blog.title}
                                                    </div>
                                                </FadeIn>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInStagger>
                <div className="mt-32 md:text-right text-[#EFEEE8] select-none">
                    <div className="flex justify-between items-center">
                        {canGoPrevious && (
                            <button
                                onClick={handlePrevious}
                                className="flex items-center font-ritma next-blog-post-link"
                            >
                                <span className="mr-14">PREVIOUS</span>
                                <span className="arrow-right">←</span>
                            </button>
                        )}
                        {canGoNext && (
                            <button
                                onClick={handleNext}
                                className="flex items-center ml-auto font-ritma next-blog-post-link"
                            >
                                <span className="arrow">→</span>
                                <span className="ml-6">MORE</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
