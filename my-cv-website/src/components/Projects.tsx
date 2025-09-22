"use client";

import { useState } from "react";
import Line from "./Ui/Line";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DrawOutlineButton } from "./Animations/AnimatedButton";
import { Dots } from "./Ui/DotsList";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Creative Portfolio",
    subtitle: "UI/UX & Visual Design",
    description: `A portfolio site crafted for a visual designer to showcase their work in branding, animation, and 3D design.

    Built with React.`,
    image: "/Img/KatPortfolio.png",
    link: "https://www.ekaterinapotapova.design/",
  },
  {
    title: "Harmonessens",
    subtitle: "Wellness & Appointments",
    description: `A calming and elegant website for a health practitioner. Users can learn about services and book personalized appointments through a fully custom-built scheduling system.

    Built with React.ts and a MySQL backend.`,
    image: "/Img/HarmonessensBG.png",
    link: "https://harmonessens.fr/",
  },
  {
    title: "Chroma Lab",
    subtitle: "Video game development",
    description: `A multiplayer puzzle game featuring various challenges and rooms to explore.
    Designed for cooperative play, it requires players to solve puzzles together to progress and escape the laboratory.

    Developed by a team of two, alongside a game designer.`,
    image: "/Img/chromaLab.png",
    link: "https://youtu.be/_w22oAPhTj4?si=PFqoWTtNBS1sTuTK",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const changeProject = (direction: number) => {
    setDirection(direction);
    setCurrentIndex((prev) => {
      const newInt = prev + direction;
      return ((newInt % projects.length) + projects.length) % projects.length;
    });
  };

  const changeIndex = (newIndex: number) => {
    if (newIndex == currentIndex) return;
    if (newIndex < 0 || newIndex >= projects.length) return;

    setDirection(newIndex < currentIndex ? -1 : 1);
    setCurrentIndex(newIndex);
  };

  const variantsImg = {
    enter: (dir: number) => ({
      y: dir * 100,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    exit: (dir: number) => ({
      y: dir * -100,
      opacity: 0,
      transition: { duration: 0.6 },
    }),
  };

  const variantsTxt = {
    enter: (dir: number) => ({
      x: dir * -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    exit: (dir: number) => ({
      x: dir * 20,
      opacity: 0,
      transition: { duration: 0.6 },
    }),
  };

  const project = projects[currentIndex];

  return (
    <div>
      <div className="w-full mb-0 lg:mb-25" id="Projects">
        <h2 className="heading-title">Personal projects</h2>
        <Line width="sm:w-1/3 w-full" />
      </div>

      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <div className="flex flex-row">
          <div
            className="w-full md:w-[90vw] h-[70vh] md:h-[80vh] 
              flex flex-row md:items-center gap-6 
              md:p-6 pt-6 rounded-xl shadow-md text-center"
          >
            <div
              className="w-full md:w-1/3 flex flex-col h-full rounded-lg 
                bg-white text-gray-800 p-10 pb-5"
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={project.title + project.subtitle + project.description}
                  className="flex flex-col h-full items-center"
                  variants={variantsTxt}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={direction}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mt-5 text-center">
                    <h2 className="text-[clamp(2rem,3vw,3rem)] font-bold text-nowrap">
                      {project.title}
                    </h2>
                    <h3 className="text-xl font-semibold">
                      {project.subtitle}
                    </h3>
                  </div>

                  <div className="flex-1 flex items-center text-justify">
                    <p className="text-base leading-relaxed text-gray-700 text-center max-w-prose">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center w-full">
                <DrawOutlineButton>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project
                  </a>
                </DrawOutlineButton>
              </div>

              <div className="flex flex-row justify-center gap-3">
                <button
                  className="left-4 p-2 hover:bg-zinc-800/50 hover:text-white rounded-full
                                transition-all duration-100"
                  onClick={() => changeProject(-1)}
                >
                  <ChevronLeft size={28} />
                </button>

                <Dots
                  count={projects.length}
                  currentIndex={currentIndex}
                  onClick={(i) => changeIndex(i)}
                />

                <button
                  className="right-4 p-2 hover:bg-zinc-800/50 hover:text-white rounded-full
                                        transition-all duration-100"
                  onClick={() => changeProject(1)}
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>

            <div className="hidden md:block md:w-2/3 h-full">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={project.image}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg shadow"
                  variants={variantsImg}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={direction}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
