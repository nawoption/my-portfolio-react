import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <main className="text-gray-400 bg-sky-950 body-font">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ProjectDetail />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
