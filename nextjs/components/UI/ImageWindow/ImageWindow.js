import Image from "next/image";

import Window from "../Window/Window";
import portrait from "../../../public/images/me_cropped.jpg";

import classes from "./ImageWindow.module.css";

export default function ImageWindow({ outerClassName }) {
  return (
    <Window innerClassName={classes.window} outerClassName={outerClassName}>
      <Image className={classes.image} src={portrait} />
    </Window>
  );
}
