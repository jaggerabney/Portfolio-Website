import { useState, useEffect } from "react";

import Preview from "../Preview/Preview";
import { increment, decrement } from "../../../util/array";

import classes from "./WorkCarousel.module.css";

export default function WorkCarousel({ data }) {
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState();

  const activeWindow = data[activeWindowIndex];
  const nextWindow = data[increment(data, activeWindowIndex)];
  const nextNextWindow = data[increment(data, data.indexOf(nextWindow))];
  const prevWindow = data[decrement(data, activeWindowIndex)];
  const prevPrevWindow = data[decrement(data, data.indexOf(prevWindow))];

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
      <Preview
        className={slideDirection ? classes[slideDirection] : ""}
        key={prevPrevWindow.id + Math.random()}
        link={null}
        imageName={prevPrevWindow.imageName}
        title={prevPrevWindow.title}
        description={prevPrevWindow.description}
      />
      <Preview
        className={slideDirection ? classes[slideDirection] : ""}
        key={prevWindow.id}
        link={null}
        imageName={prevWindow.imageName}
        title={prevWindow.title}
        description={prevWindow.description}
      />
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
      <Preview
        className={slideDirection ? classes[slideDirection] : ""}
        key={activeWindow.id}
        link={activeWindow.link}
        imageName={activeWindow.imageName}
        title={activeWindow.title}
        description={activeWindow.description}
      />
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
      <Preview
        className={slideDirection ? classes[slideDirection] : ""}
        key={nextWindow.id}
        link={null}
        imageName={nextWindow.imageName}
        title={nextWindow.title}
        description={nextWindow.description}
      />
      <Preview
        className={slideDirection ? classes[slideDirection] : ""}
        key={nextNextWindow.id + Math.random()}
        link={null}
        imageName={nextNextWindow.imageName}
        title={nextNextWindow.title}
        description={nextNextWindow.description}
      />
    </div>
  );
}
