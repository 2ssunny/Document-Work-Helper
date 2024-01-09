import { Link } from "react-router-dom";
import React from "react";

import "./nav.css";
import logo from "../media/logo.png";

function App() {
  return (
    <div>
      <header className="title-header">
        <Link to="/" className="tltle-text">
          <img src={logo} className="title-logo" alt="logo" />
        </Link>

        <Link to="About" className="tltle-text">
          <span className="title-text2">About</span>
        </Link>

        <Link to="Capitalizing" className="tltle-text">
          <span className="title-text2">Capitalizing the Title</span>
        </Link>

        <Link to="SentenceNo" className="tltle-text">
          <span className="title-text2">Numbers of Sentences</span>
        </Link>
      </header>
    </div>
  );
}

export default App;
