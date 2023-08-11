import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { authContext } from "../../Components/contexts/AuthContext/AuthContext";
import { IAuthContextTypes } from "../../Components/contexts/AuthContext/types";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useContext(authContext) as IAuthContextTypes;
  const { editUser, deleteUser } = useContext(usersContext) as usersContextType;
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       setUser(authUser);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }
  console.log(user);

  return (
    <Box sx={{ mt: "70px" }}>
      <Typography>{user?.email}</Typography>
      <Typography>{user?.email}</Typography>
      <Typography>{user?.email}</Typography>
      <Typography>{user?.email}</Typography>
      <Button component={Link} to="/edit/:id">
        Edit
      </Button>
      {/* <Button onclick={deleteUser}>Delete</Button> */}
    </Box>
  );
};

export default ProfilePage;
