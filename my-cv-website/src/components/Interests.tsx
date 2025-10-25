"use client";

import { useTranslation } from "react-i18next";
import Line from "./Ui/Line";
import Carousel from "./Ui/Carousel/Carousel";

export default function Interest() {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col min-h-[85vh]" id="Interest">
			<div className="w-full mb-10 lg:mb-30">
				<h2 className="heading-title">{t("interests_title")}</h2>
				<p className="heading-subtitle">{t("interests_subtitle")}</p>
				<Line width="sm:w-1/3 w-full" />
			</div>
			<div className="flex flex-col-reverse lg:flex-row w-full justify-between md:mb-0 mb-10">
				<div className="flex justify-center sm:justify-start">
					<Carousel />
				</div>
				<div className="text-[clamp(1rem,1.5vw,1.5rem)] mb-20 lg:mb-0 text-left lg:text-right w-full sm:w-2/3">
					<p className="mb-6" dangerouslySetInnerHTML={{ __html: t("interest_para1") }} />

					<p className="mb-6" dangerouslySetInnerHTML={{ __html: t("interest_para2") }} />

					<p className="" dangerouslySetInnerHTML={{ __html: t("interest_para3") }} />
				</div>
			</div>
		</div>
	);
}
