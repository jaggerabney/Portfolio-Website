import Navbar from "../components/Navbar/Navbar";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import bgImage from "../public/images/Home.jpg";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <BackgroundImage
        src={bgImage}
        alt="Background"
        height={1080}
        width={1920}
      />
    </>
  );
}
