import React from "react";

type DrawOutlineButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    onClick?: () => void;
};

export const DrawOutlineButton: React.FC<DrawOutlineButtonProps> = ({
    children,
    onClick,
    ...rest
}) => {
    return (
        <button
            {...rest}
            className="group relative px-4 py-2
                transition-colors duration-[400ms] 
                hover:text-zinc-800 font-bold
                mb-5 w-2/5 h-15"
            onClick={onClick}
        >
            <span>{children}</span>

            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-zinc-800 transition-all duration-100 group-hover:w-full" />

            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-zinc-800 transition-all delay-100 duration-100 group-hover:h-full" />

            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-zinc-800 transition-all delay-200 duration-100 group-hover:w-full" />

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-zinc-800 transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
};