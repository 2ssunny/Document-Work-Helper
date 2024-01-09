import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";

import Nav from "./components/nav.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Capitalizing from "./components/Capitalizing.js";
import SentenceNo from "./components/SentenceNo.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="Nav" element={<Nav />} />
          <Route path="About" element={<About />} />
          <Route path="Capitalizing" element={<Capitalizing />} />
          <Route path="SentenceNo" element={<SentenceNo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
