import { useState, useEffect, createContext } from "react";

import useScrollPos from "../hooks/use-scroll-pos";
import { items } from "../components/Layout/Navbar/Navbar";

const SectionContext = createContext({
  activeSectionIndex: 0,
  sections: {},
  setActiveSectionIndex: (index) => {},
  setSections: (sections) => {},
});

export function SectionContextProvider({ children }) {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [sections, setSections] = useState();
  const scrollPos = useScrollPos();

  let sectionHeight, sectionGap;

  if (sections) {
    sectionHeight = sections.offsetHeight / sections.childElementCount;
    sectionGap = Number(
      getComputedStyle(sections)
        .getPropertyValue("gap")
        .match(/^[0-9]+$/)
    );
  }

  useEffect(() => {
    if (sections) {
      const sectionIndex = Math.round(scrollPos / sectionHeight) - sectionGap;

      if (sectionIndex !== activeSectionIndex) {
        console.log("Active section updated");

        setActiveSectionIndex(sectionIndex);
        window.history.replaceState("", "", `/${items[sectionIndex]}`);
      }
    }
  }, [scrollPos]);

  return (
    <SectionContext.Provider
      value={{
        activeSectionIndex,
        sections,
        setActiveSectionIndex,
        setSections,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export default SectionContext;
