import React, { useContext, useEffect } from "react";
import { usersContext } from "../contexts/UsersContext/UsersContext";
import { usersContextType } from "../contexts/UsersContext/types";
import UserItem from "../UserItem/UserItem";

const Users = () => {
  const { users, getUsers } = useContext(usersContext) as usersContextType;

  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);

  return (
    <div>
      {users.map((item) => (
        <>
          <UserItem key={item.id} item={item} />
        </>
      ))}
    </div>
  );
};

export default Users;
