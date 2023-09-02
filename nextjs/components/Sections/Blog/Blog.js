import Typewriter from "../../UI/Typewriter/Typewriter";
import Carousel from "../../UI/Carousel/Carousel";
import { getAllPosts } from "../../../util/posts";

import classes from "./Blog.module.css";

export default function Blog({ posts }) {
  return (
    <section className={classes.content}>
      <Typewriter text="Want to hear what I have to say?" />
      {/* <Carousel data={posts} /> */}
    </section>
  );
}
