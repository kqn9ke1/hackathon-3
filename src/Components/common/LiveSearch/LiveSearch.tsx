import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usersContext } from "../../contexts/UsersContext/UsersContext";
import { usersContextType } from "../../contexts/UsersContext/types";
import { Box, Input } from "@mui/material";
import "../LiveSearch/liveSearch.css";

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
    <Box
      sx={{
        // backgroundColor: "rgb(210 202 202 / 58%)",
        display: "flex",
        justifyContent: "center",
        mt: "68px",
      }}
    >
      <Input
        sx={{
          padding: "5px 20px",
          border: "solid 1px black",
          margin: "8px 10px",
          fontSize: "22px",
          maxWidth: "420px",
          width: "100%",
          borderRadius: "10px",
          borderLeft: "5px solid red",
          borderTop: "4px solid rgb(248 94 94)",
          borderRight: "3px solid rgb(254 137 47)",
          borderBottom: "2px solid rgb(254, 172, 109)",
        }}
        className="searchInp"
        type="search"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        placeholder="Search…"
      />
    </Box>
  );
};

export default LiveSearch;
