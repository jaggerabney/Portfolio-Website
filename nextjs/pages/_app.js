import Navbar from "../components/Navbar/Navbar";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import BackgroundBlur from "../components/BackgroundBlur/BackgroundBlur";
import bgImage from "../public/images/Home.jpg";

import "../styles/_app.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="app">
      <BackgroundImage
        src={bgImage}
        alt="Background"
        height={1080}
        width={1920}
      />
      <BackgroundBlur />
      <Component {...pageProps} />
      <Navbar />
    </div>
  );
}
