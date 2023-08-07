import React, { useContext, useEffect } from "react";
import { ILikeContextTypes } from "../../Components/contexts/ElectContext/types";
import UserItem from "../../Components/UserItem/UserItem";
import { Link } from "react-router-dom";
import { likeContext } from "../../Components/contexts/ElectContext/ElectContext";

const LikePage = () => {
  const { getLike, like } = useContext(likeContext) as ILikeContextTypes;
  useEffect(() => {
    getLike();
  }, []);

  if (like.users.length < 1) {
    return (
      <Link to="/users">
        <h1>to Users</h1>
      </Link>
    );
  }

  return (
    <>
      {like.users?.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default LikePage;
