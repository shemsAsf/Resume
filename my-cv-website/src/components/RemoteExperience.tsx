"use client";

const remoteSkills = [
	{
		title: "Remote Work Experience",
		description: "Comfortable working in a Scrum environment with daily standups and sprints.",
	},
	{
		title: "Distributed Teams",
		description: "Collaborated with international teams across multiple time zones and cultures.",
	},
	{
		title: "Collaboration Tools",
		description: "Proficient in Teams, Zoom, Jira, Trello, Notion, GitHub and other PM tools.",
	},
	{
		title: "Asynchronous Communication",
		description: "Skilled in writing clear documentation and communicating progress async.",
	},
	{
		title: "Self-Discipline",
		description: "Highly autonomous with strong time-management skills in remote settings.",
	},
	{
		title: "Technical Setup",
		description: "Experienced in maintaining a reliable home office with the tools and environment necessary for productive remote work.",
	},
];

export default function RemoteExperience() {
	return (
		<section className="py-10 text-gray-800">
			<div className="flex flex-wrap gap-8 justify-start max-w-6xl mx-auto">
				{remoteSkills.map((skill, idx) => (
					<div
						key={idx}
						className="w-full sm:w-[45%] bg-gradient-to-r from-stone-300/80 to-stone-100/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out backdrop-blur-sm"

					>
						<h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
						<p className="text-sm text-gray-700">{skill.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
