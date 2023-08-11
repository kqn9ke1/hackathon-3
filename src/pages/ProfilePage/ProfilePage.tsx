import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Button, CircularProgress } from "@mui/material";
import { authContext } from "../../Components/contexts/AuthContext/AuthContext";
import { IAuthContextTypes } from "../../Components/contexts/AuthContext/types";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user, logout } = useContext(authContext) as IAuthContextTypes;
  const { editUser, deleteUser, getUsers, users } = useContext(
    usersContext
  ) as usersContextType;

  useEffect(() => {
    getUsers();
  }, []);
  // console.log(Boolean(user?.email));
  // console.log(Boolean(users));
  const me =
    users && user?.email
      ? users?.filter((item) => item.email === user?.email)
      : null;
  console.log(me ? me[0] : null);
  return (
    <>
      {me ? (
        <>
          <h1>{me[0].description}</h1>
          <h1>{me[0].description}</h1>
          <Button
            component={Link}
            to={`/edit/${me[0].id}`}
            onClick={() => editUser(me[0])}
          >
            Edit
          </Button>
          <button
            onClick={() => {
              logout();
              deleteUser(me[0].id);
            }}
          >
            Delete
          </button>
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default ProfilePage;
