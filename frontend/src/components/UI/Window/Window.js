import classes from "./Window.module.css";

export default function Window(props) {
  return (
    <div className={classes.background}>
      <div className={classes["top-bar"]}>
        <div className={classes["action-button close"]} />
        <div className={classes["action-button minimize"]} />
        <div className={classes["action-button fullscreen"]} />
      </div>
      <>
        <div className={classes.tab} />
        <div className={classes["tab-bar"]} />
      </>
      <div className={classes.editor}>
        <div className={classes["line-numbers"]}>
          {/* add line numbers here! */}
        </div>
        <div className={classes["text-area"]}>
          {/* add about-me.json here! */}
        </div>
      </div>
    </div>
  );
}
