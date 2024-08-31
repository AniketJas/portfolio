import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  // window.history.scrollRestoration = "manual";
  // }, []);

  return (
    <>
      <div className="fixed w-screen">
        <Navbar />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
    </>
  );
}

export default App;
