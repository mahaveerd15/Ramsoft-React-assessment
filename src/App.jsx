// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Home from "./components/Home";
import "./styles.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}
