import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

export function LottiePlayer({ setPlaying }) {
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
