import React, { useContext } from "react";
import { Container, Box, CardMedia, Typography } from "@mui/material";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";

const DetailPage = () => {
  const { user, getOneUser, deleteUser, editUser } = useContext(
    usersContext
  ) as usersContextType;
  console.log(user, "details");

  return (
    <div>
      <Container>
        <Typography variant="h3">Profile</Typography>
        <Box>
          <CardMedia component={"img"} src=""></CardMedia>
        </Box>
        <Box>
          <Typography>{user?.name}</Typography>
          <Typography>{user?.description}</Typography>
          <Typography>{user?.email}</Typography>
          <Typography>{user?.hobbies}</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default DetailPage;
