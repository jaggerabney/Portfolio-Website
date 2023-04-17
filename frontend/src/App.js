import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/UI/Heading/Heading";

import classes from "./App.module.css";
import Typewriter from "./components/UI/Typewriter/Typewriter";

function App() {
  return (
    <>
      <Navbar />
      <section className={classes.content}>
        <Typewriter text="Hey! I'm Jagger. Welcome to my website." />
      </section>
    </>
  );
}

export default App;
