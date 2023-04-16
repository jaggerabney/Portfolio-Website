import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/UI/Heading/Heading";

import classes from "./App.module.css";

function App() {
  return (
    <>
      <Navbar />
      <section className={classes.content}>
        <Heading>Hey! I'm Jagger. Welcome to my website.</Heading>
      </section>
    </>
  );
}

export default App;
