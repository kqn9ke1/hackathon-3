import React from "react";
import Navbar from "../Components/common/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container/Container";
import LiveSearch from "../Components/common/LiveSearch/LiveSearch";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <LiveSearch />

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default BaseLayout;
