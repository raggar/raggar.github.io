"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import dineshImage from '/public/dineshcolorpic.png';
import { useSectionInView } from "@/lib/sectiondisplay";
import { useSectionContext } from "@/context/sectioncontext";
import React, { useState, useEffect, forwardRef, useRef } from "react";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { SiTensorflow, SiPytorch, SiNextdotjs } from 'react-icons/si';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { SiPostgresql } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
});

// Assign a display name to the component
Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { ref } = useSectionInView("About", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useSectionContext();

  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id="about"
      className="relative flex w-full max-w-[1000px] items-center justify-center overflow-hidden rounded-lg border bg-transparent pt-5 pb-6 sm:pb-3 px-10 overflow-x-hidden"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="hidden sm:flex">
            {/* <Icons.googleDrive className="h-6 w-6" /> */}
            <SiPytorch />
          </Circle>
          <Circle ref={div5Ref} className="hidden sm:flex">
            {/* <Icons.googleDocs className="h-6 w-6" /> */}
            <SiTensorflow />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="hidden sm:flex">
            <FaGithub />
          </Circle>
          <Circle ref={div4Ref} className="h-80 w-80">
            <Image src={dineshImage} alt="Dinesh Pic" className="h-full w-full object-cover rounded-full" />
          </Circle>
          <Circle ref={div6Ref} className="hidden sm:flex">
            <SiNextdotjs size={20} />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="hidden sm:flex">
            <RiCodeSSlashLine size={30} />
          </Circle>
          <Circle ref={div7Ref} className="hidden sm:flex">
            <SiPostgresql size={30} />
          </Circle>
        </div>
      </div>

      {!isSmallScreen && (
        <>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            curvature={-75}
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div4Ref}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            curvature={75}
            endYOffset={10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div4Ref}
            curvature={-75}
            reverse
            endYOffset={-10}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            reverse
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div4Ref}
            curvature={75}
            reverse
            endYOffset={10}
          />
        </>
      )}
    </div>
  );
}

