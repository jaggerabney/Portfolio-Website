import Navbar from "./components/Navbar/Navbar";
import Typewriter from "./components/UI/Typewriter/Typewriter";
import CircularImage from "./components/UI/CircularImage/CircularImage";

import classes from "./App.module.css";

function App() {
  return (
    <>
      <Navbar />
      <section className={classes.content}>
        <Typewriter text="Hey! I'm Jagger. Welcome to my website." />
        <article className={classes.article}>
          <CircularImage name="me_cropped.jpg" altText="Me!" />
          <p>
            I'm an aspiring fullstack developer from Seattle. I started coding
            in the library of my middle school at 14, and I've since never
            stopped. After earning my degree in 2021, I decided that I want to
            program for the rest of my life. Nothing else on this earth
            scratches my creative itch quite like it...and hey, it pays well,
            too. Scroll down to see a little more about myself and my work!
          </p>
        </article>
      </section>
    </>
  );
}

export default App;
