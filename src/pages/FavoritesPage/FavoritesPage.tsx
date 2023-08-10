import React, { useContext, useEffect } from "react";
import UserItem from "../../Components/UserItem/UserItem";
import { Link } from "react-router-dom";
import { favoritesContext } from "../../Components/contexts/FavoritesContext/FavoritesContext";
import { IFavoritesContextTypes } from "../../Components/contexts/FavoritesContext/types";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../FavoritesPage/styles.css";

const FavoritesPage = () => {
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
        <UserItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default FavoritesPage;
