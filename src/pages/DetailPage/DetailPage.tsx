import React, { useContext, useEffect } from "react";
import {
  Container,
  Box,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const { user, getOneUser, deleteUser, editUser } = useContext(
    usersContext
  ) as usersContextType;

  useEffect(() => {
    id && getOneUser(+id);
  }, []);
  console.log(user, "details");

  return (
    <div>
      {user ? (
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
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default DetailPage;
