import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import WasteInfoPage from "./components/WasteInfoPage";
import RouteCollectionPage from "./components/RouteCollectionPage";

function App() {
  return (
    <Router>
        <div className="flex h-full">
          <Sidebar />
          <div className="w-full">
          <Navbar />
          <div className="ml-4 mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/waste-info" element={<WasteInfoPage />} />
            <Route path="/route-collection" element={<RouteCollectionPage />} />
          </Routes>
          </div>
          </div>
        </div>
        
    </Router>
  );
}

export default App;
