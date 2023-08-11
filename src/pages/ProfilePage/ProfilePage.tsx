import React, { useContext, useEffect, useState } from "react";
import {
  Typography,
  Box,
  Button,
  CircularProgress,
  Container,
  CardMedia,
} from "@mui/material";
import { authContext } from "../../Components/contexts/AuthContext/AuthContext";
import { IAuthContextTypes } from "../../Components/contexts/AuthContext/types";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";
import { Link } from "react-router-dom";
import "../ProfilePage/profilePage.css";

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
        <Container
          sx={{
            background:
              "linear-gradient(45deg, rgba(195,34,186,1) 11%, rgba(45,172,253,1) 91%)",
            width: "100%",
            height: "100vh",
            minWidth: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "37px",
              fontWeight: "900",
              color: "white",
              pt: "10%",
              textAlign: "center",
            }}
          >
            Profile
          </Typography>
          <Container
            id="profile_container"
            sx={{
              display: "flex",
              border: "1px solid white",
              borderRadius: "30px",
              backgroundColor: "white",
            }}
          >
            <CardMedia
              component={"img"}
              src={me[0].image}
              sx={{
                maxWidth: "300px",
                width: "100%",
                m: "20px",
                borderRadius: "30px",
              }}
            ></CardMedia>
            <Container
              className="info_con"
              sx={{ maxWidth: "350px", width: "100%", m: "auto" }}
            >
              <h1>{me[0].name}</h1>
              <h2>{me[0].age} y.o.</h2>
              <br />
              <p>
                <strong>About me: </strong>
                {me[0].description}
              </p>
              <p>
                <strong>Gender: </strong> {me[0].gender}
              </p>
              <p>
                <strong>Email: </strong> {me[0].email}
              </p>
              <p>
                <strong>Hobbies: </strong> {me[0].hobbies}
              </p>
              <br />
              <Container className="buttons">
                <Button
                  id="prof_btn"
                  component={Link}
                  to={`/edit/${me[0].id}`}
                  onClick={() => editUser(me[0])}
                >
                  Edit
                </Button>
                <Button
                  id="prof_btn_del"
                  onClick={() => {
                    logout();
                    deleteUser(me[0].id);
                  }}
                >
                  Delete
                </Button>
              </Container>
            </Container>
          </Container>
          <Button
            className="btn_to_back"
            sx={{
              fontSize: "30px",
              fontWeight: "900",
              color: "white",
              pt: "10px",
            }}
            component={Link}
            to="/users"
          >
            Back
          </Button>
        </Container>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default ProfilePage;
