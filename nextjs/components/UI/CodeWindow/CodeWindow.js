import Window from "../Window/Window";
import formatJson from "../../../util/json-formatter";

import classes from "./CodeWindow.module.css";

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

export default function CodeWindow() {
  const numLines = JSON.stringify(DUMMY_DATA, null, 1).split(/\n/g).length;

  console.log(formatJson(JSON.stringify(DUMMY_DATA)));

  return (
    <Window className={classes.window}>
      <section>
        <div className={classes["lower-bar"]}>
          <div className={classes.tab}>about-me.json</div>
          <div className={classes["tab-bar"]} />
        </div>
      </section>
      <section className={classes.editor}>
        <ul className={classes.numbers}>
          {Array.from({ length: numLines }, (x, i) => i).map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
        <pre
          className={classes.code}
          dangerouslySetInnerHTML={{
            __html: formatJson(JSON.stringify(DUMMY_DATA, null, 4)),
          }}
        ></pre>
      </section>
    </Window>
  );
}
