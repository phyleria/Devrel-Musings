import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ArticlesGrid from "./components/ArticlesGrid";
import Devrel from "./components/Devrel";
import Musings from "./components/Musings";
import Music from "./components/Music";
import Work from "./components/Work";


import { FaithChanges, DX, OF, SamburuGirls, There, Firsts, IteratingDX, Who } from "./components/BlogPosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ArticlesGrid" element={<ArticlesGrid />} />
        <Route path="/devrel" element={<Devrel />} />
        <Route path="/Musings" element={<Musings />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/blog/faith-changes" element={<FaithChanges />} />
        <Route path="/blog/DX" element={<DX />} />
        <Route path="/blog/OF" element={<OF />} />
        <Route path="/blog/SamburuGirls" element={<SamburuGirls />} />
        <Route path="/blog/There" element={<There />} />
        <Route path="/blog/Firsts" element={<Firsts />} />
        <Route path="/blog/IteratingDX" element={<IteratingDX />} />
        <Route path="/blog/Who" element={<Who />} />


      </Routes>
    </Router>
  );
}

export default App;
