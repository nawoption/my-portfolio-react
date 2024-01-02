import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./components/Home";

export default function App() {
  return (
    <main className="text-gray-400 bg-sky-950 body-font">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </main>
  );
}
