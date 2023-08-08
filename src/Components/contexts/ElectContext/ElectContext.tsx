import React, { FC, ReactNode, createContext, useState } from "react";
import { IElect, IElectContextTypes } from "./types";
import { user } from "../UsersContext/types";

export const electContext = createContext<IElectContextTypes | null>(null);

const initState: IElect = {
  users: [],
};

interface IElectContextProps {
  children: ReactNode;
}

function getElectFromLS(): IElect {
  const data = JSON.parse(localStorage.getItem("Elect") as string);
  if (!data) {
    return initState;
  }

  return data;
}

function setElectToLS(Elect: IElect) {
  localStorage.setItem("Elect", JSON.stringify(Elect));
}

const ElectContext: FC<IElectContextProps> = ({ children }) => {
  const [elect, setElect] = useState(initState);

  function getElect() {
    const data = getElectFromLS();
    setElect(data);
  }

  function addUserToElect(user: user) {
    const data = getElectFromLS();
    data.users.push(user);
    setElectToLS(data);
    getElect();
    alert("Successfully added to Elect!");
  }

  function deleteUserFromElect(id: number) {
    const data = getElectFromLS();
    data.users = data.users.filter((item) => item.id !== id);
    setElectToLS(data);
    getElect();
    alert("Successfully removed from Elect!");
  }

  // для карточек UserItemPage
  //   isInElect ? красное сердечко : пустое сердечко
  function isAlreadyInElect(id: number): boolean {
    const data = getElectFromLS();
    const isInElect = data.users.some((item) => item.id === id);
    return isInElect;
  }

  function clearElect() {
    localStorage.removeItem("Elect");
    getElect();
  }
  const value = {
    elect,
    getElect,
    addUserToElect,
    deleteUserFromElect,
    isAlreadyInElect,
    clearElect,
  };
  return (
    <electContext.Provider value={value}>{children}</electContext.Provider>
  );
};

export default ElectContext;
