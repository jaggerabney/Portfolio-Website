import classes from "./Article.module.css";

export default function Article({ children, className }) {
  return (
    <article className={`${classes.article} ${className}`}>{children}</article>
  );
}
