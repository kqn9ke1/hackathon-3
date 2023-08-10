import React, { useContext, useEffect, useState } from "react";
import Users from "../Components/Users/Users";
import { Box } from "@mui/material";
import Filter from "../Components/common/Filter/Filter";
import Pagination from "../Components/common/Pagination/Pagination";
import { usersContext } from "../Components/contexts/UsersContext/UsersContext";
import { usersContextType } from "../Components/contexts/UsersContext/types";

const UsersPage = () => {
  const { getUsers } = useContext(usersContext) as usersContextType;

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Filter />
      </Box>
      <Users />
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Pagination />
      </Box>
    </div>
  );
};

export default UsersPage;
