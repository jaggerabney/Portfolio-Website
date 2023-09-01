import CodeWindow from "../../UI/CodeWindow/CodeWindow";
import Typewriter from "../../UI/Typewriter/Typewriter";

import classes from "./About.module.css";

export default function About() {
  return (
    <section className={classes.content}>
      <Typewriter text="Here's a little bit about me." />
      <div className={classes.windows}>
        <CodeWindow />
      </div>
    </section>
  );
}
