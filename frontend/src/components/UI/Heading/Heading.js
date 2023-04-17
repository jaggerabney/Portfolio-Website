import TypeWriterEffect from "react-typewriter-effect";

import classes from "./Heading.module.css";

export default function Heading(props) {
  return (
    <div className={classes.wrapper}>
      <TypeWriterEffect
        textStyle={{
          color: "#8516da",
          fontSize: "48px",
          fontWeight: 900,
        }}
        startDelay={500}
        cursorColor={"#000000"}
        text={"Hello! I'm Jagger. Welcome to my website."}
        typeSpeed={50}
      />
    </div>
  );
}
