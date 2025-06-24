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
		<div className="bg-gradient-to-br from-zinc-800/80 to-zinc-950/80 text-white p-6 sm:p-10 rounded-2xl shadow-lg w-full">
			<div className="flex justify-between items-start gap-4">
				<div>
					<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase">{title}</h2>
					<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300">{subtitle}</p>
				</div>
				<Image
					src={img}
					alt="Company Logo"
					width={80}
					height={80}
					className="object-contain"
				/>
			</div>
			<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mt-4 leading-relaxed">
				{text}
			</p>
		</div>
	);
}
