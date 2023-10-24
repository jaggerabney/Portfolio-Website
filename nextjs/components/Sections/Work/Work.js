import Section from "../../UI/Section/Section";
import Typewriter from "../../UI/Typewriter/Typewriter";
import Carousel from "../../UI/Carousel/Carousel";

import classes from "./Work.module.css";

export const DUMMY_WORK = [
  {
    id: "w1",
    link: "https://react-meetups-jaggerabney.vercel.app/",
    imageName: "work/React-The-Complete-Guide-Project.png",
    title: `"React - The Complete Guide" Final Project`,
    description: `The final project that I made for the "React - The Complete Guide" course on Udemy.
        It's a mock meetup sharing website that uses Firebase to store posts in a database.
        You can add meetups, view all meetups, and view individual meetups. 
        This was the first full website that I made using React.`,
  },
  {
    id: "w2",
    link: "https://nodejs-complete-guide-final.onrender.com/",
    imageName: "work/NodeJS-The-Complete-Guide-Project.png",
    title: `"NodeJS - The Complete Guide" Final Project`,
    description: `The final project that I made for the "NodeJS - The Complete Guide" course on Udemy.
        It's a mock shopping website that is statically generated, RESTful, and has authentication.
        Additionally, it uses several JavaScript libraries, including Stripe, SendGrid, Helmet, Morgan, and more.
        This was my first full project that uses NodeJS.`,
  },
  {
    id: "w3",
    link: "https://csci-102-final.onrender.com/index.html",
    imageName: "work/Undead-Settlement-Photography.png",
    title: "CSCI 102 Final Project",
    description: `My final project for CSCI 102 - Website Development - at Highline College.
        It's a mock company website for a photography company based in the world of Dark Souls 3.
        It was made using just HTML, CSS, and JavaScript. While it's not as impressive as my other projects,
        I'm still proud of it.`,
  },
];

export default function Work() {
  return (
    <Section id="work" className={classes.content}>
      <Typewriter text="How about a look at my work?" />
      <Carousel posts={DUMMY_WORK} />
    </Section>
  );
}
