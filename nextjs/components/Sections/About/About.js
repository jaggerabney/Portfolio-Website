import Typewriter from "../../UI/Typewriter/Typewriter";
import Window from "../../UI/Window/Window";

import classes from "./About.module.css";

const DUMMY_DATA = {
  name: "Jagger Abney",
  age: 22,
  pronouns: "he/him",
  languages: {
    fluent: ["Java", "HTML", "CSS", "JavaScript"],
    familiar: ["Python", "C++", "C#", "SQL", "NoSQL"],
  },
  technologies: {
    fluent: ["React", "NodeJS", "Express", "MongoDB"],
    familiar: ["Next.js", "React Native", "MySQL"],
  },
  education: {
    college: "Highline College",
    degree: "Associate's of Science",
    major: "Computer Science",
    earned: "2021-12-21T04:56:59.000Z", // December 2021
  },
};

export default function About() {
  const numLines = JSON.stringify(DUMMY_DATA, null, 1).split(/\n/g).length;

  console.log(numLines);

  return (
    <section className={classes.content}>
      <Typewriter text="Here's a little bit about me." />
      <div className={classes.windows}>
        <Window className={classes.window}>
          <ul className={classes.numbers}>
            {Array.from({ length: numLines }, (x, i) => i).map((num) => (
              <li>{num}</li>
            ))}
          </ul>
          <pre className={classes.code}>
            {JSON.stringify(DUMMY_DATA, null, 8)}
          </pre>
        </Window>
      </div>
    </section>
  );
}
