"use client";

import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
export function Hero() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    const handleScrollToSubHero = () => {
        const subHeroElement = document.querySelector("#sub-hero");
        if (subHeroElement) {
            subHeroElement.scrollIntoView({behavior: "smooth"});
        }
    };
    return (
        <div className="fixed top-0 flex w-full min-h-screen flex-col bg-black">
            <h1 className="text-white text-lg lg:text-2xl white font-ritma uppercase pb-11 mt-auto mx-auto">
                into the black
            </h1>

            <ArrowDownIcon onClick={handleScrollToSubHero}
                           className="text-2xl w-6 h-6 text-white mx-auto mb-8 animate-bounce-slow opacity-50 hover:cursor-pointer hover:opacity-100"/>
        </div>
    );
}
