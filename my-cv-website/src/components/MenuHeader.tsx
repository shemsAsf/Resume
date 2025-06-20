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
					backgroundImage: `url('Img/header.png')`,
				}}
			>
				<div className="flex justify-between m-20">
					<div className="flex flex-col w-1/4">
						<p className="text-4xl font-helvetica-neue font-light">Full Stack Developer | <br /> Software Engineer</p>
						<Line width="w-full" />
						<CapsuleTextList items={["C# (.net)", "React", "TypeScript", "Node.js", "SQL", "And many more"]} />
					</div>
					<h1 className="text-8xl font-helvetica-neue font-bold text-right w-1/2">
						SHEMS <br /> ASFOURI
					</h1>
				</div>
				<div className="flex justify-between m-20 h-96">
					<div className="w-2/5 text-3xl flex items-end">
						Hi, I am a developer driven by a passion for understanding, building,
						and refining technology. <br /> Let&apos;s create something amazing together!
					</div>
					<div className="bg-zinc-100/80 text-zinc-900 text-lg w-full max-w-md rounded-xl p-4">
						<div className="">
							<img src="/Img/Icons/Alert.png" className="w-5" />
							<br />
						</div>
						<p>
							Currently looking for a full-time job starting in <strong>October 2025</strong>.
						</p>
						<br />
						<div className="flex flex-col space-y-1 text-base">
							<div className="flex items-center gap-2">
								<img src="/Img/Icons/Pin.png" className="w-5" />
								<img src="/Img/Icons/Italy.png" className="w-5" />
								<span>Milano, Italy</span>
							</div>
							<div className="flex items-center gap-2">
								<img src="/Img/Icons/Laptop.png" className="w-5" />
								<img src="/Img/Icons/Europe.png" className="w-5" />
								<span>Europe, Remote</span>
							</div>
						</div>
					</div>
				</div>
			</motion.header>
		</div>
	);
}
