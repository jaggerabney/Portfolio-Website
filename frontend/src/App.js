import Navbar from "./components/Navbar/Navbar";
import Typewriter from "./components/UI/Typewriter/Typewriter";

import classes from "./App.module.css";

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
