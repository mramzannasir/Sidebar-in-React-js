import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Git from "../pages/Git"
import Css from "../pages/Css"
import Java from "../pages/Java"




const Navpage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/git" element={<Git />} />
        <Route path="/css" element={<Css />} />
        <Route path="/java" element={<Java />} />
      </Routes>
    </>
  );
};

export default Navpage;
