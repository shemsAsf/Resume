"use client";

import Line from "./Ui/Line";
import ResumeCapsule from "./Ui/ResumeCapsule";

export default function Resume() {
    return (
        <div className="w-full">
            {/* Title */}
            <div className="w-full mb-12">
                <h2 className="heading-title">
                    My Resume
                </h2>
                <Line width="sm:w-1/3 w-full" />
            </div>

            <div className="w-full grid sm:grid-cols-2 gap-10">
                {/* Column 1: Professional Experience */}
                <div className="flex flex-col gap-10">
                    <h3 className="text-xl sm:text-2xl font-bold sm:mb-3 -mb-3 sm:text-center lg:text-left text-left">
                        Professional Experience
                    </h3>
                    <ResumeCapsule
                        title="IVALUA - MONTPELLIER"
                        subtitle="Apprenticeship | 2023 (2 years)"
                        text="During my internship at Ivalua, a global leader in cloud-based procurement and spend management software, I worked on improving an internal tool used by the R&D team. My contributions helped streamline development workflows and enhance productivity across engineering teams."
                        img="/Img/Ivalua.png"
                    />

                    <ResumeCapsule
                        title="HARMONESSENS - SAINT GELY DU FESC"
                        subtitle="Freelance | 2024 (3 months)"
                        text="I developed a website in React for a naturopath, featuring a custom-built appointment booking system with an integrated calendar. The site includes presentation, contact, and reservation pages."
                        img="/Img/harmonessens.png"
                    />

                    <ResumeCapsule
                        title="DEGRIFF PC - SAINT GELY DU FESC"
                        subtitle="Internship | 2021 (1 month)"
                        text="Degriff PC is a local hardware store known for its personalized service and repair expertise. In addition to selling computer hardware, they operate a workshop offering device repairs."
                        img="/Img/degriff.png"
                    />
                </div>

                {/* Column 2: Education */}
                <div className="flex flex-col gap-10">
                    <h3 className="text-xl sm:text-2xl font-bold sm:mb-3 -mb-3 sm:text-center lg:text-left text-left">
                        Education
                    </h3>
                    <ResumeCapsule
                        title="EPSI - MONTPELLIER"
                        subtitle="Master's Degree | 2023 - 2025"
                        text="I joined EPSI in 2023 to pursue a Mastère in Information Systems. The program focuses on software architecture, DevOps, and data engineering."
                        img="/Img/Epsi.png"
                    />

                    <ResumeCapsule
                        title="CMI - MONTPELLIER SCIENCE UNIVERSITY"
                        subtitle="Bachelor's Degree | 2020 - 2023"
                        text="I completed the first three years of the CMI at Montpellier Science University, earning a Bachelor's as part of the selective FIGURE network."
                        img="/Img/CMI.png"
                    />
                </div>
            </div>
        </div>
    );
}
