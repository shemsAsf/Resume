"use client";

import { useTranslation } from "react-i18next";
import CapsuleTextList from "./Ui/CapsuleText/CapsuleTextList";
import Line from "./Ui/Line";

export default function MenuHeader() {
    const { t } = useTranslation();

	return (
        <div className="items-center justify-center px-4 sm:px-10 mt-[10vh]" id="home">
            <div
                className="w-full h-[85dvh] bg-cover bg-center rounded-3xl flex flex-col justify-between p-[clamp(1rem,3vw,5rem)]"
                style={{
                    backgroundImage: "url('Img/header.png')",
                }}
            >
                <div className="flex flex-col-reverse lg:flex-row justify-between">
                    <div className="flex flex-col w-full lg:w-1/4 p-5 lg:p-0 rounded-3xl bg-zinc-800/75 lg:bg-transparent mt-9 lg:mt-0">
                        <p className="text-[clamp(1rem,2vw,2.5rem)] font-helvetica-neue font-light leading-tight">
                            {t("role")}
                        </p>
                        <Line width="w-full" />
                        <CapsuleTextList
                            items={[
                                "C# (.net)",
                                "React",
                                "TypeScript",
                                "Node.js",
                                "SQL",
                                "C++",
                                "Python",
                                t("and_more"),
                            ]}
                        />
                    </div>
                    <h1 className="text-[clamp(3rem,5vw,10rem)] font-helvetica-neue font-bold text-left lg:text-right w-full leading-none">
                        SHEMS <br /> ASFOURI
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-2/5 text-[clamp(1.125rem,1.5vw,1.875rem)] flex items-end">
                        {t("intro")}
                    </div>
                </div>
            </div>
        </div>
    );
}
