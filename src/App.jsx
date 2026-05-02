import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResearchDetail from "./pages/ResearchDetail";
import Documents from "./pages/Documents";
import AppShowcase from "./pages/AppShowcase";

function App() {
  return (
    <Router basename="/smart-cinnamon-web">
      <main className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/app" element={<AppShowcase />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
