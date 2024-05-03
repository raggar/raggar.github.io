"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";
import { SiDevpost } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { clubData, workData, awardsData, projectData } from "@/lib/data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link";
import { cn } from "@/lib/utils";
import _ from "lodash";

import { Montserrat } from 'next/font/google';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HomePage: React.FC = () => {
  const fullText = "software engineer | building products that matter.";
  const initialText = "software engineer";
  const [text, setText] = useState(initialText);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [openWorkItems, setOpenWorkItems] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((currentText) => {
        if (currentText.length < fullText.length) {
          return fullText.substring(0, currentText.length + 1);
        } else {
          clearInterval(interval);
          return currentText;
        }
      });
    }, 60);

    return () => clearInterval(interval);
  }, [fullText]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const toggleWorkItem = (index: number) => {
    setOpenWorkItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <main className={`flex flex-col items-center bg-gray-50 z-10 mx-auto`}>
        <div className="mt-2 sm:mt-3 w-full max-w-3xl">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            👋 I&apos;m Rahul.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
            I study software engineering at the {' '}
            <span className="border-b border-dashed border-gray-400">University of Waterloo</span>.{' '} I also help organize Hack the North,{' '}
            <span className="border-b border-dashed border-gray-400">Canada&apos;s largest</span>{' '} student run hackathon.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
            In my freetime I like reading fiction novels, working out, and playing the guitar.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
            Have a cool idea?{' '}
            <span className="border-b border-dashed border-gray-400">Let&apos;</span>s chat.{' '}
          </p>
        </div>

        <div className="mt-6 sm:mt-3 w-full max-w-3xl py-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg sm:text-xl font-medium text-gray-800">work</h2>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.span
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FileText className="w-3 h-3 mr-1" />
                Resume
              </motion.span>
            </Link>
          </div>
          <div>
            {workData.map((job, index) => (
              <Collapsible
                key={index}
                open={openWorkItems.includes(index)}
                onOpenChange={() => toggleWorkItem(index)}
                className={`border-b border-dashed border-gray-300 ${index === 0 ? 'border-t' : ''}`}
              >
                <CollapsibleTrigger className="px-1.5 flex items-center justify-between w-full cursor-pointer py-2 transition-colors duration-300 hover:bg-gray-100 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Link href={job.href} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src={job.src}
                            alt={`${job.company} logo`}
                            width={24}
                            height={24}
                            className="rounded-lg mr-1"
                          />
                        </motion.div>
                      </Link>
                      <h3 className="text-sm sm:text-base font-medium text-gray-800 truncate">{job.company}</h3>
                    </div>
                    <span className="text-xs text-gray-500">{job.title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{job.date}</span>
                  </div>
                </CollapsibleTrigger>
                <AnimatePresence initial={false}>
                  {openWorkItems.includes(index) && (
                    <CollapsibleContent forceMount>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-7 pr-3 py-3 text-gray-700">
                          <p className="text-xs sm:text-sm mb-1 font-medium">{job.location}</p>
                          <p className="text-xs sm:text-sm">{job.description}</p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {job.tags.map((tag, tagIndex) => (
                              <CustomBadge key={tagIndex} className="text-xs">
                                {tag}
                              </CustomBadge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </CollapsibleContent>
                  )}
                </AnimatePresence>
              </Collapsible>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-3 w-full max-w-3xl py-3">
          <h2 className="text-lg sm:text-xl font-medium mb-2 text-gray-800">leadership</h2>
          <div>
            {clubData.map((project, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
                className={`border-b border-dashed border-gray-300 ${index === 0 ? 'border-t' : ''}`}
              >
                <CollapsibleTrigger className="px-1.5 flex items-center justify-between w-full cursor-pointer py-2 transition-colors duration-300 hover:bg-gray-100 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Link href={project.href} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src={project.src}
                            alt={`${project.name} logo`}
                            width={24}
                            height={24}
                            className="rounded-lg mr-1"
                          />
                        </motion.div>
                      </Link>
                      <h3 className="text-sm sm:text-base font-medium text-gray-800">{project.name}</h3>
                    </div>
                    <span className="hidden sm:inline text-xs text-gray-500">
                      {project.tagline.charAt(0).toUpperCase() + project.tagline.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{project.date}</span>
                  </div>
                </CollapsibleTrigger>
                <AnimatePresence initial={false}>
                  {openItems.includes(index) && (
                    <CollapsibleContent forceMount>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-7 pr-3 py-3 text-gray-700">
                          <p className="text-xs font-medium sm:text-sm mb-1 sm:hidden">
                            {project.tagline.charAt(0).toUpperCase() + project.tagline.slice(1)}
                          </p>
                          <p className="text-xs sm:text-sm">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {project.tags.map((tag, tagIndex) => (
                              <CustomBadge key={tagIndex} className="text-xs">
                                {tag}
                              </CustomBadge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </CollapsibleContent>
                  )}
                </AnimatePresence>
              </Collapsible>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-3 w-full max-w-3xl py-3">
          <h2 className="text-lg sm:text-xl font-medium mb-4 text-gray-800">builds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projectData.map((tool, index) => (
              <div key={index} className="p-4 rounded-lg border border-dashed border-gray-300 hover:bg-gray-50 transition-colors duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-800">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {tool.devpost && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={tool.devpost}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                              <SiDevpost className="h-3 w-3" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs">Devpost Submission</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={tool.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            <BsGithub className="h-3 w-3" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Source Code</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-3 w-full max-w-3xl py-3">
          <h2 className="text-lg sm:text-xl font-medium mb-2 text-gray-800">awards</h2>
          {awardsData.map((award, index) => (
            <Collapsible
              key={index}
              className={`border-b border-dashed border-gray-300 ${index === 0 ? 'border-t' : ''}`}
            >
              <CollapsibleTrigger className="px-1.5 flex items-center justify-between w-full py-2 rounded-lg cursor-default">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <h2 className="text-xs sm:text-xs font-medium text-gray-800">{award.name}</h2>
                  </div>
                  <span className="hidden sm:inline text-xs text-gray-500">
                    {award.description}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{award.date}</span>
                </div>
              </CollapsibleTrigger>
            </Collapsible>
          ))}
        </div>
      </main>
    </>
  );
};

const CustomBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <span className={cn(
    "inline-block bg-gray-100 rounded px-2 py-1 text-xs font-medium text-gray-800",
    "transition-colors duration-200 ease-in-out",
    "hover:bg-gray-200",
    className
  )}>
    {children}
  </span>
);

export default HomePage;
