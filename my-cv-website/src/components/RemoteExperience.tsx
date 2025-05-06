"use client";

import { Laptop2, Users, Clock4, Globe2, GitBranch } from "lucide-react";

const remoteSkills = [
    {
        icon: <Laptop2 size={32} />,
        title: "Remote Work Experience",
        description: "Comfortable working in a Scrum environment with daily standups and sprints.",
    },
    {
        icon: <Users size={32} />,
        title: "Distributed Teams",
        description: "Collaborated with international teams across multiple time zones and cultures.",
    },
    {
        icon: <GitBranch size={32} />,
        title: "Collaboration Tools",
        description: "Proficient in Teams, Zoom, Jira, Trello, Notion, GitHub and other PM tools.",
    },
    {
        icon: <Clock4 size={32} />,
        title: "Asynchronous Communication",
        description: "Skilled in writing clear documentation and communicating progress async.",
    },
    {
        icon: <Globe2 size={32} />,
        title: "Self-Discipline",
        description: "Highly autonomous with strong time-management skills in remote settings.",
    },
];

export default function RemoteWork() {
    return (
        <section className="py-20 px-6 text-gray-800">
            <div className="max-w-5xl mx-auto text-left mb-12">
                <h2 className="text-6xl font-semibold text-gray-800">
                    Remote Work Skills
                </h2>
                <p className="text-lg text-gray-600">
                    I thrive in remote environments thanks to strong collaboration habits and discipline.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {remoteSkills.map((skill, idx) => (
                    <div 
                        key={idx} 
                        className="rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    >
                        <div className="mb-4 text-red-500">{skill.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                        <p className="text-sm text-gray-700">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
