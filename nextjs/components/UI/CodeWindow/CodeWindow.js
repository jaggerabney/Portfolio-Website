import Window from "../Window/Window";
import formatJson from "../../../util/json-formatter";

import classes from "./CodeWindow.module.css";

const DUMMY_DATA = {
  name: "Jagger Abney",
  age: 23,
  pronouns: "he/him",
  languages: {
    fluent: ["Java", "HTML", "CSS", "JavaScript", "NoSQL"],
    familiar: ["Python", "C++", "C#", "SQL"],
  },
  technologies: {
    fluent: ["React", "NodeJS", "Express", "MongoDB", "Next.js"],
    familiar: ["React Native", "MySQL"],
  },
  education: {
    college: "Highline College",
    degree: "Associate's of Science",
    major: "Computer Science",
    earned: "2021-12-21T04:56:59.000Z", // December 2021
  },
};

export default function CodeWindow({ outerClassName }) {
  const code = formatJson(
    JSON.stringify(
      DUMMY_DATA,
      (k, v) => {
        if (v instanceof Array) return JSON.stringify(v);
        return v;
      },
      4
    )
      .replace(/\\/g, "")
      .replace(/\"\[/g, "[")
      .replace(/\]\"/g, "]")
      .replace(/\"\{/g, "{")
      .replace(/\}\"/g, "}")
  );
  const numLines = code.split(/\n/g).length;

  return (
    <Window innerClassName={classes.window} outerClassName={outerClassName}>
      <section>
        <div className={classes["lower-bar"]}>
          <div className={classes.tab}>
            <span className={classes.logo}>{"{...}"}</span>
            about-me.json
          </div>
          <div className={classes["tab-bar"]} />
        </div>
      </section>
      <section className={classes.editor}>
        <ul className={classes.numbers}>
          {Array.from({ length: numLines }, (x, i) => i + 1).map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
        <pre
          className={classes.code}
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        ></pre>
      </section>
    </Window>
  );
}
