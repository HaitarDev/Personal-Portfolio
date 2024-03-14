"use client";

import { CSSProperties, useEffect, useRef } from "react";

export const AnimatedGradientBorderTW: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={boxRef}
      style={
        {
          "--angle": "0deg",
        } as CSSProperties
      }
      className="relative"
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-full animate-border"></div>
      </div>
      <div className="relative z-10 p-2 rounded-full bg-white">{children}</div>
    </div>
  );
};
