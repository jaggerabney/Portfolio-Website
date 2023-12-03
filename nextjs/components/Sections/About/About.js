import Section from "../../UI/Section/Section";
import Typewriter from "../../UI/Typewriter/Typewriter";
import CodeWindow from "../../UI/CodeWindow/CodeWindow";
import ImageWindow from "../../UI/ImageWindow/ImageWindow";

import classes from "./About.module.css";

export default function About({ json }) {
  return (
    <Section id="about" className={classes.content}>
      <Typewriter text="Here's a little bit about me." />
      <div className={classes.windows}>
        <CodeWindow outerClassName={classes.code} json={json} />
        <ImageWindow outerClassName={classes.image} />
      </div>
    </Section>
  );
}
