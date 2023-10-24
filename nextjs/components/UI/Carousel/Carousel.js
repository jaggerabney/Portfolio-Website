import { useState, useEffect, useRef } from "react";

import Preview from "../Preview/Preview";

import classes from "./Carousel.module.css";

let previewWidth, gap;

export default function Carousel({ posts }) {
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);
  const [xOffset, setXOffset] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const vwPxScalingFactor = window.innerWidth / 100;
    const previewWidthVw = Number(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--preview-width")
        .replace(/\D/g, "")
    );
    const gapVw = Number(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--work-carousel-gap")
        .replace(/\D/g, "")
    );

    previewWidth = vwPxScalingFactor * previewWidthVw;
    gap = vwPxScalingFactor * gapVw;
  }, []);

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
            className={classes.preview}
            key={post.id}
            link={post.link}
            imageName={post.imageName}
            title={post.title}
            description={post.description}
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
