import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { favoritesContext } from "../../Components/contexts/FavoritesContext/FavoritesContext";
import { IFavoritesContextTypes } from "../../Components/contexts/FavoritesContext/types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InfoIcon from "@mui/icons-material/Info";

import {
  Box,
  CardMedia,
  IconButton,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../FavoritesPage/styles.css";

const FavoritesPage = () => {
  const { addUserToFavorites, deleteUserFromFavorites, isAlreadyInFavorites } =
    React.useContext(favoritesContext) as IFavoritesContextTypes;
  const [lastDirection, setLastDirection] = React.useState();

  const { getFavorites, favorites } = useContext(
    favoritesContext
  ) as IFavoritesContextTypes;
  useEffect(() => {
    getFavorites();
  }, []);

  if (favorites.users.length < 1) {
    return (
      <Box
        component={Link}
        to="/users"
        sx={{
          textDecoration: "none",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          component={"img"}
          src="https://png.pngtree.com/png-clipart/20230604/original/pngtree-in-this-coloring-page-you-can-see-a-heart-in-it-png-image_9178736.png"
          sx={{ width: "250px", margin: "200px auto 20px" }}
        ></CardMedia>
        <IconButton
          sx={{
            background: "linear-gradient(45deg,rgb(255 52 86), rgb(255 96 81))",
            borderRadius: "10px",
            padding: "5px 10px",
            mt: "10px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "white", fontSize: "25px" }}
            className="typography"
          >
            <KeyboardBackspaceIcon sx={{ width: "30px" }} />
            Go back to Users
          </Typography>
        </IconButton>
      </Box>
    );
  }

  return (
    <>
      {favorites.users?.map((item) => (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "90%",
          }}
        >
          <Card sx={{ width: 420, mb: "20px", position: "absolute" }}>
            <CardContent>
              <CardMedia
                component={"img"}
                src={`${item.image}`}
                className="card"
              ></CardMedia>
              <h2>{item.name}</h2>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button size="large">
                {isAlreadyInFavorites(item.id) ? (
                  <FavoriteIcon
                    onClick={() => deleteUserFromFavorites(item.id)}
                    sx={{ width: "50px", height: "50px", color: "red" }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => addUserToFavorites(item)}
                    sx={{ width: "50px", height: "50px", color: "red" }}
                  />
                )}
              </Button>
              {/* <Button size="large">
                {isAlreadyInElect(item.id) ? (
                  <StarIcon
                    onClick={() => deleteUserFromElect(item.id)}
                    sx={{ width: "50px", height: "50px", color: "yellow" }}
                  />
                ) : (
                  <StarBorderIcon
                    onClick={() => addUserToElect(item)}
                    sx={{ width: "50px", height: "50px", color: "yellow" }}
                  />
                )}
              </Button> */}
              <Button size="large">
                <InfoIcon sx={{ width: "50px", height: "50px" }} />
              </Button>
            </CardActions>
          </Card>
        </Container>
      ))}
    </>
  );
};

export default FavoritesPage;
