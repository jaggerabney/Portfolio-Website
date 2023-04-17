import classes from "./Heading.module.css";

export default function Heading(props) {
  return <h1 className={classes.heading}>{props.children}</h1>;
}
