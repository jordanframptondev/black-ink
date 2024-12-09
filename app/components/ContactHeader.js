"use client";

import { useEffect, useState } from 'react';
import { Header } from './Header';

export default function ContactHeader() {
  const [headerColor, setHeaderColor] = useState("cream");

  useEffect(() => {
    const handleResize = () => {
        setHeaderColor(window.innerWidth >= 768 ? "cream" : "black");
    };

    handleResize(); // Set initial color
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Header color={headerColor}/>
  )
}
