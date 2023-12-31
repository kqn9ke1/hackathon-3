import React, { useEffect, useState } from "react";
import { authContext } from "../../Components/contexts/AuthContext/AuthContext";
import {
  IAuthContextTypes,
  IUserCredentials,
} from "../../Components/contexts/AuthContext/types";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import "../AuthPage/AuthPage.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { usersContext } from "../../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../../Components/contexts/UsersContext/types";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
  },
});

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = React.useState(true);
  const { login, register, user } = React.useContext(
    authContext
  ) as IAuthContextTypes;
  const { users, getUsers } = React.useContext(
    usersContext
  ) as usersContextType;

  useEffect(() => {
    getUsers();
  }, []);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const credentials = {
      email: data.get("email"),
      password: data.get("password"),
    } as IUserCredentials;

    if (isLogin) {
      login(credentials);
    } else {
      register(credentials);
    }

    let flag = false;
    users?.forEach((item) => {
      if (item.email === credentials.email) {
        flag = true;
      }
    });

    if (flag) {
      navigate("/users");
    }
  };

  if (user) {
    return <Navigate to="/add" />;
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="auth_con">
        <div className="auth_backdrop">
          <h1>{isLogin ? "Sign in" : "Sign up"}</h1>
          <form className="auth_form" action="" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">{isLogin ? "Sign in" : "Sign up"}</button>
          </form>
          <Link
            onClick={() => setIsLogin(!isLogin)}
            href="#"
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AuthPage;
