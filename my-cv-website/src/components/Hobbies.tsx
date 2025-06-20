"use client";

import { Paintbrush, Gamepad2, Dumbbell, Music, Camera } from "lucide-react";
import Line from "./Ui/Line";
import Carousel from "./Ui/Carousel/Carousel";

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
		<section>
			<div className="w-1/3 mb-30">
				<h2 className="text-8xl font-unbound text-zinc-200 whitespace-nowrap">Personal Interests</h2>
				<p className="text-2xl">When I’m not coding, here’s what lights me up.</p>
				<Line width="w-full" />
			</div>
			<div className="flex flex-row w-full justify-between">
				<Carousel />
				<div className="text-lg sm:text-3xl sm:max-w-5xl text-right w-2/3">
					<p className="mb-6">
						What truly <span className="italic">fascinate</span> me about computer science is
						understanding <strong>how things works at their core.</strong>
					</p>

					<p className="mb-6">
						From a young age, I’ve been captivated by the process of discovering how systems, software,
						and algorithms come together and how we can use them to do as we please.{" "}
						<strong>
							It's not just about learning to code, it's about unraveling and mastering the logic behind
							the tools we use every day and how they shape our world.
						</strong>{" "}
						This curiosity fuels my desire to not only keep learning but also to bring my growing skills
						and knowledge into the teams I work with.
					</p>

					<p className="">
						I’m passionate about applying what I know, collaborating with others, and using technology
						to create meaningful solutions.
					</p>
				</div>
			</div>
		</section>
	);
}
