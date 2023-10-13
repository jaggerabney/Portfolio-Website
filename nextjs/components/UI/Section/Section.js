import classes from "./Section.module.css";

export default function Section({ children, className, id }) {
  return (
    <section id={id} className={`${className} ${classes.section} `}>
      {children}
    </section>
  );
}
