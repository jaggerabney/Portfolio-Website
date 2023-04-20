import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Sections/Home/Home";
import About from "./components/Sections/About/About";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="page-content">
        <Navbar />
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
