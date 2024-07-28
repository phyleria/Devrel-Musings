import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ArticlesGrid from "./components/ArticlesGrid";
import Devrel from "./components/Devrel";
import Musings from "./components/Musings";
import Music from "./components/Music";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ArticlesGrid" element={<ArticlesGrid />} />
        <Route path="/devrel" element={<Devrel />} />
        <Route path="/Musings" element={<Musings />} />
        <Route path="/Music" element={<Music />} />
      </Routes>
    </Router>
  );
}

export default App;
