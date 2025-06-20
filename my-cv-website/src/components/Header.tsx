"use client";

import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 text-white">
            <div className="flex justify-between items-center px-6 sm:px-20 py-4">
                <div className="text-xl font-bold w-10">SHEMS ASFOURI</div>

                <button>  
                    <Menu size={50}/>
                </button>
            </div>
        </header>

    );
}
