import classes from "./Window.module.css";

export default function Window({ className, children }) {
  return (
    <div className={`${classes.background}`}>
      <div className={classes["top-bar"]}>
        <div className={`${classes["action-button"]} ${classes.close}`} />
        <div className={`${classes["action-button"]} ${classes.minimize}`} />
        <div className={`${classes["action-button"]} ${classes.fullscreen}`} />
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}
