import React, { useContext, useEffect } from "react";
import UserItem from "../../Components/UserItem/UserItem";
import { Link } from "react-router-dom";
import { electContext } from "../../Components/contexts/ElectContext/ElectContext";
import { IElectContextTypes } from "../../Components/contexts/ElectContext/types";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button } from "semantic-ui-react";

const ElectPage = () => {
  const { getElect, elect } = useContext(electContext) as IElectContextTypes;
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
        <UserItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default ElectPage;
