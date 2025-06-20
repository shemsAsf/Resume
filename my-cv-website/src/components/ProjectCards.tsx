"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
	{
		title: "Chroma Lab",
		subtitle: "Video game development",
		description: `A multiplayer puzzle game featuring various challenges and rooms to explore.
Designed for cooperative play, it requires players to solve puzzles together to progress and escape the laboratory.

Developed by a team of two, alongside a game designer.
This is still a work in progress with a playable demo.`,
		image: "/Img/chromaLab.png",
		link: "",
	},
	{
		title: "Harmonessens",
		subtitle: "Wellness & Appointments",
		description: `A calming and elegant website for a health practitioner. Users can learn about services and book personalized appointments through a fully custom-built scheduling system.

Built with React.ts and a MySQL backend. Focused on simplicity, accessibility, and a peaceful aesthetic to reflect the practitioner's holistic approach.`,
		image: "/Img/harmonessensBG.png",
		link: "https://harmonessens.fr/",
	},
	{
		title: "Creative Portfolio",
		subtitle: "UI/UX & Visual Design",
		description: `A portfolio site crafted for a visual designer to showcase their work in branding, animation, and 3D design.

Built with React.`,
		image: "/Img/KatPortfolio.png",
		link: "",
	},
];


export default function ProjectCards() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen ml-[-50vw] px-8 py-12">
			<div className="flex gap-6 justify-center items-stretch">
				{projects.map((project, index) => {
					const isActive = activeIndex === index;
					const isAdjacent = Math.abs(activeIndex - index) === 1;

					let width = "8%";
					if (isActive) width = "60%";
					else if (isAdjacent) width = "18%";

					return (
						<motion.div
							key={index}
							layout
							onClick={() => setActiveIndex(index)}
							className={`cursor-pointer rounded-3xl bg-zinc-600/30 text-white p-6 flex-shrink-0 h-[80vh] transition-opacity duration-300 ${!isActive ? "opacity-60 hover:opacity-90" : ""
								}`}
							style={{ width }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
						>
							<div className="flex flex-col h-full">
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 }}
									className="mb-4 overflow-clip"
								>
									<h3 className="text-3xl font-bold mb-1">{project.title}</h3>
									<p className="text-lg text-gray-400 mb-4">{project.subtitle}</p>
									{isActive && (
										<>
											<motion.p
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: 0.2 }}
												className="text-lg whitespace-pre-line"
											>
												{project.description}
											</motion.p>

											{project.link && (
												<motion.a
													href={project.link}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-block mt-4 px-5 py-2 rounded-xl bg-[#288E75] text-white font-semibold hover:bg-[#2c4e46] transition-colors duration-300 shadow-md"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ delay: 0.25 }}
												>
													Visit project →
												</motion.a>
											)}
										</>
									)}
								</motion.div>

								<AnimatePresence>
									{isActive && (
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 20 }}
											transition={{ delay: 0.3 }}
											className="rounded-xl overflow-hidden bg-gray-700 w-full flex-grow"
										>
											<Image
												src={project.image}
												alt={project.title}
												width={700}
												height={300}
												className="object-cover w-full h-full"
											/>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
}
