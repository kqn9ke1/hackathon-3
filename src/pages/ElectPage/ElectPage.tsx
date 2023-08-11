import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { electContext } from "../../Components/contexts/ElectContext/ElectContext";
import { IElectContextTypes } from "../../Components/contexts/ElectContext/types";
import { Box, CardMedia, IconButton, Typography, Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Container, Card, CardContent, CardActions } from "@mui/material";

const ElectPage = () => {
  const {
    getElect,
    elect,
    addUserToElect,
    deleteUserFromElect,
    isAlreadyInElect,
  } = useContext(electContext) as IElectContextTypes;
  useEffect(() => {
    getElect();
  }, []);

  if (elect.users.length < 1) {
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
            sx={{ color: "white", fontSize: "22px" }}
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
      {elect.users?.map((item) => (
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
              {/* <Button size="large">
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
            </Button> */}
              <Button size="large">
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
              </Button>
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

export default ElectPage;
