import React, { FC, ReactNode, createContext, useState } from "react";
import { IFavorites, IFavoritesContextTypes } from "./types";
import { user } from "../UsersContext/types";

export const favoritesContext = createContext<IFavoritesContextTypes | null>(
  null
);

const initState: IFavorites = {
  users: [],
};

interface IFavoritesContextProps {
  children: ReactNode;
}

function getFavoritesFromLS(): IFavorites {
  const data = JSON.parse(localStorage.getItem("Favorites") as string);
  if (!data) {
    return initState;
  }

  return data;
}

function setFavoritesToLS(favorites: IFavorites) {
  localStorage.setItem("Favorites", JSON.stringify(favorites));
}

const FavoritesContext: FC<IFavoritesContextProps> = ({ children }) => {
  const [favorites, setFavorites] = useState(initState);

  function getFavorites() {
    const data = getFavoritesFromLS();
    setFavorites(data);
  }

  function addUserToFavorites(user: user) {
    const data = getFavoritesFromLS();
    data.users.push(user);
    setFavoritesToLS(data);
    getFavorites();
    alert("Successfully added to Favorites!");
  }

  function deleteUserFromFavorites(id: number) {
    const data = getFavoritesFromLS();
    data.users = data.users.filter((item) => item.id !== id);
    setFavoritesToLS(data);
    getFavorites();
    alert("Successfully removed from Favorites!");
  }

  // для карточек UserItemPage
  //   isInFavorites ? красное сердечко : пустое сердечко
  function isAlreadyInFavorites(id: number): boolean {
    const data = getFavoritesFromLS();
    const isInFavorites = data.users.some((item) => item.id === id);
    return isInFavorites;
  }

  function clearFavorites() {
    localStorage.removeItem("Favorites");
    getFavorites();
  }
  const value = {
    favorites,
    getFavorites,
    addUserToFavorites,
    deleteUserFromFavorites,
    isAlreadyInFavorites,
    clearFavorites,
  };
  return (
    <favoritesContext.Provider value={value}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContext;
