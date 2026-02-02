"use client";

import { useEffect, useRef, useId } from "react";

export default function WaveImage({ src }) {
  const wrapperRef = useRef(null);
  const pathRef = useRef(null);

  const curveRef = useRef(0);
  const lastScroll = useRef(0);
  const rafRef = useRef(null);
  const clipId = useId();

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current || !pathRef.current) return;

      const { width: w, height: h } =
        wrapperRef.current.getBoundingClientRect();

      const scroll = window.scrollY;
      const velocity = scroll - lastScroll.current;
      lastScroll.current = scroll;

      // Smooth scroll-based curve
      curveRef.current += velocity * 0.2;
      curveRef.current *= 0.85;

      // 🔑 SAFE curve for small images
      const maxCurve = Math.min(28, h * 0.06);
      const curve = Math.max(-maxCurve, Math.min(maxCurve, curveRef.current));

      // 🔑 DO NOT CUT IMAGE HEIGHT
      const topY = 20;
      const bottomY = h - 20;

      pathRef.current.setAttribute(
        "d",
        `
        M 0 ${topY}
        Q ${w / 2} ${topY - curve} ${w} ${topY}
        L ${w} ${bottomY}
        Q ${w / 2} ${bottomY - curve} 0 ${bottomY}
        Z
        `
      );

      rafRef.current = requestAnimationFrame(update);
    };

    update();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-full overflow-hidden">
      {/* SVG Clip */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <path ref={pathRef} />
          </clipPath>
        </defs>
      </svg>

      {/* Image */}
      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `url(#${clipId})` }}
      />
    </div>
  );
}
