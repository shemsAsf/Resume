"use client";

import React from "react";

export default function Line({ width }: { width: string }) {
  return (
    <div className={`${width} h-px bg-white my-6`} />
  );
}