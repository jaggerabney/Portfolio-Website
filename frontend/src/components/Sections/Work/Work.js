import Typewriter from "../../UI/Typewriter/Typewriter";

import classes from "./Work.module.css";
import Preview from "../../Preview/Preview";

export default function Work() {
  return (
    <section className={classes.content}>
      <Typewriter text="How about a look at my work?" />
      <div className={classes.windows}>
        <Preview
          link="https://react-meetups-jaggerabney.vercel.app/"
          imageName="React-The-Complete-Guide-Project.png"
          altText="React Project"
          description='The final project for the "React - The Complete Guide" course on Udemy.'
        />
      </div>
    </section>
  );
}
