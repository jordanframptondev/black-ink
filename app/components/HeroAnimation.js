"use client";

import animationData from '@/public/Ink_Intro.json';
import dynamic from 'next/dynamic';
import React from "react";

const Lottie = dynamic(() => import('react-lottie-player'), {ssr: false});

export function HeroAnimation() {
    const [playing, setPlaying] = React.useState(true);
    const [animationPlayed, setAnimationPlayed] = React.useState(false);
    const [styles, setStyles] = React.useState({});
    
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

        const checkScreenSize = () => {
            if (window.innerWidth < 768) {
                setStyles({
                    width: '320%',
                    marginLeft: '-110%'
                });
            } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
                setStyles({
                    width: '200%',
                    marginLeft: '-50%'
                });
            } else {
                setStyles({
                    width: '100vw', 
                    height: '100vh', 
                    objectFit: 'cover',
                    position: 'fixed',
                    top: 0,
                    left: 0
                });
            }
        };

        // Initial check
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
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
        <div className={"h-screen w-screen"}>
            <div
                className={`z-[9999] fixed top-0 left-0 right-0 bottom-0 transition-opacity duration-1000 ease-out ${
                    playing && !animationPlayed ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <Lottie 
                    play 
                    loop={false} 
                    animationData={animationData} 
                    onComplete={onComplete}
                    style={styles}
                />
            </div>
        </div> : null
    );
}


