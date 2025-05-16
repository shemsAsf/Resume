"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import RemoteExperience from "@/components/RemoteExperience";
import Experience from "@/components/Experience";
import School from "@/components/School";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Hobbies from "@/components/Hobbies";

const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: false, amount: 0.3 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 text-gray-900 font-sans">
      <Header />

      <main className="max-w-5xl mx-auto px-8 py-6 sm:px-6 sm:py-10 space-y-8">
        <motion.section {...sectionAnimation}>
          <Summary />
        </motion.section>

        <motion.section {...sectionAnimation}>
          <Experience />
        </motion.section>

        <motion.section {...sectionAnimation}>
          <School />
        </motion.section>

        <motion.section {...sectionAnimation}>
          <Projects />
        </motion.section>

        <motion.section {...sectionAnimation}>
          <Skills />
        </motion.section>

        <motion.section {...sectionAnimation}>
          <RemoteExperience />
        </motion.section>

        <motion.section {...sectionAnimation}>
          <Hobbies />
        </motion.section>
      </main>

      <footer className="py-6 text-center">
        <Contact />
      </footer>
    </div>
  );
}
