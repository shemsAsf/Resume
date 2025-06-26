"use client";

import CapsuleText from './CapsuleText';
import React from "react";

export default function CapsuleTextList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 text-[clamp(.9rem,.5vw,2rem)]">
      {items.map((item, index) => (
        <CapsuleText key={index} text={item} />
      ))}
    </div>
  );
}