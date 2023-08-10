import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import BaseLayout from "../layouts/BaseLayout";
import UsersPage from "../pages/UsersPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import ElectPage from "../pages/ElectPage/ElectPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import EditUserPage from "../pages/EditUserPage/EditUserPage";
import AddUserPage from "../pages/AddUserPage/AddUserPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/edit/:id" element={<EditUserPage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
        <Route path="/elect" element={<ElectPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/add" element={<AddUserPage />} />
    </Routes>
  );
};

export default AppRoutes;
