import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Lottie from "lottie-react";
import loadingdsc from "./loadinggdsc.json";

// Lazily loaded components
const Home = React.lazy(() => import("./components/Home/Home"));
const Alumni = React.lazy(() => import("./components/Alumni/Alumni"));
const Leads = React.lazy(() => import("./components/Leads/Leads"));
const Volunteer = React.lazy(() => import("./components/Volunteer/Volunteer"));

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
        </BrowserRouter>
      </div>
    )
  );
}

export default App;
