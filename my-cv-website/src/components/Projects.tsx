"use client";

import ProjectCards from "./ProjectCards";
import Line from "./Ui/Line";

export default function Projects() {
    return (
        <>
            <div className="w-1/3 mb-25">
                <h2 className="text-8xl font-unbound text-zinc-200 whitespace-nowrap">Personal projects</h2>
                <Line width="w-full" />
            </div>
            <ProjectCards />
        </>
    );
}
