import React, { useContext, useEffect } from "react";
import {
  Container,
  CardMedia,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";
import { Link, useParams } from "react-router-dom";
import "../DetailPage/detailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const { user, getOneUser } = useContext(usersContext) as usersContextType;

  useEffect(() => {
    id && getOneUser(+id);
  }, []);
  console.log(user, "details");

  return (
    <div>
      {user ? (
        <Container
          className="container_detailsPage"
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
              src={user.image}
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
              <h1>{user.name}</h1>
              <h2>{user.age} y.o.</h2>
              <br />
              <p>
                <strong>About me: </strong>
                {user.description}
              </p>
              <p>
                <strong>Gender: </strong> {user.gender}
              </p>
              <p>
                <strong>Email: </strong> {user.email}
              </p>
              <p>
                <strong>Hobbies: </strong> {user.hobbies}
              </p>
              <br />
            </Container>
          </Container>
          <Button
            className="btn_to_back"
            sx={{
              fontSize: "30px",
              fontWeight: "900",
              color: "white",
              pt: "10px",
              textAlign: "center",
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
    </div>
  );
};

export default DetailPage;
