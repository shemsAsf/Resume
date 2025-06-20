"use client";

import CapsuleText from './CapsuleText';
import React from "react";

export default function CapsuleTextList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <CapsuleText key={index} text={item} />
      ))}
    </div>
  );
}