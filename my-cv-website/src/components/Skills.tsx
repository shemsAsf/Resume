"use client";

import Line from "./Ui/Line";
import CapsuleTextList from "./Ui/CapsuleText/CapsuleTextList";
import SkillPercentageBar from "./Ui/SkillPercentageBar";
import RemoteExperience from "./RemoteExperience";

export default function Skills() {
	return (
		<>
			<div className="w-1/3">
				<h2 className="heading-title">Skills</h2>
				<Line width="w-full" />
			</div>
			<div className="flex flex-col lg:flex-row justify-between mt-10">
				<div className="flex flex-col w-full lg:w-1/3 gap-5 lg:gap-20">
					<div>
						<h3 className="text-2xl font-bold mb-3">Web programming</h3>
						<CapsuleTextList items={["HTML5", "CSS3", "JavaScript", "TypeScript"]} />
					</div>
					<div>
						<h3 className="text-2xl font-bold mt-5 mb-3">Frameworks</h3>
						<CapsuleTextList items={["React", "Next.js", "Flask", "Django", "Node.js"]} />
					</div>
					<div>
						<h3 className="text-2xl font-bold mt-5 mb-3">Databases</h3>
						<CapsuleTextList items={["MySQL", "Oracle", "PostgreSQL", "MongoDB"]} />
					</div>
					<div>
						<h3 className="text-2xl font-bold mt-5 mb-3">Development Tools</h3>
						<CapsuleTextList items={["Git", "Maven", "Docker", "Kubernetes", "Vercel", "Render"]} />
					</div>
					<div>
						<h3 className="text-2xl font-bold mt-5 mb-3">Environments</h3>
						<CapsuleTextList items={["Windows", "Linux (Ubuntu)"]} />
					</div>
					<div>
						<h3 className="text-2xl font-bold mt-5 mb-3">Soft Skills</h3>
						<CapsuleTextList
							items={[
								"Collaborative Mindset",
								"Adaptability",
								"Analytical Problem Solving",
								"Communication",
								"Proactive Autonomy",
							]}
						/>
					</div>


				</div>
				<div className="flex flex-col w-full lg:w-1/2 gap-20 mt-20 lg:mt-0">
					<div className="flex flex-col gap-5">
						<h3 className="text-2xl font-bold mb-3">Languages</h3>
						<SkillPercentageBar title="C# (.net)" percent={75} />
						<SkillPercentageBar title="Node.js" percent={80} />
						<SkillPercentageBar title="React" percent={90} />
						<SkillPercentageBar title="SQL" percent={85} />
						<SkillPercentageBar title="TypeScript" percent={80} />
					</div>
					<div>
						<h3 className="text-2xl font-bold mb-3">Remote work skills</h3>
						<RemoteExperience />
					</div>
				</div>
			</div>
		</>
	);
}
