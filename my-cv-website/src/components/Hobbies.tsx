"use client";

import { Paintbrush, Gamepad2, Dumbbell, Music, Camera } from "lucide-react";

const hobbies = [
	{
		icon: <Dumbbell size={32} />,
		title: "Fitness",
		description: "I hit the gym regularly — it keeps my head clears and train my disipline.",
	},
	{
		icon: <Paintbrush size={32} />,
		title: "Drawing & Art",
		description: "Art has always been a lasting passion of mine. I love sketching and creating things..",
	},
	{
		icon: <Music size={32} />,
		title: "Music",
		description: "I love listening to my favorite artists like IDKHow, Saint Motel or Glass Animals.",
	},
	{
		icon: <Gamepad2 size={32} />,
		title: "Video Games & Game Dev",
		description: "I really enjoy playing video games, and even make some in my spare time.",
	},
	{
		icon: <Camera size={32} />,
		title: "Drone Photography",
		description: "Flying my drone and capturing the world from above feels very liberating, I dream of taking it on a journey around the globe.",
	},
];

export default function Hobbies() {
	return (
		<section className="py-20 px-6 text-gray-800">
			<div className="max-w-5xl mx-auto text-left mb-12">

				<h2 className="text-6xl font-semibold text-gray-800">
					Hobbies & Interests
				</h2>
				<p className="text-lg text-gray-600">
					When I’m not coding, here’s what lights me up.
				</p>
			</div>

			<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
				{hobbies.map((hobby, idx) => (
					<div 
						key={idx}
						className="rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
					>
						<div className="mb-4 text-red-500">{hobby.icon}</div>
						<h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
						<p className="text-sm text-gray-700">{hobby.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
