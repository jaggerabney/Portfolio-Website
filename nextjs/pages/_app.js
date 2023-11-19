import { useEffect } from "react";

import Navbar from "../components/Layout/Navbar/Navbar";
import BackgroundImage from "../components/Layout/BackgroundImage/BackgroundImage";
import BackgroundBlur from "../components/Layout/BackgroundBlur/BackgroundBlur";
import Transition from "../components/UI/Transition/Transition";
import { SectionContextProvider } from "../store/section-context";
import bgImage from "../public/images/backgrounds/Home.jpg";

import "../styles/_app.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   window.addEventListener("popstate", function (e) {
  //     window.location.reload();
  //   });
  // }, []);

  return (
    <SectionContextProvider>
      <Navbar className="navbar" />
      <div id="content" className="content">
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </div>
      <BackgroundImage src={bgImage} alt="Background" />
      <BackgroundBlur />
    </SectionContextProvider>
  );
}
