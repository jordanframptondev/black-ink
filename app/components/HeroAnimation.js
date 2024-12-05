"use client";

import animationData from '@/public/Ink_Intro.json';
import "@/styles/intro-animation.css";
import dynamic from 'next/dynamic';
import React from "react";

const Lottie = dynamic(() => import('react-lottie-player'), {ssr: false});

export function HeroAnimation() {
    const [playing, setPlaying] = React.useState(true);
    const [animationPlayed, setAnimationPlayed] = React.useState(false);
    
    function onComplete() {
        setPlaying(false);
        sessionStorage.setItem('animationPlayed', 'true');
        setTimeout(() => {
            setAnimationPlayed(true);
        }, 1000);
    }

    React.useEffect(() => {
        const hasPlayed = sessionStorage.getItem('animationPlayed') === 'true';
        if (hasPlayed) {
            setPlaying(false);
            setAnimationPlayed(true);
        }
    }, []);

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
        !animationPlayed ?
            <div
            id="hero-animation"
                className={`z-[9999] relative transition-opacity duration-1000 ease-out ${
                    playing && !animationPlayed ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <Lottie 
                    play 
                    loop={true} 
                    animationData={animationData} 
                    onComplete={onComplete}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0
                    }}
                />
            </div>
        : null
    );
}


