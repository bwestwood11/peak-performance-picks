"use client";

import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-svh left-0 right-0 z-[100] fixed top-[120px]">
      <div
        className="h-[3px] bg-foreground block opacity-80 backdrop-blur-2xl rounded-3xl"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
