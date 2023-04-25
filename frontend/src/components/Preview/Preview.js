import Window from "../UI/Window/Window";

import classes from "./Preview.module.css";

export default function Preview(props) {
  const image = require(`../../images/${props.imageName}`);

  return (
    <Window className={classes.preview}>
      <a href={`props.link`} target="_blank" rel="noreferrer">
        <img className={classes.image} src={image} alt={props.altText} />
      </a>
      <p className={classes.description}>{props.description}</p>
    </Window>
  );
}
