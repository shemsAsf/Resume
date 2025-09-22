"use client";

import MenuHeader from "@/components/MenuHeader";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Hobbies from "@/components/Interests";
import ClickSpark from "@/components/Animations/ClickSpark";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Resume from "@/components/Resume";
import SectionWrapper from "@/components/Ui/ScrollSection";

export default function Home() {
    return (
        <div className="relative bg-zinc-900 font-helvetica-neue text-white">
            <ClickSpark>
                <Header />
                <div
                    className="snap-y h-[100vh] snap-proximity scroll-pt-[10vh]
                    overflow-y-scroll overflow-x-hidden relative z-0
                    pointer-events-auto"
                    id="scrollable-container"
                >
                    <section className="snap-start">
                        <MenuHeader />
                    </section>

                    <SectionWrapper>
                        <AboutMe />
                    </SectionWrapper>

                    <SectionWrapper>
                        <Resume />
                    </SectionWrapper>

                    <SectionWrapper>
                        <Skills />
                    </SectionWrapper>

                    <SectionWrapper>
                        <Projects />
                    </SectionWrapper>

                    <SectionWrapper>
                        <Hobbies />
                    </SectionWrapper>

                    <section className="snap-end">
                        <Contact />
                    </section>
                </div>
            </ClickSpark>
        </div>
    );
}