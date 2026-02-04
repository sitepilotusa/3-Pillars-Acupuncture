"use client";

import { useEffect, useState } from "react";

export default function SuccessView({ label, animate: controlledAnimate, size = "default" }) {
  const [internalAnimate, setInternalAnimate] = useState(false);
  const animate = controlledAnimate !== undefined ? controlledAnimate : internalAnimate;

  useEffect(() => {
    if (controlledAnimate === undefined) {
      const timer = setTimeout(() => setInternalAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [controlledAnimate]);

  return (
    <div
      className={`success-view ${animate ? "is-animated" : ""} ${
        size === "small" ? "success-view--small" : ""
      }`}
    >
      <div className="success-view__ring">
        <div className="success-view__badge">
          <div className="success-view__badge-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={size === "small" ? 32 : 38}
              height={size === "small" ? 32 : 38}
              fill="none"
            >
              <defs>
                <linearGradient id="success-checkmark-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--button-dark-start)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--button-dark-end)" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                d="M20 6 9 17l-5-5"
                stroke="url(#success-checkmark-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="success-view__pulse" />
      </div>
      <p className="success-view__label">{label}</p>
    </div>
  );
}
