import Link from "next/link";
import Window from "../Window/Window";

import classes from "./Preview.module.css";

export default function Preview({
  className,
  imageName,
  link,
  title,
  description,
}) {
  let linkComponent = <></>;

  if (link.startsWith("/blog")) {
    linkComponent = (
      <Link href={link}>
        <img
          className={classes.image}
          src={`../../../images/${imageName}`}
          alt={title}
        />
      </Link>
    );
  } else {
    linkComponent = (
      <a href={link} target="_blank" rel="noreferrer">
        <img
          className={classes.image}
          src={`../../../images/${imageName}`}
          alt={title}
        />
      </a>
    );
  }

  return (
    <Window outerClassName={className}>
      {linkComponent}

      <h3 className={classes.title}>{title}</h3>
      <div className={classes.description}>{description}</div>
    </Window>
  );
}
