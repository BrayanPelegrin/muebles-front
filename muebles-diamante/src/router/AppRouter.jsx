import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../layout/NavBar";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <div>
      <NavBar/>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};
