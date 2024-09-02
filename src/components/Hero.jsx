import React from "react";
import "../styles/Hero.css"

function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroTitle">
        <h1>
          <span>Briefly</span> for Chrome
        </h1>
        <h2>
          Read smarter and faster. With the Briefly Chrome extension, you'll get
          instant AI-powered article summaries wherever you browse online.
        </h2>
      </div>
      <div className="heroButtons">
        <button className="installBtn"><a>Install for Free!</a></button>
        <button className="demoBtn"><a>Watch Demo</a></button>
      </div>
    </div>
  );
}

export default Hero;
