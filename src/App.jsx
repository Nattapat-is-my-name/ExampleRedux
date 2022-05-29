import "./App.css";
import Example from "./Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Item from "./Components/item";
import React from "react";
import { connect } from "react-redux";
import { Component } from "react";
import Post from "./Components/PostFrom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Example />
          <Routes>
            <Route path="/" element={<Post/>} />
            <Route path="/Item" element={<Item/>} />
          </Routes>
  
        </header>
      </div>
    );
  }
}

export default App;
