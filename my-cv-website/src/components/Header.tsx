"use client";

import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent h-[10vh]">
            <div className="flex justify-between items-center px-4 sm:px-10 md:px-20 h-full">
                <div className="text-[clamp(1rem,4vw,1.5rem)] font-bold">SHEMS ASFOURI</div>
                <button className="p-2">
                    <Menu className="w-7 h-7 sm:w-10 sm:h-10" />
                </button>
            </div>
        </header>
    );
}
