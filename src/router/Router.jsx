import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "../layouts/UserLayout/UserLayout";
import HomePage from "../pages/Homepage/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
