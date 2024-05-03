import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useSectionContext } from "@/context/sectioncontext";
import type { SectionName } from "@/lib/types";

export function useSectionInView(sectionName: SectionName, threshold: number = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, timeOfLastClick]);

  return { ref };
}