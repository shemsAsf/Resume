"use client";

import ProjectCards from "./ProjectCards";
import Line from "./Ui/Line";

export default function Projects() {
    return (
        <>
            <div className="w-1/3 mb-10 lg:mb-25">
                <h2 className="heading-title">Personal projects</h2>
                <Line width="w-full" />
            </div>
            <ProjectCards />
        </>
    );
}
