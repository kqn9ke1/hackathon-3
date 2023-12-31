import React, {
  ReactNode,
  createContext,
  FC,
  useReducer,
  useState,
} from "react";
import { API, LIMIT } from "../../../utils/consts";
import axios from "axios";
import {
  allActionType,
  initSateType,
  newUser,
  user,
  usersContextType,
} from "./types";
import { useSearchParams } from "react-router-dom";

export const usersContext = createContext<usersContextType | null>(null);

type usersContextProps = {
  children: ReactNode;
};

const initState: initSateType = {
  users: null,
  user: null,
  pageTotalCount: 1,
};
const reducer = (state: initSateType, action: allActionType) => {
  switch (action.type) {
    case "users":
      return { ...state, users: action.payload };
    case "user":
      return { ...state, user: action.payload };
    case "pageTotalCount":
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
};

const UsersContext: FC<usersContextProps> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(reducer, initState);
  const [page, setPage] = useState<number>(
    +(searchParams.get("_page") as string) || 1
  );

  async function getUsers() {
    const { data, headers } = await axios.get<user[]>(
      `${API}${window.location.search}`
    );
    const count = Math.ceil(headers["x-total-count"] / LIMIT);

    dispatch({
      type: "pageTotalCount",
      payload: count,
    });
    dispatch({
      type: "users",
      payload: data,
    });
  }

  async function addUser(newUser: newUser) {
    await axios.post(API, newUser);
  }

  const deleteUser = async (id: number) => {
    await axios.delete(`${API}/${id}`);
    getUsers();
  };

  async function editUser(newData: user) {
    await axios.put(`${API}/${newData.id}`, newData);
  }

  async function getOneUser(id: number) {
    const { data } = await axios.get<user>(`${API}/${id}`);
    dispatch({
      type: "user",
      payload: data,
    });
  }

  const getFilteredUsers = async ({ gender }: { gender: string }) => {
    let { data } = await axios.get<user[]>(`${API}`);
    const users = data.filter((obj: user) => obj.gender === gender);
    dispatch({
      type: "users",
      payload: [...users],
    });
  };

  const getTotalPageCount = async () => {
    const { data } = await axios.get<user[]>(`${API}`);
    const count = Math.ceil(data.length / LIMIT);
    dispatch({
      type: "pageTotalCount",
      payload: count,
    });
  };

  const value = {
    users: state.users,
    user: state.user,
    page,
    pageTotalCount: state.pageTotalCount,
    getUsers,
    setPage,
    getTotalPageCount,
    getFilteredUsers,
    addUser,
    deleteUser,
    editUser,
    getOneUser,
  };
  return (
    <usersContext.Provider value={value}>{children}</usersContext.Provider>
  );
};

export default UsersContext;
