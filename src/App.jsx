import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Alumni from "./components/Alumni";
import Volunteer from "./components/Volunteer";
import Leads from "./components/Leads";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
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
