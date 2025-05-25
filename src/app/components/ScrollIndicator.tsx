'use client';
import React, { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScroll(docHeight > 0 ? scrolled / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-[#37513a] transition-all duration-300"
        style={{ width: `${scroll * 100}%` }}
      />
    </div>
  );
}
