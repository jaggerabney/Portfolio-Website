import Section from "../../UI/Section/Section";
import Typewriter from "../../UI/Typewriter/Typewriter";
import Carousel from "../../UI/Carousel/Carousel";

import classes from "./Work.module.css";

export default function Work({ json }) {
  return (
    <Section id="work" className={classes.content}>
      <Typewriter text="How about a look at my work?" />
      <Carousel posts={json} />
    </Section>
  );
}
