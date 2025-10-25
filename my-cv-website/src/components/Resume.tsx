"use client";

import { useTranslation } from "react-i18next";
import Line from "./Ui/Line";
import ResumeCapsule from "./Ui/ResumeCapsule";

export default function Resume() {
    const { t } = useTranslation();

    return (
        <div className="w-full" id="Resume">
            <div className="w-full mb-12">
                <h2 className="heading-title">{t("my_resume")}</h2>
                <Line width="sm:w-1/3 w-full" />
            </div>

            <div className="w-full grid sm:grid-cols-2 gap-10">
                <div className="flex flex-col gap-10">
                    <h3 className="text-xl sm:text-2xl font-bold sm:mb-3 -mb-3 sm:text-center lg:text-left text-left">
                        {t("professional_experience")}
                    </h3>
                    <ResumeCapsule
                        title={t("ivalua.title")}
                        subtitle={t("ivalua.subtitle")}
                        text={t("ivalua.text")}
                        img="/Img/Ivalua.png"
                    />

                    <ResumeCapsule
                        title={t("harmonessens.title")}
                        subtitle={t("harmonessens.subtitle")}
                        text={t("harmonessens.text")}
                        img="/Img/harmonessens.png"
                    />

                    <ResumeCapsule
                        title={t("degriff.title")}
                        subtitle={t("degriff.subtitle")}
                        text={t("degriff.text")}
                        img="/Img/degriff.png"
                    />
                </div>

                <div className="flex flex-col gap-10">
                    <h3 className="text-xl sm:text-2xl font-bold sm:mb-3 -mb-3 sm:text-center lg:text-left text-left">
                        {t("education")}
                    </h3>
                    <ResumeCapsule
                        title={t("epsi.title")}
                        subtitle={t("epsi.subtitle")}
                        text={t("epsi.text")}
                        img="/Img/Epsi.png"
                    />

                    <ResumeCapsule
                        title={t("cmi.title")}
                        subtitle={t("cmi.subtitle")}
                        text={t("cmi.text")}
                        img="/Img/CMI.png"
                    />
                </div>
            </div>
        </div>
    );
}
