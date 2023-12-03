import Section from "../../UI/Section/Section";
import Typewriter from "../../UI/Typewriter/Typewriter";
import Window from "../../UI/Window/Window";
import Article from "../../UI/Article/Article";

import EmailIcon from "/public/images/contact/email-logo.svg";
import GithubIcon from "/public/images/contact/github-logo.svg";
import LinkedInIcon from "/public/images/contact/linkedin-logo.svg";
import classes from "./Contact.module.css";
import ContactItem from "../../UI/ContactItem/ContactItem";

export default function Contact() {
  return (
    <Section id="contact" className={classes.content}>
      <Typewriter text="Let's get in touch!" />
      <div className={classes.spacer} />
      <div className={classes.wrapper}>
        <Window
          outerClassName={classes.window}
          innerClassName={classes.windowInner}
        >
          <ul className={classes.items}>
            <ContactItem
              linkUrl="mailto:jagger.abney@gmail.com"
              linkText="jagger.abney@gmail.com"
              Icon={EmailIcon}
            />
            <ContactItem
              linkUrl="https://github.com/jaggerabney"
              linkText="github.com/jaggerabney"
              Icon={GithubIcon}
            />
            <ContactItem
              linkUrl="https://www.linkedin.com/in/jaggerabney/"
              linkText="linkedin.com/in/jaggerabney"
              Icon={LinkedInIcon}
            />
          </ul>
        </Window>
        <Article className={classes.text}>
          Like what you see? Let's work together! Send an email to the address
          above and I'll get back to you ASAP. Alternatively, you can find me on
          GitHub and LinkedIn.
        </Article>
      </div>
    </Section>
  );
}
