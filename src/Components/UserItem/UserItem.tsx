import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { user, usersContextType } from "../contexts/UsersContext/types";
import { CardMedia, Container } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import { favoritesContext } from "../contexts/FavoritesContext/FavoritesContext";
import { IFavoritesContextTypes } from "../contexts/FavoritesContext/types";
import { usersContext } from "../contexts/UsersContext/UsersContext";
import { electContext } from "../contexts/ElectContext/ElectContext";
import { IElectContextTypes } from "../contexts/ElectContext/types";
import TinderCard from "react-tinder-card";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

type propsType = {
  item: user;
};

const UserItem: React.FC<propsType> = ({ item }) => {
  // const { deleteUser } = React.useContext(usersContext) as usersContextType;
  const { addUserToFavorites, deleteUserFromFavorites, isAlreadyInFavorites } =
    React.useContext(favoritesContext) as IFavoritesContextTypes;

  const { addUserToElect, deleteUserFromElect, isAlreadyInElect } =
    React.useContext(electContext) as IElectContextTypes;

  const { users, getUsers } = React.useContext(
    usersContext
  ) as usersContextType;

  // console.log(item);

  // console.log(users);

  const [lastDirection, setLastDirection] = React.useState();

  const swiped = (direction: string | any, nameToDelete: string) => {
    console.log("removing: " + nameToDelete);
    addUserToFavorites(direction);
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen!");
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "90%",
      }}
    >
      <TinderCard
        className="swipe"
        onSwipe={(dir) => swiped(dir, item.name)}
        onCardLeftScreen={() => outOfFrame(item.name)}
      >
        <Card sx={{ width: 420, mb: "20px", position: "absolute" }}>
          <CardContent>
            <CardMedia
              component={"img"}
              src={`${item.image}`}
              // sx={{
              //   backgroundImage: "url(" + item.image + ")",
              //   backgroundSize: "contain",
              //   backgroundRepeat: "no-repeat",
              // }}
              className="card"
            ></CardMedia>
            <h2>{item.name}</h2>

            <div className="swipe_info">
              {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
            </div>
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
            <Button size="large" component={Link} to={`/details/${item.id}`}>
              <InfoIcon sx={{ width: "50px", height: "50px" }} />
            </Button>
          </CardActions>
        </Card>
      </TinderCard>
    </Container>
  );
};
// {isAlreadyInElect(item.id) ? (
//   <button onClick={() => deleteUserFromElect(item.id)}>unElect</button>
// ) : (
//   <button onClick={() => addUserToElect(item)}>Elect</button>
// )}
export default UserItem;
