import Home from "../components/Sections/Home/Home";
import About from "../components/Sections/About/About";
import Work from "../components/Sections/Work/Work";

export default function HomePage() {
  return (
    <div className="sections">
      <Home />
      <About />
      <Work />
    </div>
  );
}
