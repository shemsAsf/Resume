"use client";

import CapsuleText from "./Ui/CapsuleText/CapsuleText";

export default function Contact() {
	const items = [
		{
			text: "Email",
			onClick: () => window.location.href = "mailto:shems.asfouri@gmail.com"
		},
		{
			text: "Phone",
			onClick: () => window.location.href = "tel:+33750826423"
		},
		{
			text: "Linkedin",
			onClick: () => window.open("https://www.linkedin.com/in/shems-asfouri/", "_blank")
		},
		{
			text: "Github",
			onClick: () => window.open("https://github.com/shemsAsf", "_blank")
		}
	];


	return (
		<div className="relative bg-cover bg-center p-10 mt-30"
			style={{
				backgroundImage:
					"url('Img/Footer.png')",
			}}>
			<div className="w-5/6 lg:w-4/5 mx-auto flex flex-col justify-around gap-3 lg:gap-10 z-10">
				<h2 className="text-[clamp(2rem,5vw,3rem)] font-light font-unbound whitespace-nowrap">Contact Me</h2>
				<div className="flex flex-wrap gap-4">
					{items.map((item, index) => (
						<button
							key={index}
							onClick={item.onClick}
							className="cursor-pointer transition hover:scale-105 active:scale-95"
						>
							<CapsuleText text={item.text} />
						</button>
					))}
				</div>
				<div>
					<p>shems.asfouri@gmail.com</p>
					<p>+33 7 50 82 64 23</p>
				</div>
			</div>
		</div>
	);
}
