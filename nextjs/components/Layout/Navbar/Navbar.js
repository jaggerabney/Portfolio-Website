import { useState, useContext, useEffect } from "react";

import SectionContext from "../../../store/section-context";

import classes from "./Navbar.module.css";

export const items = ["home", "about", "work", "blog", "contact"];

export default function Navbar({ className }) {
  const sectionContext = useContext(SectionContext);
  const [activeSectionIndex, setActiveSectionIndex] = useState(
    sectionContext.activeSectionIndex
  );

  useEffect(() => {
    if (activeSectionIndex !== sectionContext.activeSectionIndex) {
      setActiveSectionIndex(sectionContext.activeSectionIndex);
    }
  }, [sectionContext]);

  return (
    <nav className={`${classes.navbar} ${className}`}>
      <ul className={classes.navbar__list}>
        {items.map((item) => (
          <li
            key={item}
            className={`${classes.navbar__listItem} ${
              item === items[activeSectionIndex]
                ? classes.navbar__listItem__active
                : ""
            }`}
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
}
