import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header2 from "./pages/Header2";

function App() {
  return (
    <Router>
      <Header2 /> {/* Include the Header component */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Route for category */}
      </Routes>
    </Router>
  );
}

export default App;
