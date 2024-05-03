import React from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5  // Adjust threshold to control when the animation starts
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex items-center justify-center rounded-lg border overflow-x-hidden">
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-3xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7340ff] via-[#5340ff] to-[#407cff] text-center p-2 pb-5"
      >
        {children}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;