"use client";

import Line from "./Ui/Line";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
    const { t } = useTranslation();

	return (
        <div className="flex flex-col min-h-[85vh]" id="AboutMe">
            <div className="w-full lg:w-2/3 flex-none">
                <h2 className="heading-title">{t("about_me")}</h2>
                <p className="heading-subtitle">{t("my_line_of_work")}</p>
                <Line width="sm:w-1/3 w-full" />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 grow">
                <img
                    src="/Img/MyPicture.jpg"
                    alt={t("my_photo_alt")}
                    className="w-full max-w-[300px] object-cover shadow-lg"
                />

                <div className="w-full sm:w-2/3 text-[clamp(1rem,1.5vw,1.5rem)] text-left sm:text-right leading-relaxed">
                    <p>
                        {t("about_paragraph_1.part1")}{" "}
                        <strong>{t("about_paragraph_1.part2")}</strong>{" "}
                        {t("about_paragraph_1.part3")}{" "}
                        <strong>{t("about_paragraph_1.part4")}</strong>{" "}
                        {t("about_paragraph_1.part5")}
                    </p>
                    <br />
                    <p>
                        {t("about_paragraph_2.part1")}{" "}
                        <strong>{t("about_paragraph_2.part2")}</strong>{" "}
                        {t("about_paragraph_2.part3")}
                    </p>
                </div>
            </div>
        </div>
	);
}