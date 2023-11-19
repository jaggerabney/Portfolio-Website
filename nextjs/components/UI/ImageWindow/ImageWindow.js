import Image from "next/image";

import Window from "../Window/Window";
import portrait from "/public/images/about/me_cropped.jpg";

import classes from "./ImageWindow.module.css";

export default function ImageWindow({ outerClassName }) {
  return (
    <Window innerClassName={classes.window} outerClassName={outerClassName}>
      <Image
        fill
        sizes="500px"
        style={{ objectFit: "cover" }}
        className={classes.image}
        src={portrait}
        alt={"A picture of Jagger Abney."}
      />
    </Window>
  );
}
