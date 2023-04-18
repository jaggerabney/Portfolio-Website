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
        <CircularImage name="me_cropped.jpg" altText="Me!" />
      </section>
    </>
  );
}

export default App;
