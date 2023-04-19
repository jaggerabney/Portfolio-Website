import { useEffect, useState } from "react";

import classes from "./Typewriter.module.css";

export default function Typewriter({ text }) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setCurrentText(currentText + text[index]);
        setIndex(index + 1);
      }, 33);
    } else {
      setDoneTyping(true);
    }
  }, [index]);

  return (
    <div className={classes.wrapper}>
      <h1>
        <span className={classes.text}>{currentText}</span>
        <span
          className={`${classes.pipe} ${
            doneTyping ? classes["pipe-idle"] : ""
          }`}
        >
          |
        </span>
      </h1>
    </div>
  );
}
