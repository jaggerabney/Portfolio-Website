import CodeWindow from "../../UI/CodeWindow/CodeWindow";
import ImageWindow from "../../UI/ImageWindow/ImageWindow";
import Typewriter from "../../UI/Typewriter/Typewriter";

import classes from "./About.module.css";

export default function About() {
  return (
    <section className={classes.content}>
      <Typewriter text="Here's a little bit about me." />
      <div className={classes.windows}>
        <CodeWindow outerClassName={classes.code} />
        <ImageWindow outerClassName={classes.image} />
      </div>
    </section>
  );
}