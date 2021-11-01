import "./App.css";
import Header from "./Header";
import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Work from "./Work";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
