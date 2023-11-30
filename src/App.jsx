import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Alumni from "./components/Alumni/Alumni";
import Volunteer from "./components/Volunteer/Volunteer";
import Leads from "./components/Leads/Leads";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      {/* nested routing - react outlet */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/volunteers" element={<Volunteer />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
