import { useState, useEffect } from "react";

import { increment, decrement } from "../../../util/array";

import classes from "./BlogCarousel.module.css";
import BlogPreview from "../BlogPreview/BlogPreview";

export default function BlogCarousel({ posts }) {
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState();

  useEffect(() => {
    let timer;

    if (slideDirection != null) {
      timer = setTimeout(() => setSlideDirection(null), 500);
    }

    return () => clearTimeout(timer);
  }, [slideDirection]);

  function changeActiveWindowHandler(direction) {
    if (direction === "left") {
      setSlideDirection("left");
      setActiveWindowIndex((prevIndex) => decrement(data, prevIndex));
    } else if (direction === "right") {
      setSlideDirection("right");
      setActiveWindowIndex((prevIndex) => increment(data, prevIndex));
    }
  }

  return (
    <div className={classes.container}>
      <div
        className={`${classes.button} ${classes.leftButton}`}
        onClick={
          !slideDirection
            ? changeActiveWindowHandler.bind(this, "left")
            : undefined
        }
      >
        {"<"}
      </div>
      <BlogPreview post={posts[0]} />
      <div
        className={`${classes.button} ${classes.rightButton}`}
        onClick={
          !slideDirection
            ? changeActiveWindowHandler.bind(this, "right")
            : undefined
        }
      >
        {">"}
      </div>
    </div>
  );
}
