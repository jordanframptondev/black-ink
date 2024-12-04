"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

/**
 * Helper info:
 * Represents the different types of events that can be dispatched.
 * https://github.com/LottieFiles/dotlottie-web/blob/main/packages/web/src/event-manager.ts
 */
// export type EventType =
//   | 'complete'
//   | 'frame'
//   | 'load'
//   | 'loadError'
//   | 'loop'
//   | 'pause'
//   | 'play'
//   | 'stop'
//   | 'destroy'
//   | 'freeze'
//   | 'unfreeze'
//   | 'render'
//   | 'ready';

export function LottiePlayer({ setPlaying, src, animationPlayed, setAnimationPlayed, backgroundColor, loop = false }) {
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

    function onLoadError(event) {
      console.error("Lottie load error", event);
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
      dotLottie.addEventListener('loadError', onLoadError);
    }

    return () => {
      if (dotLottie) {
        dotLottie.addEventListener("ready", isReady);
        dotLottie.removeEventListener("play", onPlay);
        dotLottie.removeEventListener("complete", onComplete);
      }
    };
  }, [dotLottie, setAnimationPlayed, setPlaying]);

  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={!animationPlayed}
      dotLottieRefCallback={dotLottieRefCallback}
      backgroundColor={backgroundColor}
    />
  );
}
