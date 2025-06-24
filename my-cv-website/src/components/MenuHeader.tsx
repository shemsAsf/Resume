"use client";

import { motion } from "framer-motion";
import CapsuleTextList from "./Ui/CapsuleText/CapsuleTextList";
import Line from "./Ui/Line";

export default function MenuHeader() {
	return (
		<div className="h-dvh flex items-center justify-center">
			<motion.header
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="h-8/10 w-9/10 mt-1/10 bg-cover bg-center rounded-4xl flex flex-col justify-between"
				style={{
					backgroundImage: "url('/Img/Header.png')",
				}}
			>
				<div className="flex flex-col lg:flex-row justify-between m-5 lg:m-20">
					<div className="flex flex-col w-full lg:w-1/4 mb-6 lg:mb-0">
						<p className="text-[5vw] lg:text-4xl font-helvetica-neue font-light leading-tight">
							Full Stack Developer | <br /> Software Engineer
						</p>
						<Line width="w-full" />
						<CapsuleTextList
							items={["C# (.net)", "React", "TypeScript", "Node.js", "SQL", "And many more"]}
						/>
					</div>
					<h1 className="text-[10vw] lg:text-8xl font-helvetica-neue font-bold text-right w-full lg:w-1/2 leading-none">
						SHEMS <br /> ASFOURI
					</h1>
				</div>

				<div className="flex flex-col lg:flex-row justify-between gap-6 m-5 lg:m-20">
					<div className="w-full lg:w-2/5 text-[4.5vw] lg:text-3xl flex items-end">
						Hi, I am a developer driven by a passion for understanding, building, and refining technology. <br />
						Let's create something amazing together!
					</div>

					<div className="bg-zinc-100/80 text-zinc-900 text-[4vw] lg:text-lg w-full max-w-md rounded-xl p-4">
						<div>
							<img src="https://em-content.zobj.net/source/apple/419/warning_26a0-fe0f.png" className="w-5" />
							<br />
						</div>
						<p>
							Currently looking for a full-time job starting in <strong>October 2025</strong>.
						</p>
						<br />
						<div className="flex flex-col space-y-1 text-[4vw] lg:text-base">
							<div className="flex items-center gap-2">
								<img src="https://em-content.zobj.net/source/apple/419/round-pushpin_1f4cd.png" className="w-5" />
								<img src="https://em-content.zobj.net/source/apple/419/flag-italy_1f1ee-1f1f9.png" className="w-5" />
								<span>Milano, Italy</span>
							</div>
							<div className="flex items-center gap-2">
								<img src="https://em-content.zobj.net/source/apple/419/laptop_1f4bb.png" className="w-5" />
								<img src="https://em-content.zobj.net/source/apple/419/flag-european-union_1f1ea-1f1fa.png" className="w-5" />
								<span>Europe, Remote</span>
							</div>
						</div>
					</div>
				</div>
			</motion.header>
		</div>
	);
}
