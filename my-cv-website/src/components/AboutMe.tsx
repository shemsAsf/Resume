"use client";

import Line from "./Ui/Line";

export default function AboutMe() {
	return (
		<>
			<div className="w-1/3 mb-20">
				<h2 className="text-8xl font- font-unbound text-zinc-200  whitespace-nowrap">About Me</h2>
				<p className="text-2xl"> My line of work</p>
				<Line width="w-full" />
			</div>
			<div className="flex flex-col sm:flex-row items-center justify-between">

				<img
					src="/Img/MyPicture.jpg"
					alt="Your Photo"
					className="h-full object-cover shadow-lg block mx-auto sm:mx-0 sm:mr-6 mb-6 sm:mb-0"
				/>

				<div className="text-lg sm:text-3xl sm:max-w-5xl text-right">
					<p>
						I’m a pragmatic and creative developerwith a strong focus 
						on <strong>clean architecture, scalability,	and 
						maintainability.</strong> I enjoy designing <strong>modular systems, 
						building thoughtful user experiences, and structuring 
						codebases</strong> that are easy to extend and collaborate on.
					</p>
					<br/>
					<p>
						Whether it’s client-side interfaces or backend logic, 
						I aim for <strong>clarity, reusability, and long-term 
						value</strong> in every project.
					</p>

				</div>
			</div>
		</>
	);
}
