import Typewriter from "../../UI/Typewriter/Typewriter";

import classes from "./Work.module.css";
import Preview from "../../Preview/Preview";

const DUMMY_WORK = [
  {
    id: "w1",
    link: "https://react-meetups-jaggerabney.vercel.app/",
    imageName: "React-The-Complete-Guide-Project.png",
    altText: "React Project",
    description: `The final project that I made for the "React - The Complete Guide" course on Udemy.
      It's a mock meetup sharing website that uses Firebase to store posts in a database.
      You can add meetups, view all meetups, and view individual meetups. 
      This was the first full website that I made using React.`,
  },
  {
    id: "w2",
    link: "https://nodejs-complete-guide-final.onrender.com/",
    imageName: "NodeJS-The-Complete-Guide-Project.png",
    altText: "NodeJS Project",
    description: `The final project that I made for the "NodeJS - The Complete Guide" course on Udemy.
      It's a mock shopping website that is statically generated, RESTful, and has authentication.
      Additionally, it uses several JavaScript libraries, including Stripe, SendGrid, Helmet, Morgan, and more.
      This was my first full project that uses NodeJS.`,
  },
  {
    id: "w3",
    link: "https://csci-102-final.onrender.com/index.html",
    imageName: "Undead-Settlement-Photography.png",
    altText: "CSCI 102 Project",
    description: `My final project for CSCI 102 - Website Development - at Highline College.
      It's a mock company website for a photography company based in the world of Dark Souls 3.
      It was made using just HTML, CSS, and JavaScript. While it's not as impressive as my other projects,
      this was my first foray into web development, and I'm still proud of it.`,
  },
];

export default function Work() {
  return (
    <section className={classes.content}>
      <Typewriter text="How about a look at my work?" />
      <div className={classes.windows}>
        {DUMMY_WORK.map((work) => (
          <Preview
            key={work.id}
            link={work.link}
            imageName={work.imageName}
            altText={work.altText}
            description={work.description}
          />
        ))}
      </div>
    </section>
  );
}
