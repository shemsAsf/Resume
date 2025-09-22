"use client";

import React from "react";

export default function Line({ width }: { width: string }) {
  return (
    <div className={`${width} h-[2px] mt-8 bg-white my-2`} />
  );
}