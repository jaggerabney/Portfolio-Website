import classes from "./Navbar.module.css";

export const items = ["home", "about", "work", "blog", "contact"];

export default function Navbar({ className }) {
  return (
    <nav className={`${classes.navbar} ${className}`}>
      <ul className={classes.navbar__list}>
        {items.map((item) => (
          <li key={item} className={classes.navbar__listItem}>
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
}
