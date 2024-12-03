"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

export function LottiePlayer({ animationPlayed, setAnimationPlayed, setPlaying, src, backgroundColor, loop = false, autoplay = false }) {
  const [dotLottie, setDotLottie] = React.useState(null);

  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };

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
      setAnimationPlayed(true);
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
  }, [dotLottie, setAnimationPlayed, setPlaying]);

  return !animationPlayed ? (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={!animationPlayed || autoplay}
      dotLottieRefCallback={dotLottieRefCallback}
      backgroundColor={backgroundColor}
    />
  ) : null;
}
