import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";

import classes from "./BackButton.module.css";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link className={classes.link} href="/">
      <div className={classes.back}>
        <IconContext.Provider value={{ size: "48px" }}>
          <IoIosArrowRoundBack />
        </IconContext.Provider>
        Back
      </div>
    </Link>
  );
}
