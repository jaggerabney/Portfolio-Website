import { useEffect, useRef, useState } from "react";

import classes from "./Typewriter.module.css";

export default function Typewriter({ text }) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [doneTyping, setDoneTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const h1ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsVisible(entry.isIntersecting);
    });

    observer.observe(h1ref.current);
  }, []);

  useEffect(() => {
    if (isVisible && index < text.length) {
      setTimeout(() => {
        setCurrentText(currentText + text[index]);
        setIndex(index + 1);
      }, 33);
    } else {
      setDoneTyping(true);
    }
  }, [index, isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <h1 ref={h1ref} className={classes.heading}>
      <span className={classes.text}>{currentText}</span>
      <span
        className={`${classes.pipe} ${doneTyping ? classes["pipe-idle"] : ""}`}
      >
        |
      </span>
    </h1>
  );
}
