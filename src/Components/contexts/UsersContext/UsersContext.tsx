import React, {
  ReactNode,
  createContext,
  FC,
  useReducer,
  useState,
  useContext,
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
import { authContext } from "../AuthContext/AuthContext";
import { IAuthContextTypes } from "../AuthContext/types";

export const usersContext = createContext<usersContextType | null>(null);

type usersContextProps = {
  children: ReactNode;
};

const initState: initSateType = {
  users: null,
  user: null,
  emailUser: null,
  pageTotalCount: 1,
};
const reducer = (state: initSateType, action: allActionType) => {
  switch (action.type) {
    case "users":
      return { ...state, users: action.payload };
    case "user":
      return { ...state, user: action.payload };
    case "emailUser":
      return { ...state, emailUser: action.payload };
    case "pageTotalCount":
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
};

const UsersContext: FC<usersContextProps> = ({ children }) => {
  // const { logout } = useContext(authContext) as IAuthContextTypes;
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
  // const getUsers = async (gender?: string) => {
  //   try {
  //     let search = window.location.search;
  //     if (gender && gender !== "all") {
  //       search += `&gender=${gender}`;
  //     }
  //     const { data, headers } = await axios.get<user[]>(`${API}${search}`);
  //     const countPage = headers["x-total-count"] ?? 0;
  //     dispatch({
  //       type: "users",
  //       payload: data,
  //     });
  //     dispatch({
  //       type: "pageTotalCount",
  //       payload: Math.ceil(countPage / LIMIT),
  //     });
  //     // console.log(state);
  //   } catch (error) {
  //     console.log(error, "error getUsers");
  //   }
  // };
  async function addUser(newUser: newUser) {
    await axios.post(API, newUser);
  }

  //функция для удаления юзера
  const deleteUser = async (id: number) => {
    await axios.delete(`${API}/${id}`);
    // logout();
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
  async function getEmailUser(email: string) {
    const { data } = await axios.get<user[]>(`${API}`);
    const [emailUser] = data.filter((item) => {
      if (item.email === email) {
        return item;
      }
    });

    dispatch({
      type: "emailUser",
      payload: emailUser,
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
    getUsers,
    page,
    pageTotalCount: state.pageTotalCount,
    setPage,
    getTotalPageCount,
    getFilteredUsers,
    addUser,
    deleteUser,
    editUser,
    getOneUser,
    getEmailUser,
    emailUser: state.emailUser,
  };
  return (
    <usersContext.Provider value={value}>{children}</usersContext.Provider>
  );
};

export default UsersContext;
