export type usersContextType = {
  users: user[];
  user: user | null;
  getUsers: () => void;
};

export type user = {
  id: number;
  name: string;
  age: number;
  image: string;
  description: string;
  hobby: string[];
};

export type initSateType = {
  users: user[];
  user: user | null;
};

type usersActionType = {
  type: "users";
  payload: user[];
};
type userActionType = {
  type: "user";
  payload: user | null;
};

export type allActionType = usersActionType | userActionType;
