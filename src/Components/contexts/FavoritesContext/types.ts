import { user } from "../UsersContext/types";

export interface IFavorites {
  users: user[];
}

export interface IFavoritesContextTypes {
  favorites: IFavorites;
  getFavorites: () => void;
  addUserToFavorites: (user: user) => void;
  deleteUserFromFavorites: (id: number) => void;
  isAlreadyInFavorites: (id: number) => boolean;
  clearFavorites: () => void;
}
