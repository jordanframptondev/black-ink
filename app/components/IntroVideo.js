"use client";

import { useEffect, useRef } from "react";
import "@/styles/intro-video.css";

export default function IntroVideo() {
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoContainer = videoContainerRef.current;
        const video = videoRef.current;

        // Check if the video has already been played
        const hasPlayed = sessionStorage.getItem('introVideoPlayed');

        // If the video has already been played, hide the video container
        if (hasPlayed) {
            videoContainer.style.display = 'none';
            return;
        }

        videoContainer.style.display = 'block';
        videoContainer.style.backgroundColor = '#2c0101';
        video.play();

        // Disable scrolling
        document.body.style.overflow = "hidden";

        const handleVideoEnd = () => {
            // Set session storage to indicate the video has been played
            sessionStorage.setItem('introVideoPlayed', 'true');
            // Fade out the video
            video.classList.add('fadeOut');
            // Re-enable scrolling
            document.body.style.overflow = "auto";
            // Hide the video container after 3 seconds
            setTimeout(() => {
                videoContainer.style.display = 'none';
            }, 3000);
        };

        const handleTimeUpdate = () => {
            // Change the background color of the video container after 4 seconds
            // this is so the background can start with red but then fade to transparent
            if (video.currentTime >= 4) {
                videoContainer.style.backgroundColor = 'transparent';
                video.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };

        // Add event listeners to the video
        video.addEventListener("ended", handleVideoEnd);
        video.addEventListener("timeupdate", handleTimeUpdate);

        // this will clean up the event listeners when the component unmount
        return () => {
            video.removeEventListener("ended", handleVideoEnd);
            video.removeEventListener("timeupdate", handleTimeUpdate);
            // Re-enable scrolling if the component unmounts
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div
            ref={videoContainerRef}
            className="videoContainer"
            style={{display: 'none'}}
        >
            <video ref={videoRef} className="video" src="/intro.mp4" muted/>
        </div>
    );
}
