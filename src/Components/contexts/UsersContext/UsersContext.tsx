import React, { ReactNode, createContext, FC, useReducer } from "react";
import { API } from "../../../utils/consts";
import axios from "axios";
import { allActionType, initSateType, user, usersContextType } from "./types";

export const usersContext = createContext<usersContextType | null>(null);

type usersContextProps = {
  children: ReactNode;
};

const initState: initSateType = {
  users: [],
  user: null,
};
const reducer = (state: initSateType, action: allActionType) => {
  switch (action.type) {
    case "users":
      return { ...state, users: action.payload };
    case "user":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const UsersContext: FC<usersContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getUsers = async () => {
    try {
      const { data } = await axios.get<user[]>(
        `${API}${window.location.search}`
      );

      dispatch({
        type: "users",
        payload: data,
      });
    } catch (error) {
      console.log(error, "error getUsers");
    }
  };

  //функция для удаления юзера
  const deleteUser = async (id: number) => {
    await axios.delete(`${API}/${id}`);
    getUsers();
  };

  const value = {
    users: state.users,
    user: state.user,
    getUsers,
  };
  return (
    <usersContext.Provider value={value}>{children}</usersContext.Provider>
  );
};

export default UsersContext;
