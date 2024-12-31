import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import FoodMenu from "./pages/FoodMenu"; // Import the new FoodMenu component
import DrinkMenu from "./pages/DrinkMenu"; // Import the new DrinkMenu component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-menu" element={<FoodMenu />} />{" "}
        {/* Add the route for FoodMenu */}
        <Route path="/drink-menu" element={<DrinkMenu />} />{" "}
        {/* Add the route for DrinkMenu */}
      </Routes>
    </Router>
  );
}

export default App;
