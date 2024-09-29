import React from "react";
import { Routes, Route } from "react-router-dom";

import ToppsNOW from "./routes/ToppsNOW";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/toppsnow" element={<ToppsNOW />} />
      </Routes>
    </>
  );
}

export default App;
