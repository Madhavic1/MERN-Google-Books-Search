import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Route exact path={["/","/search"]} >
      <Search />
    </Route>
    <Route exact path="/saved" component={Saved}/>
    </div>
    </Router>
  );
}


export default App;
