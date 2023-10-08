import classes from "./Navbar.module.css";

export default function Navbar() {
  const items = ["HOME", "ABOUT", "WORK", "BLOG", "CONTACT"];

  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbar__list}>
        {items.map((item) => (
          <li key={item} className={classes.navbar__listItem}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
