import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Offer from "../components/Offer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offer" element={<Offer />} />
    </Routes>
  );
}

export default App;
