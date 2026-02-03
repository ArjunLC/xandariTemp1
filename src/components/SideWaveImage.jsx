"use client";

import { useEffect, useRef, useId } from "react";

export default function SideWaveImage({ src, curveRef }) {
  const wrapperRef = useRef(null);
  const pathRef = useRef(null);
  const clipId = useId();

  const currentCurve = useRef(0);
  const velocity = useRef(0);

  const updatePath = (p) => {
    if (!wrapperRef.current || !pathRef.current) return;

    const { width: w, height: h } =
      wrapperRef.current.getBoundingClientRect();

    const maxCurve = Math.min(60, w * 0.12);
    const curve = maxCurve * p;

    const inset = 18;
    const leftX = inset;
    const rightX = w - inset;

    pathRef.current.setAttribute(
      "d",
      `
      M ${leftX} 0
      Q ${leftX - curve} ${h / 2} ${leftX} ${h}
      L ${rightX} ${h}
      Q ${rightX - curve} ${h / 2} ${rightX} 0
      Z
    `
    );
  };

  useEffect(() => {
    let raf;

    const animate = () => {
      // 🔥 spring physics
      velocity.current +=
        (curveRef.current - currentCurve.current) * 0.14;
      velocity.current *= 0.75; // damping
      currentCurve.current += velocity.current;

      updatePath(currentCurve.current);
      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-full overflow-hidden">
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
            <path ref={pathRef} />
          </clipPath>
        </defs>
      </svg>

      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `url(#${clipId})` }}
      />
    </div>
  );
}
