import { useState, useContext, useEffect, useRef } from "react";

import SectionContext from "../../../store/section-context";

import classes from "./Navbar.module.css";

export const items = ["home", "about", "work", "blog", "contact"];

export default function Navbar({ className }) {
  const sectionContext = useContext(SectionContext);
  const [activeSectionIndex, setActiveSectionIndex] = useState(
    sectionContext.activeSectionIndex
  );
  const navbarRef = useRef();

  useEffect(() => {
    if (activeSectionIndex !== sectionContext.activeSectionIndex) {
      setActiveSectionIndex(sectionContext.activeSectionIndex);
    }
  }, [sectionContext]);

  function handleClick(item) {
    const sections = Array.from(sectionContext.sections.children);
    const navbarHeight = Number(
      getComputedStyle(navbarRef.current)
        .getPropertyValue("height")
        .slice(0, -2)
    );
    const correspondingSection = sections.find(
      (section) => section.id === item
    );

    scrollTo({
      top: correspondingSection.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  }

  return (
    <nav ref={navbarRef} className={`${classes.navbar} ${className}`}>
      <ul className={classes.navbar__list}>
        {items.map((item) => (
          <li
            key={item}
            className={`${classes.navbar__listItem} ${
              item === items[activeSectionIndex]
                ? classes.navbar__listItem__active
                : ""
            }`}
            onClick={handleClick.bind(this, item)}
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
}
