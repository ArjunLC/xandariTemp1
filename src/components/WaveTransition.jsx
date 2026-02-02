"use client";

import { useEffect, useRef } from "react";

export default function WaveTransition({
  position = "top", // "top" or "bottom"
  height = 160, // height in px
  bgColor = "#ffffff", // wave color
  top = 5,
}) {
  const pathRef = useRef(null);
  const lastScroll = useRef(0);
  const curve = useRef(0);
  const raf = useRef(null);

  useEffect(() => {
    const animate = () => {
      const scrollY = window.scrollY;
      const velocity = scrollY - lastScroll.current;
      lastScroll.current = scrollY;

      // 🔥 Convert scroll speed to curve strength
      let target = Math.min(Math.abs(velocity) * 3, 260);

      // 🧘 Dead zone → flatten when scroll stops
      if (Math.abs(velocity) < 0.5) target = 0;

      // 🌊 Smooth motion
      curve.current += (target - curve.current) * 0.18;

      // 🍃 Natural return to flat
      curve.current *= 0.88;

      const c = curve.current;

      const d =
        position === "top"
          ? `
            M0,0
            Q50,${c} 100,0
            L100,100
            L0,100
            Z
          `
          : `
            M0,100
            Q50,${100 - c} 100,100
            L100,0
            L0,0
            Z
          `;

      if (pathRef.current) {
        pathRef.current.setAttribute("d", d);
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [position]);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`absolute left-0 w-full pointer-events-none ${
        position === "top" ? `top-0` : "bottom-0"
      }`}
      style={{ height, top }}
    >
      <path ref={pathRef} fill={bgColor} />
    </svg>
  );
}
