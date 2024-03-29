import { useState, useEffect, createContext } from "react";

import useScrollPos from "../hooks/use-scroll-pos";
import { items } from "../components/Layout/Navbar/Navbar";
import { useRouter } from "next/router";

const SectionContext = createContext({
  activeSectionIndex: 0,
  sections: {},
  activeSection: "",
  setActiveSectionIndex: (index) => {},
  setSections: (sections) => {},
  setActiveSection: (section) => {},
});

export function SectionContextProvider({ children }) {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [sections, setSections] = useState();
  const scrollPos = useScrollPos();
  const router = useRouter();

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
    if (sections && !window.location.pathname.includes("/blog/")) {
      const sectionIndex = Math.round(scrollPos / sectionHeight) - sectionGap;
      const activeSection = items[sectionIndex];

      if (sectionIndex !== activeSectionIndex && activeSection !== undefined) {
        setActiveSectionIndex(sectionIndex);
        setActiveSection(activeSection);

        // window.history.replaceState("", "", `/${activeSection}`);
        router.replace("/", `/${activeSection}`, {
          shallow: true,
          scroll: false,
        });
      }
    }
  }, [scrollPos]);

  return (
    <SectionContext.Provider
      value={{
        activeSectionIndex,
        sections,
        activeSection,
        setActiveSectionIndex,
        setSections,
        setActiveSection,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export default SectionContext;
