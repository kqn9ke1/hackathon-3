import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import { MenuItem } from "@mui/material";
import { authContext } from "../../contexts/AuthContext/AuthContext";
import { IAuthContextTypes } from "../../contexts/AuthContext/types";
import { CardMedia } from "@mui/material";
import { Button } from "semantic-ui-react";
import "../Navbar/Navbar.css";

const settings = ["Profile", "Elect", "Favorite"];

function Navbar() {
  const navigate = useNavigate();
  const { logout, user } = React.useContext(authContext) as IAuthContextTypes;
  // const { user } = React.useContext(usersContext) as usersContextType;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          "linear-gradient(45deg, rgb(255, 34, 126), rgb(254, 172, 109))",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component={Link}
            to="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              display: "flex",
            }}
          >
            <CardMedia
              component={"img"}
              src="https://www.tinderpressroom.com/download/wordmark-R-white-RGB.png"
              sx={{ width: "103px" }}
            ></CardMedia>
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <IconButton component={Link} to="/users">
              <GridViewIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, margin: "4px" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://secure.gravatar.com/avatar/33dbb14aede9bc48aa232b1d52faef54.jpg?d=mp&s=1200"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() =>
                      setting === "Elect"
                        ? navigate("/elect")
                        : setting === "Favorite"
                        ? navigate("/favorite")
                        : navigate("/profile")
                    }
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* // sx={{ marginLeft: 3, color: "white", fontSize: "18px" }}
            // component={Link}
            // to="/auth" */}
          {user ? (
            <Box display="flex" alignItems="center" px={2} gap={1}>
              <Typography>{user?.email}</Typography>
              <Button
                sx={{ color: "white" }}
                onClick={logout}
                className="btn_logout"
              >
                Log Out
              </Button>
            </Box>
          ) : (
            <Button
              component={"a"}
              href="/auth"
              sx={{ color: "rgb(255, 34, 126)" }}
              className="btn_login"
            >
              Log in
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
