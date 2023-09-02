import Typewriter from "../../UI/Typewriter/Typewriter";
import BlogCarousel from "../../UI/BlogCarousel/BlogCarousel";
import { getAllPosts } from "../../../util/posts";

import classes from "./Blog.module.css";

export default function Blog({ posts }) {
  return (
    <section className={classes.content}>
      <Typewriter text="Want to hear what I have to say?" />
      <BlogCarousel posts={posts} />
    </section>
  );
}
