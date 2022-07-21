import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Details from "./Details";
// import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<Details />} />
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
