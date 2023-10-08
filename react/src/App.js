import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Sections/Home/Home";
import About from "./components/Sections/About/About";
import Work from "./components/Sections/Work/Work";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="page-content">
        <Navbar />
        <Home />
        <About />
        <Work />
      </div>
    </div>
  );
}

export default App;
