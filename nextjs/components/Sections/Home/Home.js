import Typewriter from "../../UI/Typewriter/Typewriter";
import Article from "../../UI/Article/Article";

import classes from "./Home.module.css";

export default function Home() {
  return (
    <section className={classes.content}>
      <Typewriter text="Hey! I'm Jagger. Welcome to my website." />
      <div className={classes.spacer} />
      <Article className={classes.text}>
        I'm an aspiring fullstack developer from Seattle. I started coding in
        the library of my middle school at 14, and I've since never stopped.
        After earning my degree in 2021, I decided that I want to program for
        the rest of my life. Nothing else on this earth scratches my creative
        itch quite like it...and hey, it pays well, too. Scroll down to see a
        little more about myself and my work!
      </Article>
    </section>
  );
}
