import { useContext } from "react";

import Navbar from "../components/Layout/Navbar/Navbar";
import BackgroundImage from "../components/Layout/BackgroundImage/BackgroundImage";
import BackgroundBlur from "../components/Layout/BackgroundBlur/BackgroundBlur";
import SectionContext, {
  SectionContextProvider,
} from "../store/section-context";
import bgImage from "../public/images/backgrounds/Home.jpg";

import "../styles/_app.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SectionContextProvider>
      <Navbar className="navbar" />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <BackgroundImage src={bgImage} alt="Background" />
      <BackgroundBlur />
    </SectionContextProvider>
  );
}
