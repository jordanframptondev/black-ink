"use client";
import BlackInkLogo from '@/public/images/black-ink-logo-cream.png';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import React from "react";

export function HomeHeroAnimation() {
  const [playing, setPlaying] = React.useState(true);
  return (
    <div className={`h-screen w-screen`}>
      {playing
      ? <div className="z-50 fixed top-0 left-0"><LottiePlayer setPlaying={setPlaying} /></div>
      : <Hero />}
    </div>
  );
}

function Hero() {
  return (
  <div className="-z-50 w-full h-full fixed top-0 left-0 bg-black flex flex-col justify-between items-center p-[40px]">
    <div className="flex justify-between w-full">{" "}</div>
    <Image src={BlackInkLogo} width={150} height={150} alt="Black Ink" />
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
      console.log("SHES DONE");
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
