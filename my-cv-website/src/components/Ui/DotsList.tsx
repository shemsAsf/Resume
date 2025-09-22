import React from "react";

type DotsProps = {
  count: number;
  currentIndex: number;
  onClick?: (index: number) => void;
};

export const Dots: React.FC<DotsProps> = ({ count, currentIndex, onClick }) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick?.(index)}
          className={`
            flex-none
            rounded-full
            bg-zinc-400
            transition-all duration-300 transform origin-center
            ${currentIndex === index ? "w-4 h-4 bg-green-500" : "w-2 h-2"}
            hover:scale-150
          `}
        />
      ))}
    </div>
  );
};
