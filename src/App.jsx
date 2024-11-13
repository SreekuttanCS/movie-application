import React from "react";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import { Routes, Route } from "react-router-dom";
  
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/MovieDetail/:id" element={<MovieDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
