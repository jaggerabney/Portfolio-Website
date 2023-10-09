import classes from "./ContactItem.module.css";

export default function ContactItem({ linkUrl, linkText, Icon }) {
  return (
    <li className={classes.item}>
      <p>
        <a href={linkUrl}>{linkText}</a>
      </p>
      <Icon style={{ height: 48, width: 48 }} fill="white" />
    </li>
  );
}
