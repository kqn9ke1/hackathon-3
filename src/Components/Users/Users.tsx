import React, { useContext, useEffect } from "react";
import { usersContext } from "../contexts/UsersContext/UsersContext";
import { usersContextType } from "../contexts/UsersContext/types";
import UserItem from "../UserItem/UserItem";

const Users = () => {
  const { users } = useContext(usersContext) as usersContextType;

  return (
    <div>
      {users?.map((item) => (
        <>
          <UserItem key={item.id} item={item} />
        </>
      ))}
    </div>
  );
};

export default Users;
