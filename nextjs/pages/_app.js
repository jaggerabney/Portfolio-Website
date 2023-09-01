import Navbar from "../components/Layout/Navbar/Navbar";
import BackgroundImage from "../components/Layout/BackgroundImage/BackgroundImage";
import BackgroundBlur from "../components/Layout/BackgroundBlur/BackgroundBlur";
import bgImage from "../public/images/Home.jpg";

import "../styles/_app.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="app">
      <div className="content">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <BackgroundImage src={bgImage} alt="Background" />
      <BackgroundBlur />
    </div>
  );
}
