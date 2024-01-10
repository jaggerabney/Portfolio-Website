import Navbar from "../components/Layout/Navbar/Navbar";
import BackgroundImage from "../components/Layout/BackgroundImage/BackgroundImage";
import BackgroundBlur from "../components/Layout/BackgroundBlur/BackgroundBlur";
import { SectionContextProvider } from "../store/section-context";

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
      <BackgroundImage alt="Background" />
      <BackgroundBlur />
    </SectionContextProvider>
  );
}
