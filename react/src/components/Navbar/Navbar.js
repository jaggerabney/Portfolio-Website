import classes from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbar__list}>
        <li className={classes.navbar__listItem}>HOME</li>
        <li className={classes.navbar__listItem}>ABOUT</li>
        <li className={classes.navbar__listItem}>WORK</li>
        <li className={classes.navbar__listItem}>BLOG</li>
        <li className={classes.navbar__listItem}>CONTACT</li>
      </ul>
    </nav>
  );
}
