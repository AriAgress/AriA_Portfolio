import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Nav from "./Components/Nav/Nav";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  const colorSwitch = useSelector((state) => state.colorSwitch);
  return (
    <div
      className="App"
      colorSwitch={colorSwitch}
      style={{
        backgroundColor: `${colorSwitch ? "#f1f1ee" : "#041c32"}`,
        transition: "background-color 0.3s linear",
      }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Project" element={<Body />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
