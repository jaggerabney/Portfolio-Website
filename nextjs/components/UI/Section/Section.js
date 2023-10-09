import classes from "./Section.module.css";

export default function Section({ children, className }) {
  return (
    <section className={`${className} ${classes.section} `}>{children}</section>
  );
}
