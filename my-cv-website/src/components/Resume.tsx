"use client";

import Line from "./Ui/Line";
import ResumeCapsule from "./Ui/ResumeCapsule";

export default function Resume() {
    return (
        <>
            <div className="w-1/3">
                <h2 className="text-8xl font- font-unbound text-zinc-200 whitespace-nowrap">My Resume</h2>
                <Line width="w-full" />
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-20">
                    <h3 className="text-2xl font-bold mt-20">Professional Experience</h3>
                    <ResumeCapsule 
                        title="IVALUA - MONTPELLIER" 
                        subtitle="Apprenticeship | 2023 (2 years)"
                        text="During my internship at Ivalua, a global leader in 
                        cloud-based procurement and spend management software, I 
                        worked on improving an internal tool used by the R&D team. 
                        My contributions helped streamline development workflows 
                        and enhance productivity across engineering teams."
                        img="/Img/Ivalua.png"/>

                    <ResumeCapsule 
                        title="HARMONESSENS - SAINT GELY DU FESC" 
                        subtitle="Freelance | 2024 (3 month)"
                        text="I developed a website in React for a naturopath, 
                        featuring a custom-built appointment booking system with 
                        an integrated calendar. The site includes presentation, 
                        contact, and reservation pages, providing a complete and 
                        user-friendly experience for both the practitioner and 
                        clients."
                        img="/Img/harmonessens.png"/>

                    <ResumeCapsule 
                        title="DEGRIFF PC - SAINT GELY DU FESC" 
                        subtitle="Internship | 2021 (1 month)"
                        text="Degriff PC is a local hardware store 
                        known for its personalized service and repair 
                        expertise. In addition to selling computer 
                        hardware and accessories, the company operates 
                        a workshop where they offer repair services for 
                        various IT devices, including desktops, laptops, 
                        and other peripherals."
                        img="/Img/degriff.png"/>
                </div>
                <div className="flex flex-col gap-20">
                    <h3 className="text-2xl font-bold mt-20">Education</h3>
                    <ResumeCapsule 
                        title="EPSI - MONTPELLIER" 
                        subtitle="Master's Degree | 2023 - 2025"
                        text="I joined EPSI in 2023 to pursue a Mastère in 
                        Information Systems, a five-year RNCP level 7 degree 
                        in computer science. The program focuses on project-based 
                        learning and practical training in areas like software 
                        architecture, DevOps, and data engineering, providing me 
                        with strong technical expertise and preparing me for advanced 
                        engineering roles."
                        img="/Img/Epsi.png"/>

                    <ResumeCapsule 
                        title="CMI - MONTPELLIER SCIENCE UNIVERSITY" 
                        subtitle="Bachelor's Degree | 2020 - 2023"
                        text="I completed the first three years of the Cursus Master en 
                        Ingénierie (CMI) at Montpellier Science University, earning a 
                        Bachelor’s degree as part of this selective 
                        pathway in the French FIGURE network, which combines enriched 
                        theory, lab work and project-based learning providing a solid 
                        foundation in computer science, mathematics, and software engineering"
                        img="/Img/CMI.png"/>
                </div>
            </div>
        </>
    );
}
