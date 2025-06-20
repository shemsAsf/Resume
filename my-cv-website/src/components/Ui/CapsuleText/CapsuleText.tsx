"use client";

import React from "react";

export default function CapsuleText({ text }: { text: string }) {
  return (
    <div className="rounded-full border-b-neutral-300 border-1 bg-neutral-100/15 px-4 py-1 inline-block">
      {text}
    </div>
  );
}