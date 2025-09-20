import React from 'react';

interface SectionWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({children, className} : SectionWrapperProps) { 
  const baseClasses = "snap-start min-h-[85vh] px-8 sm:px-6 w-[98vw] lg:w-[90vw] mx-auto mt-[15vh]";

  return (
    <section className={`${baseClasses} ${className || ''}`}>
      {children}
    </section>
  );
};
