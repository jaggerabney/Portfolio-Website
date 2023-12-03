import Link from "next/link";
import Window from "../Window/Window";

import classes from "./Preview.module.css";

export default function Preview({
  className,
  imageName,
  link,
  title,
  description,
  onClick,
  date,
}) {
  let linkComponent = <></>;

  if (link.startsWith("/blog")) {
    linkComponent = (
      <Link href={link} scroll={true}>
        <img
          className={classes.image}
          src={`../../../images/${imageName}`}
          alt={title}
          onClick={onClick}
        />
      </Link>
    );
  } else {
    linkComponent = (
      <a href={link} target="_blank" rel="noreferrer">
        <img
          onClick={onClick}
          className={classes.image}
          src={`../../../images/${imageName}`}
          alt={title}
        />
      </a>
    );
  }

  return (
    <Window outerClassName={`${className} ${classes.preview}`}>
      {linkComponent}
      <div className={classes.titleWrapper}>
        <h3 className={classes.title}>{title}</h3>
        <h3 className={classes.date}>{date && `${" - "}${date}`}</h3>
      </div>
      <div className={classes.description}>{description}</div>
    </Window>
  );
}
