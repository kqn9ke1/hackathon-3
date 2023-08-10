import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../../utils/consts";
import { usersContext } from "../../contexts/UsersContext/UsersContext";
import { usersContextType } from "../../contexts/UsersContext/types";
import { Box, Input } from "@mui/material";

const LiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = useState<string>(
    searchParams.get("q") || ""
  );
  const { setPage, getUsers } = useContext(usersContext) as usersContextType;

  const [firstMount, setFirstMount] = useState(true);
  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    const currentParams = Object.fromEntries([...searchParams]);

    setSearchParams({
      ...currentParams,
      q: searchVal,
    });
    setPage(1);
    getUsers();
  }, [searchVal]);
  return (
    <Box sx={{ backgroundColor: "rgb(210 202 202 / 58%)" }}>
      <Input
        sx={{
          padding: "10px 20px",
          border: "solid 1px black",
          margin: "20px 10px",
          maxWidth: "375px",
          width: "100%",
        }}
        type="search"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search…"
      />
    </Box>

  );
};

export default LiveSearch;
