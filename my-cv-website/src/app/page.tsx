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

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-zinc-900 font-helvetica-neue text-white overflow-hidden">
        <RandomGlowBackground count={30} />
        <ClickSpark>

          <Header />
          <MenuHeader />

          <main className="w-[98vw] lg:w-[90vw] mx-auto flex flex-col mt-5 gap-5 lg:mt-20 lg:gap-20 px-8 py-6 sm:px-6 space-y-8">
              <AboutMe />
              <Resume />
              <Skills />
              <Projects />
              <Hobbies />
          </main>

          <Contact />
        </ClickSpark>
        
      </div>
    </>
  );
}
