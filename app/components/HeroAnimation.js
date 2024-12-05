"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

export function HeroAnimation() {
  const [dotLottie, setDotLottie] = React.useState(null);
  const [playing, setPlaying] = React.useState(true);
  const [animationPlayed, setAnimationPlayed] = React.useState(false);

  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };

  React.useEffect(() => {
    const hasPlayed = sessionStorage.getItem("animationPlayed") === "true";
    if (hasPlayed) {
      setPlaying(false);
      setAnimationPlayed(true);
    }
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
    }

    function onComplete() {
      setPlaying(false);
      sessionStorage.setItem("animationPlayed", "true");
      setTimeout(() => {
        setAnimationPlayed(true);
      }, 1000);
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

  return !animationPlayed ? (
    <div
      className={`z-[9999] fixed top-0 left-0 right-0 transition-opacity duration-1000 ease-out ${
        playing && !animationPlayed
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <DotLottieReact
        src="/Ink_Intro.lottie"
        loop={false}
        autoplay={!animationPlayed}
        dotLottieRefCallback={dotLottieRefCallback}
        backgroundColor="#000000"
      />
    </div>
  ) : null;
}
