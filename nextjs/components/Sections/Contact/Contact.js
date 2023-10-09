import Typewriter from "../../UI/Typewriter/Typewriter";
import Window from "../../UI/Window/Window";
import Article from "../../UI/Article/Article";

import EmailIcon from "/public/images/contact/email-logo.svg";
import GithubIcon from "/public/images/contact/github-logo.svg";
import LinkedInIcon from "/public/images/contact/linkedin-logo.svg";
import classes from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={classes.content}>
      <Typewriter text="Let's get in touch!" />
      <div className={classes.spacer} />
      <div className={classes.wrapper}>
        <Window
          outerClassName={classes.window}
          innerClassName={classes.windowInner}
        >
          <ul className={classes.items}>
            <li className={classes.item}>
              <p>
                <a href="mailto:jagger.abney@gmail.com">
                  jagger.abney@gmail.com
                </a>
              </p>
              <EmailIcon style={{ height: 48, width: 48 }} fill="white" />
            </li>
            <li className={classes.item}>
              <p>
                <a target="_blank" href="https://github.com/jaggerabney">
                  github.com/jaggerabney
                </a>
              </p>
              <GithubIcon style={{ height: 48, width: 48 }} fill="white" />
            </li>
            <li className={classes.item}>
              <p>
                <a
                  href="https://www.linkedin.com/in/jaggerabney/"
                  target="_blank"
                >
                  linkedin.com/in/jaggerabney
                </a>
              </p>
              <LinkedInIcon style={{ height: 48, width: 48 }} fill="white" />
            </li>
          </ul>
        </Window>
        <Article className={classes.text}>
          Like what you see? Let's work together! Send an email to the following
          address and I'll get back to you ASAP. Alternatively, you can find me
          at any of the accounts listed below.
        </Article>
      </div>
    </section>
  );
}
