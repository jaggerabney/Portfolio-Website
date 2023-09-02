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
      this was my first foray into web development, and I'm still proud of it.`,
  },
];

export default function Work() {
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);
  const activeWindow = DUMMY_WORK[activeWindowIndex];

  function changeActiveWindowHandler(direction) {
    if (direction === "left") {
      setActiveWindowIndex((prevIndex) => {
        if (prevIndex === 0) {
          return DUMMY_WORK.length - 1;
        } else {
          return prevIndex - 1;
        }
      });
    } else if (direction === "right") {
      setActiveWindowIndex((prevIndex) => {
        if (prevIndex === DUMMY_WORK.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }
  }

  return (
    <section className={classes.content}>
      <Typewriter text="How about a look at my work?" />
      <div className={classes.container}>
        <div
          className={classes.button}
          onClick={changeActiveWindowHandler.bind(this, "left")}
        >
          {"<"}
        </div>
        <div className={classes.window}>
          {activeWindow && (
            <Preview
              key={activeWindow.id}
              link={activeWindow.link}
              imageName={activeWindow.imageName}
              title={activeWindow.title}
              description={activeWindow.description}
            />
          )}
        </div>
        <div
          className={classes.button}
          onClick={changeActiveWindowHandler.bind(this, "right")}
        >
          {">"}
        </div>
      </div>
    </section>
  );
}
