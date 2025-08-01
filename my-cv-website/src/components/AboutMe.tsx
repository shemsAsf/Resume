"use client";

import Line from "./Ui/Line";

export default function AboutMe() {
	return (
		<div className="w-full">
			<div className="w-full lg:w-2/3 mb-4">
				<h2 className="heading-title">About Me</h2>
				<p className="heading-subtitle">My line of work</p>
				<Line width="sm:w-1/3 w-full" />
			</div>
			{/* Content Section */}
			<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
				<img
					src="/Img/MyPicture.jpg"
					alt="Your Photo"
					className="w-full max-w-[300px] object-cover shadow-lg"
				/>

				<div className="w-full sm:w-2/3 text-[clamp(1rem,1.5vw,1.5rem)] text-left sm:text-right leading-relaxed">
					<p>
						I’m an enthusiastic and creative developer with a strong focus on{" "}
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