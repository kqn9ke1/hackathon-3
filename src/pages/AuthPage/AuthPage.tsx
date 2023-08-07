import React, { useState } from "react";
import { authContext } from "../../Components/contexts/AuthContext/AuthContext";
import {
  IAuthContextTypes,
  IUserCredentials,
} from "../../Components/contexts/AuthContext/types";

import { Navigate } from "react-router-dom";
import { Link } from "@mui/material";

const AuthPage = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const { login, register, user } = React.useContext(
    authContext
  ) as IAuthContextTypes;

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
  };

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h1>{isLogin ? "Sign in" : "Sign up"}</h1>

      <form action="" onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">{isLogin ? "Sign in" : "Sign up"}</button>
      </form>
      <Link onClick={() => setIsLogin(!isLogin)} href="#" variant="body2">
        {isLogin
          ? "Don't have an account? Sign Up"
          : "Already have an account? Sign In"}
      </Link>
    </>
  );
};

export default AuthPage;
