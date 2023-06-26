import React from "react";
import RouterHeader from "./RouterHeader";
import RouterNav from "./RouterNav";
import RouterFooter from "./RouterFooter";
import RouterHome from "./RouterHome";
import RouterNewPost from "./RouterNewPost";
import RouterPostPage from "./RouterPostPage";
import RouterAbout from "./RouterAbout";
import RouterMissing from "./RouterMissing";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  return (
    <div>
      <RouterHeader />
      <RouterNav />
      <Router>
        <Routes>
          <Route exact path="/" element={<RouterHome />} />
          <Route exact path="/post" element={<RouterNewPost />} />
          <Route path="/post/:id" element={<RouterPostPage />} />
          <Route path="about" element={<RouterAbout />} />
          <Route path="*" element={<RouterMissing />} />
        </Routes>
      </Router>
      <RouterFooter />
    </div>
  );
}

export default App;

// npx json-server -p 3500 -w data/db.json
