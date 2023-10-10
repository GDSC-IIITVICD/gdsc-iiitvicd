import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Lottie from "lottie-react";
import loadingdsc from "./loadinggdsc.json";
import Home from "./components/Home/Home";
import Alumni from "./components/Alumni/Alumni";
import Volunteer from "./components/Volunteer/Volunteer";
import Leads from "./components/Leads/Leads";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  );
}

export default App;
