import "./App.css";
import { Route, Routes, Redirect } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Component />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
