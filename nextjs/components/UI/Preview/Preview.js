import { useState, useEffect } from "react";
import Link from "next/link";
import Window from "../Window/Window";

import useHttp from "../../../hooks/use-http";

import classes from "./Preview.module.css";

export default function Preview({
  className,
  imageKey,
  link,
  title,
  description,
  onClick
}) {
  const [imageUrl, setImageUrl] = useState("");
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({ url: `/api/image?key=${imageKey}` }, (res) =>
      setImageUrl(res.url)
    );
  }, []);

  let linkComponent = <></>;

  if (link.startsWith("/blog")) {
    linkComponent = (
      <Link href={link} scroll={true}>
        <img
          className={classes.image}
          src={imageUrl}
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
          src={imageUrl}
          alt={title}
        />
      </a>
    );
  }

  return (
    <Window outerClassName={`${className} ${classes.preview}`}>
      {linkComponent}
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.description}>{description}</div>
    </Window>
  );
}
