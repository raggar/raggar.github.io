"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workData } from "@/lib/data";
import { useSectionInView } from "@/lib/sectiondisplay";
import { useSectionContext } from "@/context/sectioncontext";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { AnimatedList } from "@/components/ui/animated-list";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.25);
  const { setActiveSection, setTimeOfLastClick } = useSectionContext();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main id="experience" ref={ref} className="scroll-mt-28 mb-10 sm:mb-40">
      <SectionHeading>💼 Work </SectionHeading>

      <AnimatedGradientText>
        🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={`inline animate-gradient bg-gradient-to-r from-[#ffaa40] 
          via-[#9c40ff] to-[#4060ff] bg-[length:var(--bg-size)_100%] 
          bg-clip-text text-transparent font-semibold`}
        >
          Building
        </span>
      </AnimatedGradientText>

      <div className="flex flex-col items-center mt-10 px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-4xl">
          {workData.map((item, index) => (
            <div key={index} className="mb-5 flex flex-col items-center w-full">
              <VerticalTimelineElement
                visible={true}
                position="right"
                contentStyle={{
                  background: "white",
                  boxShadow: "none",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  borderRadius: "8px",
                  margin: "0 auto",
                  display: "flex",
                  flexGrow: 1,
                  width: "100%",
                  minWidth: "95%",
                  maxWidth: "95%",
                }}
                contentArrowStyle={{
                  display: "none",
                }}
                iconStyle={{
                  display: "none",
                }}
                className="sm:min-w-[900px] sm:max-w-[900px]"
              >
                <div className="flex items-start w-full">
                  <div
                    className="mr-4 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md"
                    style={{ border: "2px solid #6a11cb" }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-left mb-2 text-gray-500">
                      {item.date}
                    </div>
                    <h3 className="text-lg font-semibold capitalize">{item.title}</h3>
                    <p className="font-normal !mt-0">{item.location}</p>
                    <p className="!mt-1 !font-normal text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
                <BorderBeam size={250} duration={12} delay={9} />
              </VerticalTimelineElement>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
