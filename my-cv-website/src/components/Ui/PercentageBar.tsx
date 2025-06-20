"use client";

import React from "react";

export default function PercentageBar({ percentage, width }: { percentage: number; width?: string }) {
  return (
    <div className={`${width ?? "w-8/9"} h-2 rounded-full bg-zinc-300/40 my-6 relative`}>
      <div
        className="absolute top-0 left-0 h-2 rounded-full bg-zinc-200"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
