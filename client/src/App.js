import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    {/* <Route exact path="/" component={Search}/> */}
    <Route exact path="/search" component={Search}/>
    <Route exact path="/saved" component={Saved}/>
    </div>
    </Router>
  );
}


export default App;
