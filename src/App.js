import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Pizzle from "./pages/Pizzle";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pizzle />} />
        <Route path="/explore" element={<Explore />} />
        {/* <Route path="/explore" element={<Explore />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
