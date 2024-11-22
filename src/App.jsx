import React from "react";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MovieDetail/:id" element={<MovieDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
