"use client";
import BlackInkLogo from "@/public/images/black-ink-logo-cream.png";
import animationData from '@/public/Ink_Intro.json';
import Image from "next/image";
import React from "react";
import Lottie from 'react-lottie-player';

export function HeroAnimation() {
    const [playing, setPlaying] = React.useState(true);
    const [animationPlayed, setAnimationPlayed] = React.useState(false);

    function onComplete() {
        console.log('complete');
        setPlaying(false);
        setAnimationPlayed(true);
    }

    React.useEffect(() => {
        // Add/remove no-scroll class on body when animation is playing
        if (playing) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [playing]);

    return (
        <div className={!animationPlayed ? "h-screen w-screen" : ""}>
                <div
                    className={`z-[9999] fixed top-0 left-0 right-0 bottom-0 transition-opacity duration-1000 ease-out ${
                        playing && !animationPlayed ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                >
                    {!animationPlayed && <Lottie play loop={false} animationData={animationData} onLoad={() => console.log('load')} onComplete={onComplete} />}
                </div>
        </div>
    );
}


