import React from "react";
import "./App.css";
import "./src/css/fonts.css"
import "./src/css/Header.css"
import "./src/css/Me.css"
import "./src/css/Projects.css"
import "./src/css/Reasons.css"
import "./src/css/Resume.css"
import "./src/css/Services.css"
import Header from "./src/Components/Header";
import Me from "./src/Components/Me";
import Projects from "./src/Components/Projects";
import Reasons from "./src/Components/Reasons";
import Services from "./src/Components/Services";

const App = () => {
    return (
      <div className="App">
        <Header />
        <Me />
        <h1>My Services</h1>
        <Services />
        <h1>My Projects</h1>
        <Projects />
        <h1>Why me?</h1>
        <Reasons />
      </div>
    );
}

export default App;
