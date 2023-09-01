import Image from "next/image";

import classes from "./BackgroundImage.module.css";

export default function BackgroundImage({ src, alt, height, width }) {
  return (
    <Image
      className={classes.image}
      src={src}
      alt={alt}
      height={height}
      width={width}
    />
  );
}
