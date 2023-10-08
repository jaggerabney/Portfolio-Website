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
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>
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
