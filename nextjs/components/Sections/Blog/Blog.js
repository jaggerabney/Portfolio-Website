import Section from "../../UI/Section/Section";
import Typewriter from "../../UI/Typewriter/Typewriter";
import BlogCarousel from "../../UI/BlogCarousel/BlogCarousel";

import classes from "./Blog.module.css";

export default function Blog({ posts }) {
  return (
    <Section id="blog" className={classes.content}>
      <Typewriter text="Want to hear what I have to say?" />
      <BlogCarousel posts={posts} />
    </Section>
  );
}
