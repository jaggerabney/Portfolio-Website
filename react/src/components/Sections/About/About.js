import Typewriter from "../../UI/Typewriter/Typewriter";
import { CodeWindow, ImageWindow } from "../../UI/Window/Window";

import classes from "./About.module.css";

export default function About() {
  return (
    <section className={classes.content}>
      <Typewriter text="Here's a little bit about me." />
      <div className={classes.windows}>
        <CodeWindow />
        <ImageWindow />
      </div>
    </section>
  );
}
