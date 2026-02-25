import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import ArticlesGrid from "./components/ArticlesGrid";
import Devrel from "./components/Devrel";
import Musings from "./components/Musings";
import Music from "./components/Music";
import Reads from "./components/Reads";


import { FaithChanges, DX, OF, SamburuGirls, There, Firsts, IteratingDX, Who, Prayed, Homegoing } from "./components/BlogPosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ArticlesGrid" element={<ArticlesGrid />} />
        <Route path="/devrel" element={<Devrel />} />
        <Route path="/Musings" element={<Musings />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Reads" element={<Reads />} />
        <Route path="/blog/faith-changes" element={<FaithChanges />} />
        <Route path="/blog/DX" element={<DX />} />
        <Route path="/blog/OF" element={<OF />} />
        <Route path="/blog/IteratingDX" element={<IteratingDX />} />
        <Route path="/blog/faith-changes" element={<FaithChanges />} />
<Route path="/blog/what-is-the-cost-of-education-for-a-samburu-girl" element={<SamburuGirls />} />
<Route path="/blog/im-there-the-story-behind-the-song" element={<There />} />
<Route path="/blog/firsts-a-2024-recap" element={<Firsts />} />
<Route path="/blog/who-decides-what-gets-funded-in-africa" element={<Who />} />
<Route path="/blog/to-those-who-pray-for-us" element={<Prayed />} />  {/* ← new slug route */}
<Route path="/blog/Prayed" element={<Navigate to="/blog/to-those-who-pray-for-us" replace />} />  {/* ← old redirect */}
<Route path="/blog/my-learnings-and-strategies-in-building-better-developer-experience" element={<DX />} />
<Route path="/blog/empowering-financial-communities-through-open-source-readiness" element={<OF />} />
<Route path="/blog/iterating-on-developer-experience" element={<IteratingDX />} />
<Route path="/reads/homegoing" element={<Homegoing />} />
      </Routes>
    </Router>
  );
}

export default App;
