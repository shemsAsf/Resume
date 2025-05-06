"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="my-10 text-left"
    >
      <h2 className="text-6xl font-semibold text-gray-800">Personal Projects</h2>

      <div className="mt-6 space-y-10 max-w-3xl mx-auto text-left">
        {/* Harmonessens Project */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="p-6  rounded-lg shadow-lg"
        >
          <h2 className="text-lg text-3x1 font-semibold text-gray-800">
            Harmonessens – Website for a Naturopath
          </h2>
          <p className="text-gray-800 mt-2">
            A professional website I created for a naturopath, featuring a custom made appointment booking system, automatic mailing, contact section... 
            <br/>
            Built with React.js, Node.js, and SQLite.
          </p>
          <a 
            href="https://harmonessens-qtgh.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-500"
          >
            Visit Harmonessens
          </a>
        </motion.div>

        {/* Unreal Engine Game Project */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-lg text-3x1 font-semibold text-gray-800">
            Chroma Lab
          </h3>
          <p className="text-gray-800 mt-2">
            A multiplayer puzzle game featuring various challenges and rooms to explore. 
            Designed for cooperative play, it requires players to solve puzzles together 
            to progress and escape the laboratory.  
            <br/>
            Developed by a team of two, alongside a game designer.
            </p>
            <br/>
            <p>This is still a work in progress with a playable demo.</p>
          <div className="mt-3 aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full h-64 rounded-lg shadow-md"
              src="https://www.youtube.com/embed/_w22oAPhTj4" 
              title="Unreal Engine Game Prototype"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
