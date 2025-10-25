"use client";

import { useTranslation } from "react-i18next";

export default function RemoteExperience() {
    const { t } = useTranslation();

    const remoteSkills = t("remote_skills", { returnObjects: true }) as { title: string; description: string }[];

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
