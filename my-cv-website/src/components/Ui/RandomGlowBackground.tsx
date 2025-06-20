'use client';

import React, { useEffect, useMemo, useState } from 'react';

interface GlowDot {
	x: number;
	y: number;
	size: number;
	delay: number;
}

export default function RandomGlowBackground({ count = 30 }: { count?: number }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const dots: GlowDot[] = useMemo(() => {
		return Array.from({ length: count }).map(() => ({
			x: Math.random() < 0.5
				? -40 + Math.random() * 30
				: 60 + Math.random() * 30,
			y: Math.random() * 130 - 15,
			size: 1000 + Math.random() * 250,
			delay: Math.random() * -20,
		}));
	}, [count]);

	if (!mounted) return null;

	return (
		<div className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-screen opacity-40 z-0 overflow-visible">
			{dots.map((dot, i) => (
				<div
					key={i}
					className="dot"
					style={{
						position: "absolute",
						width: dot.size,
						height: dot.size,
						top: `${dot.y}%`,
						left: `${dot.x}%`,
						background: 'radial-gradient(circle at center, rgba(40, 255, 200, 0.8) 0%, rgba(40, 255, 200, 0) 70%)',
						filter: `blur(${dot.size / 2}px)`,
						transform: `scale(${Math.random() * 1.5 + 0.8}) skew(${Math.random() * 10}deg, ${Math.random() * 10}deg)`,
						animation: `move-glow ${20 + Math.random() * 30}s ease-in-out infinite alternate`,
					} as React.CSSProperties}
				/>
			))}
		</div>
	);
}
