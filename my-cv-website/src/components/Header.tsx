"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const cvPath = `/CV_Shems_Asfouri_${i18n.language}.pdf`;

    const menuItems = [
        { name: t("home"), href: "#home", type: "scroll" },
        { name: t("about"), href: "#AboutMe", type: "scroll" },
        { name: t("resume"), href: "#Resume", type: "scroll" },
        { name: t("skills"), href: "#Skills", type: "scroll" },
        { name: t("projects_title"), href: "#Projects", type: "scroll" },
        { name: t("interest"), href: "#Interest", type: "scroll" },
        { name: t("contact"), href: "#Contact", type: "scroll" },
        { name: t("download_cv"), href: cvPath, type: "download" },
    ];

    const handleClick = (item: typeof menuItems[number]) => {
        setMenuOpen(false);

        if (item.type === "scroll") {
            const target = document.querySelector(item.href);
            if (target)
                target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent h-[10vh]">
            <div className="flex justify-between items-center px-4 sm:px-10 md:px-20 h-full bg-zinc-900">
                <div className="text-[clamp(1rem,4vw,1.5rem)] font-bold">SHEMS ASFOURI</div>

                <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-6">
                    <div className="flex items-center gap-2 sm:gap-4">
                        {i18n.language === "en" && (
                            <button
                                onClick={() => i18n.changeLanguage("fr")}
                                className="px-2 py-1 border border-white rounded hover:bg-white hover:text-black transition"
                            >
                                FR
                            </button>
                        )}
                        {i18n.language === "fr" && (
                            <button
                                onClick={() => i18n.changeLanguage("en")}
                                className="px-2 py-1 border border-white rounded hover:bg-white hover:text-black transition"
                            >
                                EN
                            </button>
                        )}
                    </div>

                    <a
                        className="text-[clamp(1rem,4vw,1.5rem)]"
                        href={cvPath}
                        download
                    >
                        <span className="hidden sm:inline">{t("download_cv")}</span>
                        <span className="inline sm:hidden">CV</span>
                    </a>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                        {menuOpen ?
                            <X className="w-7 h-7 sm:w-10 sm:h-10" /> :
                            <Menu className="w-7 h-7 sm:w-10 sm:h-10" />
                        }
                    </button>
                </div>

                {menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-black/40 z-40"
                    />
                )}

                {menuOpen && (
                    <div
                        className={`fixed z-50 bg-zinc-800 shadow-lg transition-transform duration-300 ease-in-out
                            md:top-0 md:right-0 md:h-full md:w-64
                            top-0 left-0 w-full md:left-auto
                            overflow-y-scroll overflow-x-clip
                            ${menuOpen ? "translate-x-0 translate-y-0" : "translate-x-full md:translate-y-0 -translate-y-full md:translate-x-0"}
                            `}
                    >
                        <ul className="flex flex-col">
                            {menuItems.map((item, i) => (
                                <li key={i} className="
                                                relative before:absolute before:inset-0 before:bg-black/20 before:transition-opacity before:duration-200
                                                hover:before:opacity-0
                                                hover:border-b-3 
                                                before:pointer-events-none
                                            ">
                                    {item.type === "download" ? (
                                        <a
                                            href={item.href}
                                            download
                                            className="block text-[clamp(1rem,3vw,1.5rem)] font-bold
                                            m-6"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={() => handleClick(item)}
                                            className="text-[clamp(1rem,3vw,1.5rem)] font-bold text-left w-full
                                            m-6"
                                        >
                                            {item.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}