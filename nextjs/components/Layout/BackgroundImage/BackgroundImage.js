import Image from "next/image";

import classes from "./BackgroundImage.module.css";

export default function BackgroundImage({ src, alt }) {
  return <Image className={classes.image} src={src} alt={alt} priority />;
}
