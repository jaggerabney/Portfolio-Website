import { useEffect, useState } from "react";

import Typewriter from "../../UI/Typewriter/Typewriter";
import Preview from "../../UI/Preview/Preview";

import classes from "./Work.module.css";

const DUMMY_WORK = [
  {
    id: "w1",
    link: "https://react-meetups-jaggerabney.vercel.app/",
    imageName: "React-The-Complete-Guide-Project.png",
    title: `"React - The Complete Guide" Final Project`,
    description: `The final project that I made for the "React - The Complete Guide" course on Udemy.
      It's a mock meetup sharing website that uses Firebase to store posts in a database.
      You can add meetups, view all meetups, and view individual meetups. 
      This was the first full website that I made using React.`,
  },
  {
    id: "w2",
    link: "https://nodejs-complete-guide-final.onrender.com/",
    imageName: "NodeJS-The-Complete-Guide-Project.png",
    title: `"NodeJS - The Complete Guide" Final Project`,
    description: `The final project that I made for the "NodeJS - The Complete Guide" course on Udemy.
      It's a mock shopping website that is statically generated, RESTful, and has authentication.
      Additionally, it uses several JavaScript libraries, including Stripe, SendGrid, Helmet, Morgan, and more.
      This was my first full project that uses NodeJS.`,
  },
  {
    id: "w3",
    link: "https://csci-102-final.onrender.com/index.html",
    imageName: "Undead-Settlement-Photography.png",
    title: "CSCI 102 Final Project",
    description: `My final project for CSCI 102 - Website Development - at Highline College.
      It's a mock company website for a photography company based in the world of Dark Souls 3.
      It was made using just HTML, CSS, and JavaScript. While it's not as impressive as my other projects,
      I'm still proud of it.`,
  },
];

function increment(index) {
  return index === DUMMY_WORK.length - 1 ? 0 : index + 1;
}

function decrement(index) {
  return index === 0 ? DUMMY_WORK.length - 1 : index - 1;
}

export default function Work() {
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState();

  const activeWindow = DUMMY_WORK[activeWindowIndex];
  const nextWindow = DUMMY_WORK[increment(activeWindowIndex)];
  const prevWindow = DUMMY_WORK[decrement(activeWindowIndex)];

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
      setActiveWindowIndex((prevIndex) => decrement(prevIndex));
    } else if (direction === "right") {
      setSlideDirection("right");
      setActiveWindowIndex((prevIndex) => increment(prevIndex));
    }
  }

  return (
    <section className={classes.content}>
      <Typewriter text="How about a look at my work?" />
      <div className={classes.container}>
        {prevWindow && (
          <Preview
            className={slideDirection ? classes[slideDirection] : ""}
            key={prevWindow.id}
            link={null}
            imageName={prevWindow.imageName}
            title={prevWindow.title}
            description={prevWindow.description}
          />
        )}
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
        {activeWindow && (
          <Preview
            className={slideDirection ? classes[slideDirection] : ""}
            key={activeWindow.id}
            link={activeWindow.link}
            imageName={activeWindow.imageName}
            title={activeWindow.title}
            description={activeWindow.description}
          />
        )}
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
        {nextWindow && (
          <Preview
            className={slideDirection ? classes[slideDirection] : ""}
            key={nextWindow.id}
            link={null}
            imageName={nextWindow.imageName}
            title={nextWindow.title}
            description={nextWindow.description}
          />
        )}
      </div>
    </section>
  );
}
