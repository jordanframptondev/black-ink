"use client";

import "@/styles/intro-animation.css";
import { useEffect } from "react";

export function IntroAnimation() {
    //set display to none after animation plays for 5000ms
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        const timeoutId = setTimeout(() => {
            document.getElementById("intro-animation").style.display = "none";
            document.body.style.overflowY = "auto";
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <div
            id="intro-animation"
            className="z-[9999] absolute top-0 left-0 right-0 bottom-0 overflow-hidden pixel-dissolve-overlay">
        </div>
    );
}
