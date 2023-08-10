import React, { useContext } from "react";
import { authContext } from "../../Components/contexts/AuthContext/AuthContext";
import { IAuthContextTypes } from "../../Components/contexts/AuthContext/types";

const ProfilePage = () => {
  const { user } = useContext(authContext) as IAuthContextTypes;
  console.log(user);

  return (
    <div>
      <div>{user?.email}</div>
    </div>
  );
};

export default ProfilePage;
