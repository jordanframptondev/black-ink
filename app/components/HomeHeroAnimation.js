"use client";
import BlackInkLogo from '@/public/images/black-ink-logo-cream.png';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import React from "react";

export function HomeHeroAnimation() {
  const [playing, setPlaying] = React.useState(true);

  React.useEffect(() => {
    // Add/remove no-scroll class on body when animation is playing
    if (playing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [playing]);

  return (
    <div className="h-screen w-screen">
      <div 
        className={`z-50 fixed top-0 left-0 right-0 bottom-0 transition-opacity duration-1000 ${
          playing ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <LottiePlayer setPlaying={setPlaying} />
      </div>
      <div 
        className={`transition-opacity duration-1000 ${
          playing ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Hero />
      </div>
    </div>
  );
}

function Hero() {
  return (
  <div className="-z-50 w-full h-full fixed top-0 left-0 bg-black flex flex-col justify-between items-center p-[40px]">
    <div className="flex justify-between w-full">{" "}</div>
    <div className="relative z-10 bg-black opacity-20" style={{width: '150px', height: '150px'}}>
      <Image src={BlackInkLogo} width={150} height={150} alt="Black Ink" className="absolute top-0 left-0" />
    </div>
      <h1 className="text-white text-2xl white font-ritma uppercase">into the black</h1>
  </div>);
}

function LottiePlayer({ setPlaying }) {
  const [dotLottie, setDotLottie] = React.useState(null);
  const [animationPlayed, setAnimationPlayed] = React.useState(true);

  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };

  React.useEffect(() => {
    const hasPlayed = localStorage.getItem("animation-played");
    setAnimationPlayed(Boolean(hasPlayed));
  }, []);

  React.useEffect(() => {
    function isReady() {
      dotLottie.setLayout({
        ...dotLottie.layout,
        fit: "cover",
      });
    }

    function onPlay() {
      setPlaying(true);
      // TODO: Uncomment when done testing
      // localStorage.setItem('animation-played', true);
      // setAnimationPlayed(true);
    }

    function onComplete() {
      setPlaying(false);
    }

    if (dotLottie) {
      dotLottie.addEventListener("ready", isReady);
      dotLottie.addEventListener("play", onPlay);
      dotLottie.addEventListener("complete", onComplete);
    }

    return () => {
      if (dotLottie) {
        dotLottie.addEventListener("ready", isReady);
        dotLottie.removeEventListener("play", onPlay);
        dotLottie.removeEventListener("complete", onComplete);
      }
    };
  }, [dotLottie, setPlaying]);

  return !animationPlayed ? (
    <DotLottieReact
      src="/animation.lottie"
      loop={false}
      autoplay={!animationPlayed}
      dotLottieRefCallback={dotLottieRefCallback}
      backgroundColor="#000000"
    />
  ) : null;
}
