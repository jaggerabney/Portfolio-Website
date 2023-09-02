import classes from "./Window.module.css";

export default function Window({ outerClassName, innerClassName, children }) {
  return (
    <div className={`${outerClassName} ${classes.background}`}>
      <div className={classes["top-bar"]}>
        <div className={`${classes["action-button"]} ${classes.close}`} />
        <div className={`${classes["action-button"]} ${classes.minimize}`} />
        <div className={`${classes["action-button"]} ${classes.fullscreen}`} />
      </div>
      <div className={innerClassName}>{children}</div>
    </div>
  );
}
