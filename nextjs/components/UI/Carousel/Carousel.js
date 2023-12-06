import { useState, useEffect, useRef } from "react";

import Preview from "../Preview/Preview";
import useCSSProperty from "../../../hooks/use-css-prop";

import classes from "./Carousel.module.css";

export default function Carousel({ posts }) {
  const previewWidthVw = useCSSProperty("--preview-width");
  const gapVw = useCSSProperty("--work-carousel-gap");
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);
  const [xOffset, setXOffset] = useState(0);
  const containerRef = useRef();

  let vwPxScalingFactor;

  useEffect(() => {
    vwPxScalingFactor = window.innerWidth / 100;
  }, []);

  const previewWidth = vwPxScalingFactor * previewWidthVw;
  const gap = vwPxScalingFactor * gapVw;

  function changeActiveWindowHandler(direction) {
    if (direction === "left") {
      setActiveWindowIndex((prevIndex) => prevIndex - 1);
      setXOffset((prevXOffset) => prevXOffset + (previewWidth + gap));
    } else if (direction === "right") {
      setActiveWindowIndex((prevIndex) => prevIndex + 1);
      setXOffset((prevXOffset) => prevXOffset - (previewWidth + gap));
    }
  }

  return (
    <div className={classes.outer}>
      {activeWindowIndex > 0 && (
        <div
          className={`${classes.button} ${classes.leftButton}`}
          onClick={changeActiveWindowHandler.bind(this, "left")}
        >
          {"<"}
        </div>
      )}
      <div
        ref={containerRef}
        style={{ left: xOffset }}
        className={classes.container}
      >
        {posts.map((post) => (
          <Preview
            key={post.slug || post._id}
            className={classes.preview}
            link={post.link}
            imageName={post.imageName}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
      {activeWindowIndex < posts.length - 1 && (
        <div
          className={`${classes.button} ${classes.rightButton}`}
          onClick={changeActiveWindowHandler.bind(this, "right")}
        >
          {">"}
        </div>
      )}
    </div>
  );
}
