import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";
import { Home } from "../pages/Home";
import { Products } from "../pages/";

export const AdminRoutes = () => {
  

  return (
    <>
      <AdminLayout>
        <Routes>
          <Route path="home" element={<Home />} />

          <Route path="products" element={ <Products/> }/>
          
          <Route path="/*" element={<Navigate to="home" />} />
        </Routes>
      </AdminLayout>
    </>
  );
};
