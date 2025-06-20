"use client";

import React from "react";
import Image from "next/image";

export default function ResumeCapsule({
  title,
  subtitle,
  text,
  img,
}: {
  title: string;
  subtitle: string;
  text: string;
  img: string;
}) {
  return (
    <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-950/80 text-white p-10 rounded-2xl shadow-lg w-full max-w-2xl h-100">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold uppercase">{title}</h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>
        <Image
          src={img}
          alt="Company Logo"
          width={90}
          height={90}
          className="ml-6 object-contain"
        />
      </div>
      <p className="text-xl text-gray-200 mt-6 leading-relaxed">{text}</p>
    </div>
  );
}
