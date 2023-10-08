import classes from "./CircularImage.module.css";

export default function CircularImage({ name, altText }) {
  const image = require(`../../../images/${name}`);

  return <img className={classes.image} src={image} alt={altText} />;
}
