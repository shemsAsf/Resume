"use client";

import Line from "./Ui/Line";

export default function AboutMe() {
	return (
		<div className="w-full px-4 sm:px-0 max-w-screen-xl mx-auto">
			{/* Title Section */}
			<div className="w-full sm:w-2/3 mb-4">
				<h2 className="text-[clamp(2rem,8vw,4rem)] font-unbound text-zinc-200 break-words leading-none mb-0">
					About Me
				</h2>
				<p className="text-[clamp(1rem,3vw,1.25rem)] text-zinc-400 -mt-2 leading-none mb-0">
					My line of work
				</p>
				<div className="-mt-2">
					<Line width="w-1/2" />
				</div>
			</div>
			{/* Content Section */}
			<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
				<img
					src="/Img/MyPicture.jpg"
					alt="Your Photo"
					className="w-full sm:w-1/3 max-w-[240px] object-cover shadow-lg"
				/>

				<div className="w-full sm:w-2/3 text-[clamp(1rem,2.5vw,1.25rem)] text-zinc-100 text-left sm:text-right leading-relaxed">
					<p>
						I’m a pragmatic and creative developer with a strong focus on{" "}
						<strong>clean architecture, scalability, and maintainability.</strong> I enjoy
						designing <strong>modular systems, building thoughtful user experiences, and
							structuring codebases</strong> that are easy to extend and collaborate on.
					</p>
					<br />
					<p>
						Whether it’s client-side interfaces or backend logic, I aim for{" "}
						<strong>clarity, reusability, and long-term value</strong> in every project.
					</p>
				</div>
			</div>
		</div>
	);
}