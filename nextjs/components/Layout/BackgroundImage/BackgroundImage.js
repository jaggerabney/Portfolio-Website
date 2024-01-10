import { useState, useEffect } from "react";
import Image from "next/image";

import useHttp from "../../../hooks/use-http";

import classes from "./BackgroundImage.module.css";

const key = "images/backgrounds/Home.jpg";

export default function BackgroundImage({ alt }) {
  const [imageUrl, setImageUrl] = useState("");
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({ url: `/api/image?key=${key}` }, (res) =>
      setImageUrl(res.url)
    );
  }, []);

  return (
    <Image
      className={classes.image}
      src={imageUrl}
      alt={alt}
      height={1920}
      width={1080}
      priority
    />
  );
}
