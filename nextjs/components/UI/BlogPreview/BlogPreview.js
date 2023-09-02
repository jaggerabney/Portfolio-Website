import Link from "next/link";
import Image from "next/image";

import Window from "../Window/Window";

import classes from "./BlogPreview.module.css";

export default function BlogPreview({ post }) {
  const { title, imageName, date, excerpt } = post;

  return (
    <Window innerClassName={classes.window}>
      <Link href={"/"}>
        <img
          className={classes.image}
          src={`../../../images/blog/${imageName}`}
        />
      </Link>
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
        <time className={classes.date}>{date}</time>
        <p className={classes.excerpt}>{excerpt}</p>
      </div>
    </Window>
  );
}
