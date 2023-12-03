import { useEffect } from "react";

import Navbar from "../components/Layout/Navbar/Navbar";
import BackgroundImage from "../components/Layout/BackgroundImage/BackgroundImage";
import BackgroundBlur from "../components/Layout/BackgroundBlur/BackgroundBlur";
import Transition from "../components/UI/Transition/Transition";
import { SectionContextProvider } from "../store/section-context";
import bgImage from "../public/images/backgrounds/Home.jpg";

import classes from "../styles/App.module.css";
import "../styles/_app.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SectionContextProvider>
      <Navbar className={classes.navbar} />
      <div id="content" className={classes.content}>
        <Component {...pageProps} />
      </div>
      <BackgroundImage src={bgImage} alt="Background" />
      <BackgroundBlur />
    </SectionContextProvider>
  );
}
