"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
}

export function RainbowButton({
  children = "Click Me",
  className = "",
  icon,
  showIcon = false,
  ...props
}: RainbowButtonProps) {
  return (
    <>
      <style>{`
        @keyframes rotate {
          100% {
            transform: rotate(1turn);
          }
        }
    
        .rainbow::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: -50%;
          top: -50%;
          width: 200%;
          height: 200%;
          background-position: 100% 50%;
          background-repeat: no-repeat;
          background-size: 50% 30%;
          filter: blur(6px);
          background-image: linear-gradient(135deg, #10b981, #06b6d4, #6366f1, #f43f5e, #eab308, #10b981);
          animation: rotate 4s linear infinite;
        }
      `}</style>
      <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 inline-flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 shadow-lg cursor-pointer">
        <button
          className={`px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur flex items-center gap-2 transition hover:bg-gray-900/70 ${className}`}
          {...props}
        >
          {icon || (showIcon && <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />)}
          <span>{children}</span>
          {showIcon && <ArrowRight className="w-4 h-4 text-gray-300 transition-transform group-hover:translate-x-1" />}
        </button>
      </div>
    </>
  );
}

// Default export as requested in the specification
export default function Example() {
  return (
    <>
      <style>{`
        @keyframes rotate {
          100% {
            transform: rotate(1turn);
          }
        }
    
        .rainbow::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: -50%;
          top: -50%;
          width: 200%;
          height: 200%;
          background-position: 100% 50%;
          background-repeat: no-repeat;
          background-size: 50% 30%;
          filter: blur(6px);
          background-image: linear-gradient(#FFF);
          animation: rotate 4s linear infinite;
        }
      `}</style>
      <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
        <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">
          Click Me
        </button>
      </div>
    </>
  );
}
