import Window from "../Window/Window";
import formatJson from "../../../util/json-formatter";

import classes from "./CodeWindow.module.css";

export default function CodeWindow({ outerClassName, json }) {
  const code = formatJson(
    JSON.stringify(
      json,
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
