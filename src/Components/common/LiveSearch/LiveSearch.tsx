import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../../utils/consts";
import { usersContext } from "../../contexts/UsersContext/UsersContext";
import { usersContextType } from "../../contexts/UsersContext/types";

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
    <input
      type="text"
      value={searchVal}
      onChange={(e) => setSearchVal(e.target.value)}
      placeholder="Search…"
    />
  );
};

export default LiveSearch;
