import Window from "../Window/Window";

import classes from "./Preview.module.css";

export default function Preview({
  className,
  imageName,
  link,
  title,
  description,
}) {
  return (
    <Window outerClassName={className} innerClassName={classes.preview}>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          className={classes.image}
          src={`../../../images/work/${imageName}`}
          alt={title}
        />
      </a>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </Window>
  );
}
