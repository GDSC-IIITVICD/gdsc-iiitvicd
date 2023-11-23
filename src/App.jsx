import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Alumni from "./components/Alumni/Alumni";
import Volunteer from "./components/Volunteer/Volunteer";
import Leads from "./components/Leads/Leads";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    (
      <div>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
          <Footer/>
        </HashRouter>
      </div>
    )
  );
}

export default App;
