import React from "react";

import { Route, Routes } from "react-router-dom";

import Layout from "../containers/Layout";

import Home from "../pages/Home";
import Orders from "../pages/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/order-list" element={<Layout><Orders /></Layout>} />
    </Routes>
  );
}

export default AppRoutes;