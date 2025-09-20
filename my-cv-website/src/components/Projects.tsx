"use client";

import ProjectCards from "./ProjectCards";
import Line from "./Ui/Line";

export default function Projects() {
    return (
        <div>
            <div className="w-full mb-0 lg:mb-25" id="Projects">
                <h2 className="heading-title">Personal projects</h2>
                <Line width="sm:w-1/3 w-full" />
            </div>
            <ProjectCards />
        </div>
    );
}
