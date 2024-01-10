import { useState, useEffect } from "react";
import Image from "next/image";

import Window from "../Window/Window";
import useHttp from "../../../hooks/use-http";

import classes from "./ImageWindow.module.css";

const key = "images/about/me_cropped.jpg";

export default function ImageWindow({ outerClassName }) {
  const [imageUrl, setImageUrl] = useState("");
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({ url: `/api/image?key=${key}` }, (res) =>
      setImageUrl(res.url)
    );
  }, []);

  return (
    <Window innerClassName={classes.window} outerClassName={outerClassName}>
      <Image
        fill
        style={{ objectFit: "cover" }}
        className={classes.image}
        src={imageUrl}
        alt={"A picture of Jagger Abney."}
        loading="eager"
      />
    </Window>
  );
}
