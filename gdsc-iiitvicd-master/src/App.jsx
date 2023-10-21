import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Alumni from "./components/Alumni/Alumni";
import Volunteer from "./components/Volunteer/Volunteer";
import Leads from "./components/Leads/Leads";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
