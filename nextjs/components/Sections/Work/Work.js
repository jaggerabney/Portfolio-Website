import Typewriter from "../../UI/Typewriter/Typewriter";
import Carousel from "../../UI/Carousel/Carousel";

import classes from "./Work.module.css";

export default function Work() {
  return (
    <section className={classes.content}>
      <Typewriter text="How about a look at my work?" />
      <Carousel />
    </section>
  );
}
