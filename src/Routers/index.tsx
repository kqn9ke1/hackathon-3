import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import BaseLayout from "../layouts/BaseLayout";
import UsersPage from "../pages/UsersPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import ElectPage from "../pages/ElectPage/ElectPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* <Route path="/add" element={<AddUserPage />} />*/}
        <Route path="/favorite" element={<FavoritesPage />} />
        <Route path="/elect" element={<ElectPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
