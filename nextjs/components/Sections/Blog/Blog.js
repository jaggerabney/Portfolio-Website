import Section from "../../UI/Section/Section";
import Typewriter from "../../UI/Typewriter/Typewriter";
import Carousel from "../../UI/Carousel/Carousel";

import classes from "./Blog.module.css";

export default function Blog({ posts }) {
  return (
    <Section id="blog" className={classes.content}>
      <Typewriter text="Want to hear what I have to say?" />
      <Carousel posts={posts} />
    </Section>
  );
}
