"use client";

import { useRef } from "react";
import { FadeIn } from "./FadeIn";

export function SubHero() {
    const componentRef = useRef(null);

    return (
        <div
            id="sub-hero"
            className="pt-[100px] sticky top-0 mt-[100vh]"
            style={{height: "calc(100vh - 80px)"}}
            ref={componentRef}
        >
            <div
                className="flex flex-col justify-between min-w-screen bg-black px-10 h-full"
            >
                <FadeIn viewportMargin="100px 100px 100px">
                    <h3 className="text-center text-[#EFEEE8] text-xl md:text-4xl pt-10 border-t border-[#EFEEE8] font-signifier">
                        There are{" "}
                        <span className="font-signifierItalic">many futures, </span>
                        <br className="block md:hidden"/>
                        Black Ink points you to{" "}
                        <span className="font-signifierItalic">the right one.</span>
                    </h3>
                </FadeIn>
            </div>
        </div>
    );
}
