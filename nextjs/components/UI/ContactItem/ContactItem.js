import { useState, useEffect } from "react";
import Image from "next/image";

import useHttp from "../../../hooks/use-http";

import classes from "./ContactItem.module.css";

export default function ContactItem({ linkUrl, linkText, imageKey }) {
  const [imageUrl, setImageUrl] = useState("");
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({ url: `/api/image?key=${imageKey}` }, (res) =>
      setImageUrl(res.url)
    );
  }, []);

  return (
    <li className={classes.item}>
      <p>
        <a href={linkUrl}>{linkText}</a>
      </p>
      {/* <Icon style={{ height: 48, width: 48 }} fill="white" /> */}
      <Image
        src={imageUrl}
        alt={linkText}
        width={48}
        height={48}
        style={{ filter: "invert(100%)" }}
      />
    </li>
  );
}
