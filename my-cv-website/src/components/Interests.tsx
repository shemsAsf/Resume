"use client";

import Line from "./Ui/Line";
import Carousel from "./Ui/Carousel/Carousel";

export default function Interest() {
	return (
		<div className="flex flex-col min-h-[85vh]" id="Interest">
			<div className="w-full mb-10 lg:mb-30">
				<h2 className="heading-title">Personal Interests</h2>
				<p className="heading-subtitle">When I’m not coding, here’s what lights me up.</p>
				<Line width="sm:w-1/3 w-full" />
			</div>
			<div className="flex flex-col-reverse lg:flex-row w-full justify-between">
				<div className="flex justify-center sm:justify-start">
					<Carousel />
				</div>
				<div className="text-[clamp(1rem,1.5vw,1.5rem)] mb-20 lg:mb-0 text-left lg:text-right w-full sm:w-2/3">
					<p className="mb-6">
						What truly <span className="italic">fascinate</span> me about computer science is
						understanding <strong>how things works at their core.</strong>
					</p>

					<p className="mb-6">
						From a young age, I&apos;ve been captivated by the process of discovering how systems, software,
						and algorithms come together and how we can use them to do as we please.{" "}
						<strong>
							It&apos;s not just about learning to code, it&apos;s about unraveling and mastering the logic behind
							the tools we use every day and how they shape our world.
						</strong>{" "}
						This curiosity fuels my desire to not only keep learning but also to bring my growing skills
						and knowledge into the teams I work with.
					</p>

					<p className="">
						I&apos;m passionate about applying what I know, collaborating with others, and using technology
						to create meaningful solutions.
					</p>
				</div>
			</div>
		</div>
	);
}
