"use client";

import { easeOut, motion } from "framer-motion";
import MenuHeader from "@/components/MenuHeader";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Hobbies from "@/components/Hobbies";
import ClickSpark from "@/components/Animations/ClickSpark/ClickSpark";
import RandomGlowBackground from "@/components/Ui/RandomGlowBackground";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Resume from "@/components/Resume";

const sectionAnimation = {
  initial: { opacity: 0.3, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
  viewport: { once: false, amount: 0.1 },
};

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-zinc-900 font-helvetica-neue text-white overflow-hidden">
        <RandomGlowBackground count={15} />
        <ClickSpark>

          <Header />
          <MenuHeader />

          <main className="w-[90vw] mx-auto flex flex-col gap-20 px-8 py-6 sm:px-6 space-y-8">
            <motion.section {...sectionAnimation}>
              <AboutMe />
            </motion.section>

            <motion.section {...sectionAnimation}>
              <Resume />
            </motion.section>

            <motion.section {...sectionAnimation}>
              <Skills />
            </motion.section>

            <motion.section {...sectionAnimation}>
              <Projects />
            </motion.section>

            <motion.section {...sectionAnimation}>
              <Hobbies />
            </motion.section>
          </main>

          <Contact />
        </ClickSpark>
        
      </div>
    </>
  );
}
