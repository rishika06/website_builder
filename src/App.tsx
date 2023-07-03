import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/Navbar";
import SkipToMainContent from "./components/SkipToMainContent";
import LandingPage from "./pages/LandingPage";
import MultiStepForm from "./pages/MultiStepFrom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/form" element={<MultiStepForm />} />
      </Routes>
    </>
  );
}

export default App;
