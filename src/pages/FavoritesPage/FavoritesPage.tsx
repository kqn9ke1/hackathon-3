import React, { useContext, useEffect } from "react";
import UserItem from "../../Components/UserItem/UserItem";
import { Link } from "react-router-dom";
import { favoritesContext } from "../../Components/contexts/FavoritesContext/FavoritesContext";
import { IFavoritesContextTypes } from "../../Components/contexts/FavoritesContext/types";

const FavoritesPage = () => {
  const { getFavorites, favorites } = useContext(
    favoritesContext
  ) as IFavoritesContextTypes;
  useEffect(() => {
    getFavorites();
  }, []);

  if (favorites.users.length < 1) {
    return (
      <Link to="/users">
        <h1>to Users</h1>
      </Link>
    );
  }

  return (
    <>
      {favorites.users?.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default FavoritesPage;
