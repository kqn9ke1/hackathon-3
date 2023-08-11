import React from "react";
import LiveSearch from "../Components/common/LiveSearch/LiveSearch";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const secondLayout = () => {
  return (
    <>
      <LiveSearch />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default secondLayout;
