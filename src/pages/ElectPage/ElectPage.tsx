import React, { useContext, useEffect } from "react";
import UserItem from "../../Components/UserItem/UserItem";
import { Link } from "react-router-dom";
import { electContext } from "../../Components/contexts/ElectContext/ElectContext";
import { IElectContextTypes } from "../../Components/contexts/ElectContext/types";

const ElectPage = () => {
  const { getElect, elect } = useContext(electContext) as IElectContextTypes;
  useEffect(() => {
    getElect();
  }, []);

  if (elect.users.length < 1) {
    return (
      <Link to="/users">
        <h1>to Users</h1>
      </Link>
    );
  }

  return (
    <>
      {elect.users?.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default ElectPage;
